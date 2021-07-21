import * as fs from 'fs';
import * as path from 'path';
import { Construct, Node, IConstruct } from 'constructs';
import { ApiObject } from './api-object';
import { Chart } from './chart';
import { DependencyGraph } from './dependency';
import { Names } from './names';
import { Yaml } from './yaml';

export interface AppProps {
  /**
   * The directory to output Kubernetes manifests.
   *
   * @default - CDK8S_OUTDIR if defined, otherwise "dist"
   */
  readonly outdir?: string;
}

/**
 * Represents a cdk8s application.
 */
export class App extends Construct {
  /**
   * Synthesize a single chart.
   *
   * Each element returned in the resulting array represents a different ApiObject
   * in the scope of the chart.
   *
   * Note that the returned array order is important. It is determined by the various dependencies between
   * the constructs in the chart, where the first element is the one without dependencies, and so on...
   *
   * @returns An array of JSON objects.
   * @param chart the chart to synthesize.
   * @internal
   */
  public static _synthChart(chart: Chart): any[] {

    const app: App = App.of(chart);

    // we must prepare the entire app before synthesizing the chart
    // because the dependency inference happens on the app level.
    resolveDependencies(app);

    // validate the app since we want to call onValidate of the relevant constructs.
    // note this will also call onValidate on constructs from possibly different charts,
    // but thats ok too since we no longer treat constructs as a self-contained synthesis unit.
    validate(app);

    return chartToKube(chart);
  }

  private static of(c: IConstruct): App {

    const scope = Node.of(c).scope;

    if (!scope) {
      // the app is the only construct without a scope.
      return c as App;
    }

    return App.of(scope);
  }

  /**
   * The output directory into which manifests will be synthesized.
   */
  public readonly outdir: string;

  /**
   * Defines an app
   * @param props configuration options
   */
  constructor(props: AppProps = { }) {
    super(undefined as any, '');
    this.outdir = props.outdir ?? process.env.CDK8S_OUTDIR ?? 'dist';
  }

  /**
   * Synthesizes all manifests to the output directory
   */
  public synth(): void {

    fs.mkdirSync(this.outdir, { recursive: true });

    // this is kind of sucky, eventually I would like the DependencyGraph
    // to be able to answer this question.
    const hasDependantCharts = resolveDependencies(this);

    // Since we plan on removing the distributed synth mechanism, we no longer call `Node.synthesize`, but rather simply implement
    // the necessary operations. We do however want to preserve the distributed validation.
    validate(this);

    const charts = new DependencyGraph(Node.of(this)).topology()
      .filter(x => x instanceof Chart);

    const found = new Set<IConstruct>();
    const namer: ChartNamer = hasDependantCharts ? new IndexedChartNamer() : new SimpleChartNamer();
    for (const node of charts) {
      const chart: Chart = Chart.of(node);

      // charts may nest each other and have overlapping scopes, so objects must be deduped
      // otherwise two or more charts may include the same object
      const objects = new DependencyGraph(Node.of(chart)).topology()
        .filter(x => (x instanceof ApiObject) && !found.has(x));

      const chartName = namer.name(chart);
      const manifestContents = objects.map(x => (x as ApiObject).toJson());
      Yaml.save(path.join(this.outdir, chartName), manifestContents);

      for (const obj of objects) {
        found.add(obj);
      }
    }

  }
}

function validate(app: App) {

  // Note this is a copy-paste of https://github.com/aws/constructs/blob/master/lib/construct.ts#L438.
  const errors = Node.of(app).validate();
  if (errors.length > 0) {
    const errorList = errors.map(e => `[${Node.of(e.source).path}] ${e.message}`).join('\n  ');
    throw new Error(`Validation failed with the following errors:\n  ${errorList}`);
  }

}

function resolveDependencies(app: App) {

  let hasDependantCharts = false;

  for (const dep of Node.of(app).dependencies) {

    // create explicit api object dependencies from implicit construct dependencies
    const targetApiObjects = Node.of(dep.target).findAll().filter(c => c instanceof ApiObject);
    const sourceApiObjects = Node.of(dep.source).findAll().filter(c => c instanceof ApiObject);

    for (const target of targetApiObjects) {
      for (const source of sourceApiObjects) {
        if (target !== source) {
          Node.of(source).addDependency(target);
        }
      }
    }

    // create an explicit chart dependency from implicit construct dependencies
    const sourceChart = Chart.of(dep.source);
    const targetChart = Chart.of(dep.target);

    if (sourceChart !== targetChart) {
      Node.of(sourceChart).addDependency(targetChart);
      hasDependantCharts = true;
    }

  }

  const charts = new DependencyGraph(Node.of(app)).topology()
    .filter(x => x instanceof Chart);

  for (const parent of charts) {
    for (const child of charts) {

      // create an explicit chart dependency from nested chart relationships
      const parentChart = Chart.of(parent);
      const childChart = Chart.of(child);

      if (parentChart !== childChart && Node.of(parent).tryFindChild(Node.of(child).id)) {
        Node.of(parentChart).addDependency(childChart);
        hasDependantCharts = true;
      }
    }
  }

  return hasDependantCharts;

}

function chartToKube(chart: Chart) {
  return new DependencyGraph(Node.of(chart)).topology()
    .filter(x => x instanceof ApiObject)
    .map(x => (x as ApiObject).toJson());
}

interface ChartNamer {
  name(chart: Chart): string;
}

class SimpleChartNamer implements ChartNamer {
  constructor() {
  }

  public name(chart: Chart) {
    return `${Names.toDnsLabel(chart)}.k8s.yaml`;
  }
}

class IndexedChartNamer extends SimpleChartNamer implements ChartNamer {
  private index: number = 0;
  constructor() {
    super();
  }

  public name(chart: Chart) {
    const name = `${this.index.toString().padStart(4, '0')}-${super.name(chart)}`;
    this.index++;
    return name;
  }
}
