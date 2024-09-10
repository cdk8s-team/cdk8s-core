import * as fs from 'fs';
import * as path from 'path';
import { Construct, IConstruct, Node } from 'constructs';
import { ApiObject } from './api-object';
import { Chart } from './chart';
import { DependencyGraph } from './dependency';
import { Names } from './names';
import { IResolver, ImplicitTokenResolver, LazyResolver, NumberStringUnionResolver } from './resolve';
import { Yaml } from './yaml';

/** The method to divide YAML output into files */
export enum YamlOutputType {
  /** All resources are output into a single YAML file */
  FILE_PER_APP,
  /** Resources are split into seperate files by chart */
  FILE_PER_CHART,
  /** Each resource is output to its own file */
  FILE_PER_RESOURCE,
  /** Each chart in its own folder and each resource in its own file */
  FOLDER_PER_CHART_FILE_PER_RESOURCE,
}

export interface AppProps {
  /**
   * The directory to output Kubernetes manifests.
   *
   * If you synthesize your application using `cdk8s synth`, you must
   * also pass this value to the CLI using the `--output` option or
   * the `output` property in the `cdk8s.yaml` configuration file.
   * Otherwise, the CLI will not know about the output directory,
   * and synthesis will fail.
   *
   * This property is intended for internal and testing use.
   *
   * @default - CDK8S_OUTDIR if defined, otherwise "dist"
   */
  readonly outdir?: string;
  /**
   *  The file extension to use for rendered YAML files
   * @default .k8s.yaml
   */
  readonly outputFileExtension?: string;
  /**
   *  How to divide the YAML output into files
   * @default YamlOutputType.FILE_PER_CHART
   */
  readonly yamlOutputType?: YamlOutputType;

  /**
   * When set to true, the output directory will contain a `construct-metadata.json` file
   * that holds construct related metadata on every resource in the app.
   *
   * @default false
   */
  readonly recordConstructMetadata?: boolean;

  /**
   * A list of resolvers that can be used to replace property values before
   * they are written to the manifest file. When multiple resolvers are passed,
   * they are invoked by order in the list, and only the first one that applies
   * (e.g calls `context.replaceValue`) is invoked.
   *
   * @see https://cdk8s.io/docs/latest/basics/app/#resolvers
   *
   * @default - no resolvers.
   */
  readonly resolvers?: IResolver[];
}

class SynthRequestCache {
  public nodeChildrenCache: Map<Node, IConstruct[]> = new Map<Node, IConstruct[]>();

  public findAll(node: Node): IConstruct[] {
    if (this.nodeChildrenCache.has(node)) {
      return this.nodeChildrenCache.get(node)!;
    }

    const children = node.findAll();
    this.nodeChildrenCache.set(node, children);
    return children;
  }
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

    const cache = new SynthRequestCache();

    // we must prepare the entire app before synthesizing the chart
    // because the dependency inference happens on the app level.
    resolveDependencies(app, cache);

    // validate the app since we want to call onValidate of the relevant constructs.
    // note this will also call onValidate on constructs from possibly different charts,
    // but thats ok too since we no longer treat constructs as a self-contained synthesis unit.
    validate(app, cache);

    return chartToKube(chart).map(obj => obj.toJson());
  }

  public static of(c: IConstruct): App {

    const scope = c.node.scope;

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
   *  The file extension to use for rendered YAML files
   * @default .k8s.yaml
   */
  public readonly outputFileExtension: string;

  /** How to divide the YAML output into files
   * @default YamlOutputType.FILE_PER_CHART
   */
  public readonly yamlOutputType: YamlOutputType;

  /**
   * Resolvers used by this app. This includes both custom resolvers
   * passed by the `resolvers` property, as well as built-in resolvers.
   */
  public readonly resolvers: IResolver[];

  private readonly recordConstructMetadata: boolean;

  /**
   * Returns all the charts in this app, sorted topologically.
   */
  public get charts(): Chart[] {
    const isChart = (x: IConstruct): x is Chart => x instanceof Chart;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isChart);
  }

  /**
   * Defines an app
   * @param props configuration options
   */
  constructor(props: AppProps = {}) {
    super(undefined as any, '');
    this.outdir = props.outdir ?? process.env.CDK8S_OUTDIR ?? 'dist';
    this.outputFileExtension = props.outputFileExtension ?? '.k8s.yaml';
    this.yamlOutputType = props.yamlOutputType ?? YamlOutputType.FILE_PER_CHART;
    this.resolvers = [...(props.resolvers ?? []), new LazyResolver(), new ImplicitTokenResolver(), new NumberStringUnionResolver()];
    this.recordConstructMetadata = props.recordConstructMetadata ?? (process.env.CDK8S_RECORD_CONSTRUCT_METADATA === 'true' ? true : false);

  }

  /**
   * Synthesizes all manifests to the output directory
   */
  public synth(): void {

    fs.mkdirSync(this.outdir, { recursive: true });

    const cache = new SynthRequestCache();

    // Since we plan on removing the distributed synth mechanism, we no longer call `Node.synthesize`, but rather simply implement
    // the necessary operations. We do however want to preserve the distributed validation.
    validate(this, cache);

    // this is kind of sucky, eventually I would like the DependencyGraph
    // to be able to answer this question.
    const hasDependantCharts = resolveDependencies(this, cache);
    const charts = this.charts;

    switch (this.yamlOutputType) {
      case YamlOutputType.FILE_PER_APP:
        let apiObjectsList: ApiObject[] = [];

        for (const chart of charts) {
          apiObjectsList.push(...Object.values(chart.toJson()));
        }

        if (charts.length > 0) {
          Yaml.save(
            path.join(this.outdir, `app${this.outputFileExtension}`), // There is no "app name", so we just hardcode the file name
            apiObjectsList);
        }
        break;

      case YamlOutputType.FILE_PER_CHART:
        const namer: ChartNamer = hasDependantCharts ? new IndexedChartNamer() : new SimpleChartNamer();
        for (const chart of charts) {
          const chartName = namer.name(chart);
          const objects = Object.values(chart.toJson());
          Yaml.save(path.join(this.outdir, chartName + this.outputFileExtension), objects);
        }
        break;

      case YamlOutputType.FILE_PER_RESOURCE:
        for (const chart of charts) {
          const apiObjects = Object.values(chart.toJson());

          apiObjects.forEach((apiObject) => {
            if (!(apiObject === undefined)) {
              const fileName = `${`${apiObject.kind}.${apiObject.metadata.name}`
                .replace(/[^0-9a-zA-Z-_.]/g, '')}`;
              Yaml.save(path.join(this.outdir, fileName + this.outputFileExtension), [apiObject]);
            }
          });
        }
        break;

      case YamlOutputType.FOLDER_PER_CHART_FILE_PER_RESOURCE:
        const folderNamer: ChartNamer = hasDependantCharts ? new IndexedChartFolderNamer() : new SimpleChartFolderNamer();
        for (const chart of charts) {
          const chartName = folderNamer.name(chart);
          const apiObjects = chartToKube(chart);
          const fullOutDir = path.join(this.outdir, chartName);
          fs.mkdirSync(fullOutDir, { recursive: true });

          apiObjects.forEach((apiObject) => {
            if (!(apiObject === undefined)) {
              const fileName = `${`${apiObject.kind}.${apiObject.metadata.name}`
                .replace(/[^0-9a-zA-Z-_.]/g, '')}`;
              Yaml.save(path.join(fullOutDir, fileName + this.outputFileExtension), [apiObject.toJson()]);
            }
          });
        }
        break;

      default:
        break;
    }

    if (this.recordConstructMetadata) {
      const allObjects = this.charts.flatMap(chartToKube);
      this.writeConstructMetadata(allObjects);
    }

  }

  /**
   * Synthesizes the app into a YAML string.
   *
   * @returns A string with all YAML objects across all charts in this app.
   */
  public synthYaml(): string {
    const cache = new SynthRequestCache();

    resolveDependencies(this, cache);

    validate(this, cache);

    const charts = this.charts;
    const docs: any[] = [];

    for (const chart of charts) {
      docs.push(...Object.values(chart.toJson()));
    }

    return Yaml.stringify(...docs);
  }

  private writeConstructMetadata(apiObjects: ApiObject[]) {
    const resources: { [key: string]: any } = {};
    for (const apiObject of apiObjects) {
      resources[apiObject.name] = { path: apiObject.node.path };
    }
    fs.writeFileSync(path.join(this.outdir, 'construct-metadata.json'), JSON.stringify({
      version: '1.0.0',
      resources: resources,
    }));
  }
}

function validate(app: App, cache: SynthRequestCache) {
  const errors = [];
  for (const child of cache.findAll(app.node)) {
    const childErrors = child.node.validate();
    for (const error of childErrors) {
      errors.push(`[${child.node.path}] ${error}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Validation failed with the following errors:\n  ${errors.join('\n  ')}`);
  }
}

function buildDependencies(app: App, cache: SynthRequestCache) {

  const deps = [];
  for (const child of cache.findAll(app.node)) {
    for (const dep of child.node.dependencies) {
      deps.push({ source: child, target: dep });
    }
  }

  return deps;

}

function resolveDependencies(app: App, cache: SynthRequestCache) {

  let hasDependantCharts = false;

  // create an explicit chart dependency from nested chart relationships
  for (const parentChart of cache.findAll(app.node).filter(x => x instanceof Chart)) {
    for (const childChart of parentChart.node.children.filter(x => x instanceof Chart)) {
      parentChart.node.addDependency(childChart);
      hasDependantCharts = true;
    }
  }

  // create an explicit chart dependency from implicit construct dependencies
  for (const dep of buildDependencies(app, cache)) {

    const sourceChart = Chart.of(dep.source);
    const targetChart = Chart.of(dep.target);

    if (sourceChart !== targetChart) {
      sourceChart.node.addDependency(targetChart);
      hasDependantCharts = true;
    }

  }

  // create explicit api object dependencies from implicit construct dependencies
  for (const dep of buildDependencies(app, cache)) {

    const sourceChart = Chart.of(dep.source);
    const targetChart = Chart.of(dep.target);

    const targetApiObjects = cache.findAll(dep.target.node).filter(c => c instanceof ApiObject).filter(x => Chart.of(x) === targetChart);
    const sourceApiObjects = cache.findAll(dep.source.node).filter(c => c instanceof ApiObject).filter(x => Chart.of(x) === sourceChart);

    for (const target of targetApiObjects) {
      for (const source of sourceApiObjects) {
        if (target !== source) {
          source.node.addDependency(target);
        }
      }
    }
  }

  return hasDependantCharts;

}

function chartToKube(chart: Chart) {
  return new DependencyGraph(chart.node).topology()
    .filter(x => x instanceof ApiObject)
    .filter(x => Chart.of(x) === chart) // include an object only in its closest parent chart
    .map(x => (x as ApiObject));
}

interface ChartNamer {
  name(chart: Chart): string;
}

class SimpleChartNamer implements ChartNamer {
  constructor() {
  }

  public name(chart: Chart) {
    return `${Names.toDnsLabel(chart)}`;
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

class SimpleChartFolderNamer implements ChartNamer {
  constructor() {
  }

  public name(chart: Chart) {
    return Names.toDnsLabel(chart);
  }
}

class IndexedChartFolderNamer extends SimpleChartFolderNamer implements ChartNamer {
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
