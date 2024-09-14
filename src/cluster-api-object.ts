import { Construct, IConstruct } from 'constructs';
import { sanitizeValue } from './_util';
import { Chart } from './chart';
import { JsonPatch } from './json-patch';
import { ClusterApiObjectMetadata, ClusterApiObjectMetadataDefinition } from './cluster-metadata';
import { resolve } from './resolve';
import { ApiObject, parseApiGroup } from './api-object';

/**
 * Options for defining API objects.
 */
export interface ClusterApiObjectProps {
  /**
   * Object metadata.
   *
   * If `name` is not specified, an app-unique name will be allocated by the
   * framework based on the path of the construct within thes construct tree.
   */
  readonly metadata?: ClusterApiObjectMetadata;

  /**
   * API version.
   */
  readonly apiVersion: string;

  /**
   * Resource kind.
   */
  readonly kind: string;

  /**
   * Additional attributes for this API object.
   * @jsii ignore
   * @see https://github.com/cdk8s-team/cdk8s-core/issues/1297
   */
  readonly [key: string]: any;
}

const CLUSTER_API_OBJECT_SYMBOL = Symbol.for('cdk8s.ClusterApiObject');

export class ClusterApiObject extends ApiObject {

  /**
   * Return whether the given object is an `ClusterApiObject`.
   *
   * We do attribute detection since we can't reliably use 'instanceof'.

   * @param o The object to check
   */
  static isClusterApiObject(o: any): o is ClusterApiObject {
    return o !== null && typeof o === 'object' && CLUSTER_API_OBJECT_SYMBOL in o;
  }

  /**
   * Implements `instanceof ClusterApiObject` using the more reliable `ClusterApiObject.isClusterApiObject` static method
   *
   * @param o The object to check
   * @internal
   */
  static [Symbol.hasInstance](o: unknown) {
    return ClusterApiObject.isClusterApiObject(o);
  }
  /**
   * Returns the `ApiObject` named `Resource` which is a child of the given
   * construct. If `c` is an `ApiObject`, it is returned directly. Throws an
   * exception if the construct does not have a child named `Default` _or_ if
   * this child is not an `ApiObject`.
   *
   * @param c The higher-level construct
   */
  public static of(c: IConstruct): ClusterApiObject {
    if (c instanceof ClusterApiObject) {
      return c;
    }

    const child = c.node.defaultChild;
    if (!child) {
      throw new Error(`cannot find a (direct or indirect) child of type ClusterApiObject for construct ${c.node.path}`);
    }

    return ClusterApiObject.of(child);
  }

  /**
   * Metadata associated with this API object.
   */
  public readonly metadata: ClusterApiObjectMetadataDefinition;

  /**
   * Defines an API object.
   *
   * @param scope the construct scope
   * @param id namespace
   * @param props options
   */
  constructor(scope: Construct, id: string, private readonly props: ClusterApiObjectProps) {
    super(scope, id, props);
    this.patches = new Array<JsonPatch>();
    this.chart = Chart.of(this);
    this.kind = props.kind;
    this.apiVersion = props.apiVersion;
    this.apiGroup = parseApiGroup(this.apiVersion);

    this.name = props.metadata?.name ?? this.chart.generateObjectName(this);

    this.metadata = new ClusterApiObjectMetadataDefinition({
      name: this.name,

      // user defined values
      ...props.metadata,

      labels: {
        ...this.chart.labels,
        ...props.metadata?.labels,
      },
      clusterApiObject: this,
    });

    Object.defineProperty(this, CLUSTER_API_OBJECT_SYMBOL, { value: true });
  }

  /**
   * Renders the object to Kubernetes JSON.
   *
   * To disable sorting of dictionary keys in output object set the
   * `CDK8S_DISABLE_SORT` environment variable to any non-empty value.
   */
  public toJson(): any {

    try {
      const data: any = {
        ...this.props,
        metadata: this.metadata.toJson(),
      };

      const sortKeys = process.env.CDK8S_DISABLE_SORT ? false : true;
      const json = sanitizeValue(resolve([], data, this), { sortKeys });
      const patched = JsonPatch.apply(json, ...this.patches);

      // reorder top-level keys so that we first have "apiVersion", "kind" and
      // "metadata" and then all the rest
      const result: any = {};
      const orderedKeys = ['apiVersion', 'kind', 'metadata', ...Object.keys(patched)];
      for (const k of orderedKeys) {
        if (k in patched) {
          result[k] = patched[k];
        }
      }

      return result;
    } catch (e) {
      throw new Error(`Failed serializing construct at path '${this.node.path}' with name '${this.name}': ${e}`);
    }
  }
}
