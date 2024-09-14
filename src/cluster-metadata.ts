import { sanitizeValue } from './_util';
import { ClusterApiObject } from './cluster-api-object';
import { ApiObjectMetadata, ApiObjectMetadataDefinition } from './metadata';
import { resolve } from './resolve';

/**
 * Metadata associated with this object.
 */
export interface ClusterApiObjectMetadata extends Omit<ApiObjectMetadata, 'namespace'> {}

/**
 * Options for `ApiObjectMetadataDefinition`.
 */
export interface ClusterApiObjectMetadataDefinitionOptions extends ClusterApiObjectMetadata {

  /**
   * Which ApiObject instance is the metadata attached to.
   */
  readonly clusterApiObject: ClusterApiObject;

}

/**
 * Object metadata.
 */
export class ClusterApiObjectMetadataDefinition extends ApiObjectMetadataDefinition {

  /**
   * The ApiObject this metadata is attached to.
   */
  private readonly clusterApiObject: ClusterApiObject;

  constructor(options: ClusterApiObjectMetadataDefinitionOptions) {
    super(options);
    this.name = options.name;
    this.labels = { ...options.labels } ?? { };
    this.annotations = { ...options.annotations } ?? { };
    this.finalizers = options.finalizers ? [...options.finalizers] : [];
    this.ownerReferences = options.ownerReferences ? [...options.ownerReferences] : [];
    this.clusterApiObject = options.clusterApiObject;
    this._additionalAttributes = options;

    // otherwise apiObject is passed to the resolving logic, which expectadly fails
    delete this._additionalAttributes.apiObject;

  }

  /**
   * Synthesizes a k8s ObjectMeta for this metadata set.
   */
  public toJson() {
    const sanitize = (x: any) => sanitizeValue(x, { filterEmptyArrays: true, filterEmptyObjects: true });
    return sanitize(resolve([], {
      ...this._additionalAttributes,
      name: this.name,
      annotations: this.annotations,
      finalizers: this.finalizers,
      ownerReferences: this.ownerReferences,
      labels: this.labels,
    }, this.clusterApiObject));
  }
}
