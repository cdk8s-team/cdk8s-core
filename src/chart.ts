import { Construct, Node, IConstruct } from 'constructs';
import { ApiObject } from './api-object';
import { App } from './app';
import { Names } from './names';

const CHART_SYMBOL = Symbol.for('cdk8s.Chart');

export interface ChartProps {
  /**
   * The default namespace for all objects defined in this chart (directly or
   * indirectly). This namespace will only apply to objects that don't have a
   * `namespace` explicitly defined for them.
   *
   * @default - no namespace is synthesized (usually this implies "default")
   */
  readonly namespace?: string;

  /**
   * Labels to apply to all resources in this chart.
   *
   * @default - no common labels
   */
  readonly labels?: { [name: string]: string };

  /**
   * When set to true, the chart will include a special `ConfigMap` resource
   * that contains construct metadata about all other resources in the chart.
   * For example, it will contain a mapping between a resource name and the path
   * of the construct that created it:
   *
   * ```yaml
   * kind: ConfigMap
   * apiVersion: v1
   * data:
   *   myresource__path: Chart/MyResource
   * ```
   *
   * Can also be turned on by setting the `CDK8S_CONSTRUCT_METADATA` environment variable to 'true'.
   *
   * @default false
   */
  readonly constructMetadata?: boolean;
}

export class Chart extends Construct {
  /**
   * Return whether the given object is a Chart.
   *
   * We do attribute detection since we can't reliably use 'instanceof'.
   */
  public static isChart(x: any): x is Chart {
    return x !== null && typeof(x) === 'object' && CHART_SYMBOL in x;
  }

  /**
   * Finds the chart in which a node is defined.
   * @param c a construct node
   */
  public static of(c: IConstruct): Chart {
    if (Chart.isChart(c)) {
      return c;
    }

    const parent = Node.of(c).scope as Construct;
    if (!parent) {
      throw new Error('cannot find a parent chart (directly or indirectly)');
    }

    return Chart.of(parent);
  }

  /**
   * The default namespace for all objects in this chart.
   */
  public readonly namespace?: string;

  /**
   * Chart-level labels.
   */
  private readonly _labels?: { [name: string]: string };

  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id);
    this.namespace = props.namespace;
    this._labels = props.labels ?? {};

    Object.defineProperty(this, CHART_SYMBOL, { value: true });

    const constructMetadata = props.constructMetadata ?? (process.env.CDK8S_CONSTRUCT_METADATA === 'true' ? true : false);

    if (constructMetadata) {
      new ApiObject(this, 'ConstructMetadata', {
        kind: 'ConfigMap',
        apiVersion: 'v1',
        metadata: {
        // this annotation is used by the cli to identify this
        // special resource.
          annotations: { 'cdk8s.io/construct-metadata': 'true' },
        },
        data: {},
      });
    }
  }

  /**
   * Labels applied to all resources in this chart.
   *
   * This is an immutable copy.
   */
  public get labels(): { [name: string]: string } {
    return { ...this._labels };
  }

  /**
   * Generates a app-unique name for an object given it's construct node path.
   *
   * Different resource types may have different constraints on names
   * (`metadata.name`). The previous version of the name generator was
   * compatible with DNS_SUBDOMAIN but not with DNS_LABEL.
   *
   * For example, `Deployment` names must comply with DNS_SUBDOMAIN while
   * `Service` names must comply with DNS_LABEL.
   *
   * Since there is no formal specification for this, the default name
   * generation scheme for kubernetes objects in cdk8s was changed to DNS_LABEL,
   * since it’s the common denominator for all kubernetes resources
   * (supposedly).
   *
   * You can override this method if you wish to customize object names at the
   * chart level.
   *
   * @param apiObject The API object to generate a name for.
   */
  public generateObjectName(apiObject: ApiObject) {
    return Names.toDnsLabel(apiObject);
  }

  /**
   * Create a dependency between this Chart and other constructs.
   * These can be other ApiObjects, Charts, or custom.
   *
   * @param dependencies the dependencies to add.
   */
  public addDependency(...dependencies: IConstruct[]) {
    Node.of(this).addDependency(...dependencies);
  }

  /**
   * Renders this chart to a set of Kubernetes JSON resources.
   * @returns array of resource manifests
   */
  public toJson(): any[] {
    return App._synthChart(this);
  }
}

