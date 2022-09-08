import { Construct, IConstruct, Node } from 'constructs';
import { resolve } from './_resolve';
import { sanitizeValue } from './_util';
import { Chart } from './chart';
import { JsonPatch } from './json-patch';
import { ApiObjectMetadata, ApiObjectMetadataDefinition } from './metadata';

/**
 * Options for defining API objects.
 */
export interface ApiObjectProps {
  /**
   * Object metadata.
   *
   * If `name` is not specified, an app-unique name will be allocated by the
   * framework based on the path of the construct within thes construct tree.
   */
  readonly metadata?: ApiObjectMetadata;

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
   */
  readonly [key: string]: any;
}

export interface GroupVersionKind {
  /**
   * The object's API version (e.g. `authorization.k8s.io/v1`)
   */
  readonly apiVersion: string;

  /**
   * The object kind.
   */
  readonly kind: string;
}

export class ApiObject extends Construct {
  /**
   * Returns the `ApiObject` named `Resource` which is a child of the given
   * construct. If `c` is an `ApiObject`, it is returned directly. Throws an
   * exception if the construct does not have a child named `Default` _or_ if
   * this child is not an `ApiObject`.
   *
   * @param c The higher-level construct
   */
  public static of(c: IConstruct): ApiObject {
    if (c instanceof ApiObject) {
      return c;
    }

    const child = Node.of(c).defaultChild;
    if (!child) {
      throw new Error(`cannot find a (direct or indirect) child of type ApiObject for construct ${Node.of(c).path}`);
    }

    return ApiObject.of(child);
  }

  /**
   * The name of the API object.
   *
   * If a name is specified in `metadata.name` this will be the name returned.
   * Otherwise, a name will be generated by calling
   * `Chart.of(this).generatedObjectName(this)`, which by default uses the
   * construct path to generate a DNS-compatible name for the resource.
   */
  public readonly name: string;

  /**
   * The object's API version (e.g. `authorization.k8s.io/v1`)
   */
  public readonly apiVersion: string;

  /**
   * The group portion of the API version (e.g. `authorization.k8s.io`)
   */
  public readonly apiGroup: string;

  /**
   * The object kind.
   */
  public readonly kind: string;

  /**
   * The chart in which this object is defined.
   */
  public readonly chart: Chart;

  /**
   * Metadata associated with this API object.
   */
  public readonly metadata: ApiObjectMetadataDefinition;

  /**
   * A set of JSON patch operations to apply to the document after synthesis.
   */
  private readonly patches: Array<JsonPatch>;

  /**
   * Defines an API object.
   *
   * @param scope the construct scope
   * @param id namespace
   * @param props options
   */
  constructor(scope: Construct, id: string, private readonly props: ApiObjectProps) {
    super(scope, id);
    this.patches = new Array<JsonPatch>();
    this.chart = Chart.of(this);
    this.kind = props.kind;
    this.apiVersion = props.apiVersion;
    this.apiGroup = parseApiGroup(this.apiVersion);

    this.name = props.metadata?.name ?? this.chart.generateObjectName(this);

    this.metadata = new ApiObjectMetadataDefinition({
      name: this.name,

      // user defined values
      ...props.metadata,

      namespace: props.metadata?.namespace ?? this.chart.namespace,
      labels: {
        ...this.chart.labels,
        ...props.metadata?.labels,
      },
    });

    const constrctMetadata = this.chart.node.tryFindChild('ConstructMetadata') as ApiObject;
    if (constrctMetadata) {
      constrctMetadata.addJsonPatch(JsonPatch.add(`/data/${this.name}.path`, this.node.path ));
    }

  }

  /**
   * Create a dependency between this ApiObject and other constructs.
   * These can be other ApiObjects, Charts, or custom.
   *
   * @param dependencies the dependencies to add.
   */
  public addDependency(...dependencies: IConstruct[]) {
    Node.of(this).addDependency(...dependencies);
  }

  /**
   * Applies a set of RFC-6902 JSON-Patch operations to the manifest
   * synthesized for this API object.
   *
   * @param ops The JSON-Patch operations to apply.
   *
   * @example
   *
   *   kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
   *
   */
  public addJsonPatch(...ops: JsonPatch[]) {
    this.patches.push(...ops);
  }

  /**
   * Renders the object to Kubernetes JSON.
   *
   * To disable sorting of dictionary keys in output object set the
   * `CDK8S_DISABLE_SORT` environment variable to any non-empty value.
   */
  public toJson(): any {
    const data: any = {
      ...this.props,
      metadata: this.metadata.toJson(),
    };

    const sortKeys = process.env.CDK8S_DISABLE_SORT ? false : true;
    const json = sanitizeValue(resolve(data), { sortKeys });
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
  }
}

function parseApiGroup(apiVersion: string) {
  const v = apiVersion.split('/');

  // no group means "core"
  // https://kubernetes.io/docs/reference/using-api/api-overview/#api-groups
  if (v.length === 1) {
    return 'core';
  }

  if (v.length === 2) {
    return v[0];
  }

  throw new Error(`invalid apiVersion ${apiVersion}, expecting GROUP/VERSION. See https://kubernetes.io/docs/reference/using-api/api-overview/#api-groups`);
}
