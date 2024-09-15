# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiObject <a name="ApiObject" id="cdk8s.ApiObject"></a>

#### Initializers <a name="Initializers" id="cdk8s.ApiObject.Initializer"></a>

```typescript
import { ApiObject } from 'cdk8s'

new ApiObject(scope: Construct, id: string, props: ApiObjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the construct scope. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.id">id</a></code> | <code>string</code> | namespace. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s.ApiObjectProps">ApiObjectProps</a></code> | options. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.ApiObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the construct scope.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.ApiObject.Initializer.parameter.id"></a>

- *Type:* string

namespace.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s.ApiObject.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s.ApiObjectProps">ApiObjectProps</a>

options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ApiObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.ApiObject.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s.ApiObject.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s.ApiObject.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s.ApiObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s.ApiObject.addDependency"></a>

```typescript
public addDependency(dependencies: ...IConstruct[]): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s.ApiObject.addDependency.parameter.dependencies"></a>

- *Type:* ...constructs.IConstruct[]

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s.ApiObject.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: ...JsonPatch[]): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s.ApiObject.addJsonPatch.parameter.ops"></a>

- *Type:* ...<a href="#cdk8s.JsonPatch">JsonPatch</a>[]

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s.ApiObject.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

To disable sorting of dictionary keys in output object set the
`CDK8S_DISABLE_SORT` environment variable to any non-empty value.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ApiObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s.ApiObject.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s.ApiObject.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.ApiObject.isConstruct"></a>

```typescript
import { ApiObject } from 'cdk8s'

ApiObject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.ApiObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s.ApiObject.isApiObject"></a>

```typescript
import { ApiObject } from 'cdk8s'

ApiObject.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s.ApiObject.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s.ApiObject.of"></a>

```typescript
import { ApiObject } from 'cdk8s'

ApiObject.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.ApiObject.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.ApiObject.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s.ApiObject.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s.ApiObject.property.chart">chart</a></code> | <code><a href="#cdk8s.Chart">Chart</a></code> | The chart in which this object is defined. |
| <code><a href="#cdk8s.ApiObject.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s.ApiObject.property.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadataDefinition">ApiObjectMetadataDefinition</a></code> | Metadata associated with this API object. |
| <code><a href="#cdk8s.ApiObject.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.ApiObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s.ApiObject.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.ApiObject.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.ApiObject.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* <a href="#cdk8s.Chart">Chart</a>

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s.ApiObject.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* <a href="#cdk8s.ApiObjectMetadataDefinition">ApiObjectMetadataDefinition</a>

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s.ApiObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---


### App <a name="App" id="cdk8s.App"></a>

Represents a cdk8s application.

#### Initializers <a name="Initializers" id="cdk8s.App.Initializer"></a>

```typescript
import { App } from 'cdk8s'

new App(props?: AppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.App.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s.AppProps">AppProps</a></code> | configuration options. |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk8s.App.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s.AppProps">AppProps</a>

configuration options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.App.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.App.synth">synth</a></code> | Synthesizes all manifests to the output directory. |
| <code><a href="#cdk8s.App.synthYaml">synthYaml</a></code> | Synthesizes the app into a YAML string. |

---

##### `toString` <a name="toString" id="cdk8s.App.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="cdk8s.App.synth"></a>

```typescript
public synth(): void
```

Synthesizes all manifests to the output directory.

##### `synthYaml` <a name="synthYaml" id="cdk8s.App.synthYaml"></a>

```typescript
public synthYaml(): string
```

Synthesizes the app into a YAML string.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s.App.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.App.isConstruct"></a>

```typescript
import { App } from 'cdk8s'

App.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.App.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `of` <a name="of" id="cdk8s.App.of"></a>

```typescript
import { App } from 'cdk8s'

App.of(c: IConstruct)
```

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.App.of.parameter.c"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.App.property.charts">charts</a></code> | <code><a href="#cdk8s.Chart">Chart</a>[]</code> | Returns all the charts in this app, sorted topologically. |
| <code><a href="#cdk8s.App.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which manifests will be synthesized. |
| <code><a href="#cdk8s.App.property.outputFileExtension">outputFileExtension</a></code> | <code>string</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.App.property.resolvers">resolvers</a></code> | <code><a href="#cdk8s.IResolver">IResolver</a>[]</code> | Resolvers used by this app. |
| <code><a href="#cdk8s.App.property.yamlOutputType">yamlOutputType</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.App.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `charts`<sup>Required</sup> <a name="charts" id="cdk8s.App.property.charts"></a>

```typescript
public readonly charts: Chart[];
```

- *Type:* <a href="#cdk8s.Chart">Chart</a>[]

Returns all the charts in this app, sorted topologically.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdk8s.App.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The output directory into which manifests will be synthesized.

---

##### `outputFileExtension`<sup>Required</sup> <a name="outputFileExtension" id="cdk8s.App.property.outputFileExtension"></a>

```typescript
public readonly outputFileExtension: string;
```

- *Type:* string
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="cdk8s.App.property.resolvers"></a>

```typescript
public readonly resolvers: IResolver[];
```

- *Type:* <a href="#cdk8s.IResolver">IResolver</a>[]

Resolvers used by this app.

This includes both custom resolvers
passed by the `resolvers` property, as well as built-in resolvers.

---

##### `yamlOutputType`<sup>Required</sup> <a name="yamlOutputType" id="cdk8s.App.property.yamlOutputType"></a>

```typescript
public readonly yamlOutputType: YamlOutputType;
```

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---


### Chart <a name="Chart" id="cdk8s.Chart"></a>

#### Initializers <a name="Initializers" id="cdk8s.Chart.Initializer"></a>

```typescript
import { Chart } from 'cdk8s'

new Chart(scope: Construct, id: string, props?: ChartProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Chart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Chart.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s.Chart.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s.ChartProps">ChartProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Chart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Chart.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk8s.Chart.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s.ChartProps">ChartProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Chart.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.Chart.addDependency">addDependency</a></code> | Create a dependency between this Chart and other constructs. |
| <code><a href="#cdk8s.Chart.generateObjectName">generateObjectName</a></code> | Generates a app-unique name for an object given it's construct node path. |
| <code><a href="#cdk8s.Chart.toJson">toJson</a></code> | Renders this chart to a set of Kubernetes JSON resources. |

---

##### `toString` <a name="toString" id="cdk8s.Chart.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s.Chart.addDependency"></a>

```typescript
public addDependency(dependencies: ...IConstruct[]): void
```

Create a dependency between this Chart and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s.Chart.addDependency.parameter.dependencies"></a>

- *Type:* ...constructs.IConstruct[]

the dependencies to add.

---

##### `generateObjectName` <a name="generateObjectName" id="cdk8s.Chart.generateObjectName"></a>

```typescript
public generateObjectName(apiObject: ApiObject): string
```

Generates a app-unique name for an object given it's construct node path.

Different resource types may have different constraints on names
(`metadata.name`). The previous version of the name generator was
compatible with DNS_SUBDOMAIN but not with DNS_LABEL.

For example, `Deployment` names must comply with DNS_SUBDOMAIN while
`Service` names must comply with DNS_LABEL.

Since there is no formal specification for this, the default name
generation scheme for kubernetes objects in cdk8s was changed to DNS_LABEL,
since it’s the common denominator for all kubernetes resources
(supposedly).

You can override this method if you wish to customize object names at the
chart level.

###### `apiObject`<sup>Required</sup> <a name="apiObject" id="cdk8s.Chart.generateObjectName.parameter.apiObject"></a>

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

The API object to generate a name for.

---

##### `toJson` <a name="toJson" id="cdk8s.Chart.toJson"></a>

```typescript
public toJson(): any[]
```

Renders this chart to a set of Kubernetes JSON resources.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Chart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s.Chart.isChart">isChart</a></code> | Return whether the given object is a Chart. |
| <code><a href="#cdk8s.Chart.of">of</a></code> | Finds the chart in which a node is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.Chart.isConstruct"></a>

```typescript
import { Chart } from 'cdk8s'

Chart.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Chart.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isChart` <a name="isChart" id="cdk8s.Chart.isChart"></a>

```typescript
import { Chart } from 'cdk8s'

Chart.isChart(x: any)
```

Return whether the given object is a Chart.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Chart.isChart.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk8s.Chart.of"></a>

```typescript
import { Chart } from 'cdk8s'

Chart.of(c: IConstruct)
```

Finds the chart in which a node is defined.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.Chart.of.parameter.c"></a>

- *Type:* constructs.IConstruct

a construct node.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Chart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Chart.property.apiObjects">apiObjects</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a>[]</code> | Returns all the included API objects. |
| <code><a href="#cdk8s.Chart.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels applied to all resources in this chart. |
| <code><a href="#cdk8s.Chart.property.namespace">namespace</a></code> | <code>string</code> | The default namespace for all objects in this chart. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Chart.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s.Chart.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>[]

Returns all the included API objects.

---

##### `labels`<sup>Required</sup> <a name="labels" id="cdk8s.Chart.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels applied to all resources in this chart.

This is an immutable copy.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.Chart.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The default namespace for all objects in this chart.

---


### Helm <a name="Helm" id="cdk8s.Helm"></a>

Represents a Helm deployment.

Use this construct to import an existing Helm chart and incorporate it into your constructs.

#### Initializers <a name="Initializers" id="cdk8s.Helm.Initializer"></a>

```typescript
import { Helm } from 'cdk8s'

new Helm(scope: Construct, id: string, props: HelmProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Helm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Helm.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s.Helm.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s.HelmProps">HelmProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Helm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Helm.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s.Helm.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s.HelmProps">HelmProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Helm.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s.Helm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Helm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.Helm.isConstruct"></a>

```typescript
import { Helm } from 'cdk8s'

Helm.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Helm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Helm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Helm.property.apiObjects">apiObjects</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a>[]</code> | Returns all the included API objects. |
| <code><a href="#cdk8s.Helm.property.releaseName">releaseName</a></code> | <code>string</code> | The helm release name. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Helm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s.Helm.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>[]

Returns all the included API objects.

---

##### `releaseName`<sup>Required</sup> <a name="releaseName" id="cdk8s.Helm.property.releaseName"></a>

```typescript
public readonly releaseName: string;
```

- *Type:* string

The helm release name.

---


### Include <a name="Include" id="cdk8s.Include"></a>

Reads a YAML manifest from a file or a URL and defines all resources as API objects within the defined scope.

The names (`metadata.name`) of imported resources will be preserved as-is
from the manifest.

#### Initializers <a name="Initializers" id="cdk8s.Include.Initializer"></a>

```typescript
import { Include } from 'cdk8s'

new Include(scope: Construct, id: string, props: IncludeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Include.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Include.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s.Include.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s.IncludeProps">IncludeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Include.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Include.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s.Include.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s.IncludeProps">IncludeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Include.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s.Include.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Include.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.Include.isConstruct"></a>

```typescript
import { Include } from 'cdk8s'

Include.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Include.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Include.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Include.property.apiObjects">apiObjects</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a>[]</code> | Returns all the included API objects. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Include.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s.Include.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>[]

Returns all the included API objects.

---


## Structs <a name="Structs" id="Structs"></a>

### ApiObjectMetadata <a name="ApiObjectMetadata" id="cdk8s.ApiObjectMetadata"></a>

Metadata associated with this object.

#### Initializer <a name="Initializer" id="cdk8s.ApiObjectMetadata.Initializer"></a>

```typescript
import { ApiObjectMetadata } from 'cdk8s'

const apiObjectMetadata: ApiObjectMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.finalizers">finalizers</a></code> | <code>string[]</code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.name">name</a></code> | <code>string</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.ownerReferences">ownerReferences</a></code> | <code><a href="#cdk8s.OwnerReference">OwnerReference</a>[]</code> | List of objects depended by this object. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadata.property.finalizers"></a>

```typescript
public readonly finalizers: string[];
```

- *Type:* string[]
- *Default:* No finalizers.

Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion.

Must be empty before the object is deleted from the registry. Each entry is
an identifier for the responsible component that will remove the entry from
the list. If the deletionTimestamp of the object is non-nil, entries in
this list can only be removed. Finalizers may be processed and removed in
any order.  Order is NOT enforced because it introduces significant risk of
stuck finalizers. finalizers is a shared field, any actor with permission
can reorder it. If the finalizer list is processed in order, then this can
lead to a situation in which the component responsible for the first
finalizer in the list is waiting for a signal (field value, external
system, or other) produced by a component responsible for a finalizer later
in the list, resulting in a deadlock. Without enforced ordering finalizers
are free to order amongst themselves and are not vulnerable to ordering
changes in the list.

> [https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/](https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/)

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.ApiObjectMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* an app-unique name generated by the chart

The unique, namespace-global, name of this object inside the Kubernetes cluster.

Normally, you shouldn't specify names for objects and let the CDK generate
a name for you that is application-unique. The names CDK generates are
composed from the construct path components, separated by dots and a suffix
that is based on a hash of the entire path, to ensure uniqueness.

You can supply custom name allocation logic by overriding the
`chart.generateObjectName` method.

If you use an explicit name here, bear in mind that this reduces the
composability of your construct because it won't be possible to include
more than one instance in any app. Therefore it is highly recommended to
leave this unspecified.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ApiObjectMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `ownerReferences`<sup>Optional</sup> <a name="ownerReferences" id="cdk8s.ApiObjectMetadata.property.ownerReferences"></a>

```typescript
public readonly ownerReferences: OwnerReference[];
```

- *Type:* <a href="#cdk8s.OwnerReference">OwnerReference</a>[]
- *Default:* automatically set by Kubernetes

List of objects depended by this object.

If ALL objects in the list have
been deleted, this object will be garbage collected. If this object is
managed by a controller, then an entry in this list will point to this
controller, with the controller field set to true. There cannot be more
than one managing controller.

Kubernetes sets the value of this field automatically for objects that are
dependents of other objects like ReplicaSets, DaemonSets, Deployments, Jobs
and CronJobs, and ReplicationControllers. You can also configure these
relationships manually by changing the value of this field. However, you
usually don't need to and can allow Kubernetes to automatically manage the
relationships.

> [https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/](https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/)

---

### ApiObjectMetadataDefinitionOptions <a name="ApiObjectMetadataDefinitionOptions" id="cdk8s.ApiObjectMetadataDefinitionOptions"></a>

Options for `ApiObjectMetadataDefinition`.

#### Initializer <a name="Initializer" id="cdk8s.ApiObjectMetadataDefinitionOptions.Initializer"></a>

```typescript
import { ApiObjectMetadataDefinitionOptions } from 'cdk8s'

const apiObjectMetadataDefinitionOptions: ApiObjectMetadataDefinitionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.finalizers">finalizers</a></code> | <code>string[]</code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.name">name</a></code> | <code>string</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.ownerReferences">ownerReferences</a></code> | <code><a href="#cdk8s.OwnerReference">OwnerReference</a>[]</code> | List of objects depended by this object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.apiObject">apiObject</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject instance is the metadata attached to. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.finalizers"></a>

```typescript
public readonly finalizers: string[];
```

- *Type:* string[]
- *Default:* No finalizers.

Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion.

Must be empty before the object is deleted from the registry. Each entry is
an identifier for the responsible component that will remove the entry from
the list. If the deletionTimestamp of the object is non-nil, entries in
this list can only be removed. Finalizers may be processed and removed in
any order.  Order is NOT enforced because it introduces significant risk of
stuck finalizers. finalizers is a shared field, any actor with permission
can reorder it. If the finalizer list is processed in order, then this can
lead to a situation in which the component responsible for the first
finalizer in the list is waiting for a signal (field value, external
system, or other) produced by a component responsible for a finalizer later
in the list, resulting in a deadlock. Without enforced ordering finalizers
are free to order amongst themselves and are not vulnerable to ordering
changes in the list.

> [https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/](https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/)

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* an app-unique name generated by the chart

The unique, namespace-global, name of this object inside the Kubernetes cluster.

Normally, you shouldn't specify names for objects and let the CDK generate
a name for you that is application-unique. The names CDK generates are
composed from the construct path components, separated by dots and a suffix
that is based on a hash of the entire path, to ensure uniqueness.

You can supply custom name allocation logic by overriding the
`chart.generateObjectName` method.

If you use an explicit name here, bear in mind that this reduces the
composability of your construct because it won't be possible to include
more than one instance in any app. Therefore it is highly recommended to
leave this unspecified.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `ownerReferences`<sup>Optional</sup> <a name="ownerReferences" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.ownerReferences"></a>

```typescript
public readonly ownerReferences: OwnerReference[];
```

- *Type:* <a href="#cdk8s.OwnerReference">OwnerReference</a>[]
- *Default:* automatically set by Kubernetes

List of objects depended by this object.

If ALL objects in the list have
been deleted, this object will be garbage collected. If this object is
managed by a controller, then an entry in this list will point to this
controller, with the controller field set to true. There cannot be more
than one managing controller.

Kubernetes sets the value of this field automatically for objects that are
dependents of other objects like ReplicaSets, DaemonSets, Deployments, Jobs
and CronJobs, and ReplicationControllers. You can also configure these
relationships manually by changing the value of this field. However, you
usually don't need to and can allow Kubernetes to automatically manage the
relationships.

> [https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/](https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/)

---

##### `apiObject`<sup>Required</sup> <a name="apiObject" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.apiObject"></a>

```typescript
public readonly apiObject: ApiObject;
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject instance is the metadata attached to.

---

### ApiObjectProps <a name="ApiObjectProps" id="cdk8s.ApiObjectProps"></a>

Options for defining API objects.

#### Initializer <a name="Initializer" id="cdk8s.ApiObjectProps.Initializer"></a>

```typescript
import { ApiObjectProps } from 'cdk8s'

const apiObjectProps: ApiObjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectProps.property.apiVersion">apiVersion</a></code> | <code>string</code> | API version. |
| <code><a href="#cdk8s.ApiObjectProps.property.kind">kind</a></code> | <code>string</code> | Resource kind. |
| <code><a href="#cdk8s.ApiObjectProps.property.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a></code> | Object metadata. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.ApiObjectProps.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

API version.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObjectProps.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Resource kind.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s.ApiObjectProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* <a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a>

Object metadata.

If `name` is not specified, an app-unique name will be allocated by the
framework based on the path of the construct within thes construct tree.

---

### AppProps <a name="AppProps" id="cdk8s.AppProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.AppProps.Initializer"></a>

```typescript
import { AppProps } from 'cdk8s'

const appProps: AppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.AppProps.property.outdir">outdir</a></code> | <code>string</code> | The directory to output Kubernetes manifests. |
| <code><a href="#cdk8s.AppProps.property.outputFileExtension">outputFileExtension</a></code> | <code>string</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.AppProps.property.recordConstructMetadata">recordConstructMetadata</a></code> | <code>boolean</code> | When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app. |
| <code><a href="#cdk8s.AppProps.property.resolvers">resolvers</a></code> | <code><a href="#cdk8s.IResolver">IResolver</a>[]</code> | A list of resolvers that can be used to replace property values before they are written to the manifest file. |
| <code><a href="#cdk8s.AppProps.property.yamlOutputType">yamlOutputType</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk8s.AppProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* CDK8S_OUTDIR if defined, otherwise "dist"

The directory to output Kubernetes manifests.

If you synthesize your application using `cdk8s synth`, you must
also pass this value to the CLI using the `--output` option or
the `output` property in the `cdk8s.yaml` configuration file.
Otherwise, the CLI will not know about the output directory,
and synthesis will fail.

This property is intended for internal and testing use.

---

##### `outputFileExtension`<sup>Optional</sup> <a name="outputFileExtension" id="cdk8s.AppProps.property.outputFileExtension"></a>

```typescript
public readonly outputFileExtension: string;
```

- *Type:* string
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `recordConstructMetadata`<sup>Optional</sup> <a name="recordConstructMetadata" id="cdk8s.AppProps.property.recordConstructMetadata"></a>

```typescript
public readonly recordConstructMetadata: boolean;
```

- *Type:* boolean
- *Default:* false

When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app.

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="cdk8s.AppProps.property.resolvers"></a>

```typescript
public readonly resolvers: IResolver[];
```

- *Type:* <a href="#cdk8s.IResolver">IResolver</a>[]
- *Default:* no resolvers.

A list of resolvers that can be used to replace property values before they are written to the manifest file.

When multiple resolvers are passed,
they are invoked by order in the list, and only the first one that applies
(e.g calls `context.replaceValue`) is invoked.

> [https://cdk8s.io/docs/latest/basics/app/#resolvers](https://cdk8s.io/docs/latest/basics/app/#resolvers)

---

##### `yamlOutputType`<sup>Optional</sup> <a name="yamlOutputType" id="cdk8s.AppProps.property.yamlOutputType"></a>

```typescript
public readonly yamlOutputType: YamlOutputType;
```

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---

### ChartProps <a name="ChartProps" id="cdk8s.ChartProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.ChartProps.Initializer"></a>

```typescript
import { ChartProps } from 'cdk8s'

const chartProps: ChartProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ChartProps.property.disableResourceNameHashes">disableResourceNameHashes</a></code> | <code>boolean</code> | The autogenerated resource name by default is suffixed with a stable hash of the construct path. |
| <code><a href="#cdk8s.ChartProps.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to all resources in this chart. |
| <code><a href="#cdk8s.ChartProps.property.namespace">namespace</a></code> | <code>string</code> | The default namespace for all objects defined in this chart (directly or indirectly). |

---

##### `disableResourceNameHashes`<sup>Optional</sup> <a name="disableResourceNameHashes" id="cdk8s.ChartProps.property.disableResourceNameHashes"></a>

```typescript
public readonly disableResourceNameHashes: boolean;
```

- *Type:* boolean
- *Default:* false

The autogenerated resource name by default is suffixed with a stable hash of the construct path.

Setting this property to true drops the hash suffix.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.ChartProps.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no common labels

Labels to apply to all resources in this chart.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ChartProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* no namespace is synthesized (usually this implies "default")

The default namespace for all objects defined in this chart (directly or indirectly).

This namespace will only apply to objects that don't have a
`namespace` explicitly defined for them.

---

### CronOptions <a name="CronOptions" id="cdk8s.CronOptions"></a>

Options to configure a cron expression.

All fields are strings so you can use complex expressions. Absence of
a field implies '*'

#### Initializer <a name="Initializer" id="cdk8s.CronOptions.Initializer"></a>

```typescript
import { CronOptions } from 'cdk8s'

const cronOptions: CronOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.CronOptions.property.day">day</a></code> | <code>string</code> | The day of the month to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.hour">hour</a></code> | <code>string</code> | The hour to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.minute">minute</a></code> | <code>string</code> | The minute to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.month">month</a></code> | <code>string</code> | The month to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.weekDay">weekDay</a></code> | <code>string</code> | The day of the week to run this rule at. |

---

##### `day`<sup>Optional</sup> <a name="day" id="cdk8s.CronOptions.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string
- *Default:* Every day of the month

The day of the month to run this rule at.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="cdk8s.CronOptions.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string
- *Default:* Every hour

The hour to run this rule at.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="cdk8s.CronOptions.property.minute"></a>

```typescript
public readonly minute: string;
```

- *Type:* string
- *Default:* Every minute

The minute to run this rule at.

---

##### `month`<sup>Optional</sup> <a name="month" id="cdk8s.CronOptions.property.month"></a>

```typescript
public readonly month: string;
```

- *Type:* string
- *Default:* Every month

The month to run this rule at.

---

##### `weekDay`<sup>Optional</sup> <a name="weekDay" id="cdk8s.CronOptions.property.weekDay"></a>

```typescript
public readonly weekDay: string;
```

- *Type:* string
- *Default:* Any day of the week

The day of the week to run this rule at.

---

### GroupVersionKind <a name="GroupVersionKind" id="cdk8s.GroupVersionKind"></a>

#### Initializer <a name="Initializer" id="cdk8s.GroupVersionKind.Initializer"></a>

```typescript
import { GroupVersionKind } from 'cdk8s'

const groupVersionKind: GroupVersionKind = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.GroupVersionKind.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s.GroupVersionKind.property.kind">kind</a></code> | <code>string</code> | The object kind. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.GroupVersionKind.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.GroupVersionKind.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

### HelmProps <a name="HelmProps" id="cdk8s.HelmProps"></a>

Options for `Helm`.

#### Initializer <a name="Initializer" id="cdk8s.HelmProps.Initializer"></a>

```typescript
import { HelmProps } from 'cdk8s'

const helmProps: HelmProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.HelmProps.property.chart">chart</a></code> | <code>string</code> | The chart name to use. It can be a chart from a helm repository or a local directory. |
| <code><a href="#cdk8s.HelmProps.property.helmExecutable">helmExecutable</a></code> | <code>string</code> | The local helm executable to use in order to create the manifest the chart. |
| <code><a href="#cdk8s.HelmProps.property.helmFlags">helmFlags</a></code> | <code>string[]</code> | Additional flags to add to the `helm` execution. |
| <code><a href="#cdk8s.HelmProps.property.namespace">namespace</a></code> | <code>string</code> | Scope all resources in to a given namespace. |
| <code><a href="#cdk8s.HelmProps.property.releaseName">releaseName</a></code> | <code>string</code> | The release name. |
| <code><a href="#cdk8s.HelmProps.property.repo">repo</a></code> | <code>string</code> | Chart repository url where to locate the requested chart. |
| <code><a href="#cdk8s.HelmProps.property.values">values</a></code> | <code>{[ key: string ]: any}</code> | Values to pass to the chart. |
| <code><a href="#cdk8s.HelmProps.property.version">version</a></code> | <code>string</code> | Version constraint for the chart version to use. |

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.HelmProps.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

The chart name to use. It can be a chart from a helm repository or a local directory.

This name is passed to `helm template` and has all the relevant semantics.

---

*Example*

```typescript
"bitnami/redis"
```


##### `helmExecutable`<sup>Optional</sup> <a name="helmExecutable" id="cdk8s.HelmProps.property.helmExecutable"></a>

```typescript
public readonly helmExecutable: string;
```

- *Type:* string
- *Default:* "helm"

The local helm executable to use in order to create the manifest the chart.

---

##### `helmFlags`<sup>Optional</sup> <a name="helmFlags" id="cdk8s.HelmProps.property.helmFlags"></a>

```typescript
public readonly helmFlags: string[];
```

- *Type:* string[]
- *Default:* []

Additional flags to add to the `helm` execution.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.HelmProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Scope all resources in to a given namespace.

---

##### `releaseName`<sup>Optional</sup> <a name="releaseName" id="cdk8s.HelmProps.property.releaseName"></a>

```typescript
public readonly releaseName: string;
```

- *Type:* string
- *Default:* if unspecified, a name will be allocated based on the construct path

The release name.

> [https://helm.sh/docs/intro/using_helm/#three-big-concepts](https://helm.sh/docs/intro/using_helm/#three-big-concepts)

---

##### `repo`<sup>Optional</sup> <a name="repo" id="cdk8s.HelmProps.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Chart repository url where to locate the requested chart.

---

##### `values`<sup>Optional</sup> <a name="values" id="cdk8s.HelmProps.property.values"></a>

```typescript
public readonly values: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* If no values are specified, chart will use the defaults.

Values to pass to the chart.

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk8s.HelmProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version constraint for the chart version to use.

This constraint can be a specific tag (e.g. 1.1.1)
or it may reference a valid range (e.g. ^2.0.0).
If this is not specified, the latest version is used

This name is passed to `helm template --version` and has all the relevant semantics.

---

*Example*

```typescript
"^2.0.0"
```


### IncludeProps <a name="IncludeProps" id="cdk8s.IncludeProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.IncludeProps.Initializer"></a>

```typescript
import { IncludeProps } from 'cdk8s'

const includeProps: IncludeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.IncludeProps.property.url">url</a></code> | <code>string</code> | Local file path or URL which includes a Kubernetes YAML manifest. |

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s.IncludeProps.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Local file path or URL which includes a Kubernetes YAML manifest.

---

*Example*

```typescript
mymanifest.yaml
```


### NameOptions <a name="NameOptions" id="cdk8s.NameOptions"></a>

Options for name generation.

#### Initializer <a name="Initializer" id="cdk8s.NameOptions.Initializer"></a>

```typescript
import { NameOptions } from 'cdk8s'

const nameOptions: NameOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.NameOptions.property.delimiter">delimiter</a></code> | <code>string</code> | Delimiter to use between components. |
| <code><a href="#cdk8s.NameOptions.property.extra">extra</a></code> | <code>string[]</code> | Extra components to include in the name. |
| <code><a href="#cdk8s.NameOptions.property.includeHash">includeHash</a></code> | <code>boolean</code> | Include a short hash as last part of the name. |
| <code><a href="#cdk8s.NameOptions.property.maxLen">maxLen</a></code> | <code>number</code> | Maximum allowed length for the name. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="cdk8s.NameOptions.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string
- *Default:* "-"

Delimiter to use between components.

---

##### `extra`<sup>Optional</sup> <a name="extra" id="cdk8s.NameOptions.property.extra"></a>

```typescript
public readonly extra: string[];
```

- *Type:* string[]
- *Default:* [] use the construct path components

Extra components to include in the name.

---

##### `includeHash`<sup>Optional</sup> <a name="includeHash" id="cdk8s.NameOptions.property.includeHash"></a>

```typescript
public readonly includeHash: boolean;
```

- *Type:* boolean
- *Default:* true

Include a short hash as last part of the name.

---

##### `maxLen`<sup>Optional</sup> <a name="maxLen" id="cdk8s.NameOptions.property.maxLen"></a>

```typescript
public readonly maxLen: number;
```

- *Type:* number
- *Default:* 63

Maximum allowed length for the name.

---

### OwnerReference <a name="OwnerReference" id="cdk8s.OwnerReference"></a>

OwnerReference contains enough information to let you identify an owning object.

An owning object must be in the same namespace as the dependent, or
be cluster-scoped, so there is no namespace field.

#### Initializer <a name="Initializer" id="cdk8s.OwnerReference.Initializer"></a>

```typescript
import { OwnerReference } from 'cdk8s'

const ownerReference: OwnerReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.OwnerReference.property.apiVersion">apiVersion</a></code> | <code>string</code> | API version of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.kind">kind</a></code> | <code>string</code> | Kind of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.name">name</a></code> | <code>string</code> | Name of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.uid">uid</a></code> | <code>string</code> | UID of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.blockOwnerDeletion">blockOwnerDeletion</a></code> | <code>boolean</code> | If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. |
| <code><a href="#cdk8s.OwnerReference.property.controller">controller</a></code> | <code>boolean</code> | If true, this reference points to the managing controller. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.OwnerReference.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

API version of the referent.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.OwnerReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Kind of the referent.

> [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds)

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s.OwnerReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#names](http://kubernetes.io/docs/user-guide/identifiers#names)

---

##### `uid`<sup>Required</sup> <a name="uid" id="cdk8s.OwnerReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

UID of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#uids](http://kubernetes.io/docs/user-guide/identifiers#uids)

---

##### `blockOwnerDeletion`<sup>Optional</sup> <a name="blockOwnerDeletion" id="cdk8s.OwnerReference.property.blockOwnerDeletion"></a>

```typescript
public readonly blockOwnerDeletion: boolean;
```

- *Type:* boolean
- *Default:* false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.

If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed.

Defaults to false. To set this field, a user needs "delete"
permission of the owner, otherwise 422 (Unprocessable Entity) will be
returned.

---

##### `controller`<sup>Optional</sup> <a name="controller" id="cdk8s.OwnerReference.property.controller"></a>

```typescript
public readonly controller: boolean;
```

- *Type:* boolean

If true, this reference points to the managing controller.

---

### SizeConversionOptions <a name="SizeConversionOptions" id="cdk8s.SizeConversionOptions"></a>

Options for how to convert size to a different unit.

#### Initializer <a name="Initializer" id="cdk8s.SizeConversionOptions.Initializer"></a>

```typescript
import { SizeConversionOptions } from 'cdk8s'

const sizeConversionOptions: SizeConversionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.SizeConversionOptions.property.rounding">rounding</a></code> | <code><a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a></code> | How conversions should behave when it encounters a non-integer result. |

---

##### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.SizeConversionOptions.property.rounding"></a>

```typescript
public readonly rounding: SizeRoundingBehavior;
```

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

---

### TimeConversionOptions <a name="TimeConversionOptions" id="cdk8s.TimeConversionOptions"></a>

Options for how to convert time to a different unit.

#### Initializer <a name="Initializer" id="cdk8s.TimeConversionOptions.Initializer"></a>

```typescript
import { TimeConversionOptions } from 'cdk8s'

const timeConversionOptions: TimeConversionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.TimeConversionOptions.property.integral">integral</a></code> | <code>boolean</code> | If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer. |

---

##### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.TimeConversionOptions.property.integral"></a>

```typescript
public readonly integral: boolean;
```

- *Type:* boolean
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiObjectMetadataDefinition <a name="ApiObjectMetadataDefinition" id="cdk8s.ApiObjectMetadataDefinition"></a>

Object metadata.

#### Initializers <a name="Initializers" id="cdk8s.ApiObjectMetadataDefinition.Initializer"></a>

```typescript
import { ApiObjectMetadataDefinition } from 'cdk8s'

new ApiObjectMetadataDefinition(options: ApiObjectMetadataDefinitionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.options">options</a></code> | <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions">ApiObjectMetadataDefinitionOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk8s.ApiObjectMetadataDefinitionOptions">ApiObjectMetadataDefinitionOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.add">add</a></code> | Adds an arbitrary key/value to the object metadata. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addAnnotation">addAnnotation</a></code> | Add an annotation. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addFinalizers">addFinalizers</a></code> | Add one or more finalizers. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addLabel">addLabel</a></code> | Add a label. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addOwnerReference">addOwnerReference</a></code> | Add an owner. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.getLabel">getLabel</a></code> | *No description.* |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.toJson">toJson</a></code> | Synthesizes a k8s ObjectMeta for this metadata set. |

---

##### `add` <a name="add" id="cdk8s.ApiObjectMetadataDefinition.add"></a>

```typescript
public add(key: string, value: any): void
```

Adds an arbitrary key/value to the object metadata.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.add.parameter.key"></a>

- *Type:* string

Metadata key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.add.parameter.value"></a>

- *Type:* any

Metadata value.

---

##### `addAnnotation` <a name="addAnnotation" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation"></a>

```typescript
public addAnnotation(key: string, value: string): void
```

Add an annotation.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation.parameter.key"></a>

- *Type:* string

The key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation.parameter.value"></a>

- *Type:* string

The value.

---

##### `addFinalizers` <a name="addFinalizers" id="cdk8s.ApiObjectMetadataDefinition.addFinalizers"></a>

```typescript
public addFinalizers(finalizers: ...string[]): void
```

Add one or more finalizers.

###### `finalizers`<sup>Required</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinition.addFinalizers.parameter.finalizers"></a>

- *Type:* ...string[]

the finalizers.

---

##### `addLabel` <a name="addLabel" id="cdk8s.ApiObjectMetadataDefinition.addLabel"></a>

```typescript
public addLabel(key: string, value: string): void
```

Add a label.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.addLabel.parameter.key"></a>

- *Type:* string

The key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.addLabel.parameter.value"></a>

- *Type:* string

The value.

---

##### `addOwnerReference` <a name="addOwnerReference" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference"></a>

```typescript
public addOwnerReference(owner: OwnerReference): void
```

Add an owner.

###### `owner`<sup>Required</sup> <a name="owner" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.owner"></a>

- *Type:* <a href="#cdk8s.OwnerReference">OwnerReference</a>

the owner.

---

##### `getLabel` <a name="getLabel" id="cdk8s.ApiObjectMetadataDefinition.getLabel"></a>

```typescript
public getLabel(key: string): string
```

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.getLabel.parameter.key"></a>

- *Type:* string

the label.

---

##### `toJson` <a name="toJson" id="cdk8s.ApiObjectMetadataDefinition.toJson"></a>

```typescript
public toJson(): any
```

Synthesizes a k8s ObjectMeta for this metadata set.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.property.name">name</a></code> | <code>string</code> | The name of the API object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.property.namespace">namespace</a></code> | <code>string</code> | The object's namespace. |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ApiObjectMetadataDefinition.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The object's namespace.

---


### Cron <a name="Cron" id="cdk8s.Cron"></a>

Represents a cron schedule.

#### Initializers <a name="Initializers" id="cdk8s.Cron.Initializer"></a>

```typescript
import { Cron } from 'cdk8s'

new Cron(cronOptions?: CronOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Cron.Initializer.parameter.cronOptions">cronOptions</a></code> | <code><a href="#cdk8s.CronOptions">CronOptions</a></code> | *No description.* |

---

##### `cronOptions`<sup>Optional</sup> <a name="cronOptions" id="cdk8s.Cron.Initializer.parameter.cronOptions"></a>

- *Type:* <a href="#cdk8s.CronOptions">CronOptions</a>

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Cron.annually">annually</a></code> | Create a cron schedule which runs first day of January every year. |
| <code><a href="#cdk8s.Cron.daily">daily</a></code> | Create a cron schedule which runs every day at midnight. |
| <code><a href="#cdk8s.Cron.everyMinute">everyMinute</a></code> | Create a cron schedule which runs every minute. |
| <code><a href="#cdk8s.Cron.hourly">hourly</a></code> | Create a cron schedule which runs every hour. |
| <code><a href="#cdk8s.Cron.monthly">monthly</a></code> | Create a cron schedule which runs first day of every month. |
| <code><a href="#cdk8s.Cron.schedule">schedule</a></code> | Create a custom cron schedule from a set of cron fields. |
| <code><a href="#cdk8s.Cron.weekly">weekly</a></code> | Create a cron schedule which runs every week on Sunday. |

---

##### `annually` <a name="annually" id="cdk8s.Cron.annually"></a>

```typescript
import { Cron } from 'cdk8s'

Cron.annually()
```

Create a cron schedule which runs first day of January every year.

##### `daily` <a name="daily" id="cdk8s.Cron.daily"></a>

```typescript
import { Cron } from 'cdk8s'

Cron.daily()
```

Create a cron schedule which runs every day at midnight.

##### `everyMinute` <a name="everyMinute" id="cdk8s.Cron.everyMinute"></a>

```typescript
import { Cron } from 'cdk8s'

Cron.everyMinute()
```

Create a cron schedule which runs every minute.

##### `hourly` <a name="hourly" id="cdk8s.Cron.hourly"></a>

```typescript
import { Cron } from 'cdk8s'

Cron.hourly()
```

Create a cron schedule which runs every hour.

##### `monthly` <a name="monthly" id="cdk8s.Cron.monthly"></a>

```typescript
import { Cron } from 'cdk8s'

Cron.monthly()
```

Create a cron schedule which runs first day of every month.

##### `schedule` <a name="schedule" id="cdk8s.Cron.schedule"></a>

```typescript
import { Cron } from 'cdk8s'

Cron.schedule(options: CronOptions)
```

Create a custom cron schedule from a set of cron fields.

###### `options`<sup>Required</sup> <a name="options" id="cdk8s.Cron.schedule.parameter.options"></a>

- *Type:* <a href="#cdk8s.CronOptions">CronOptions</a>

---

##### `weekly` <a name="weekly" id="cdk8s.Cron.weekly"></a>

```typescript
import { Cron } from 'cdk8s'

Cron.weekly()
```

Create a cron schedule which runs every week on Sunday.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Cron.property.expressionString">expressionString</a></code> | <code>string</code> | Retrieve the expression for this schedule. |

---

##### `expressionString`<sup>Required</sup> <a name="expressionString" id="cdk8s.Cron.property.expressionString"></a>

```typescript
public readonly expressionString: string;
```

- *Type:* string

Retrieve the expression for this schedule.

---


### DependencyGraph <a name="DependencyGraph" id="cdk8s.DependencyGraph"></a>

Represents the dependency graph for a given Node.

This graph includes the dependency relationships between all nodes in the
node (construct) sub-tree who's root is this Node.

Note that this means that lonely nodes (no dependencies and no dependants) are also included in this graph as
childless children of the root node of the graph.

The graph does not include cross-scope dependencies. That is, if a child on the current scope depends on a node
from a different scope, that relationship is not represented in this graph.

#### Initializers <a name="Initializers" id="cdk8s.DependencyGraph.Initializer"></a>

```typescript
import { DependencyGraph } from 'cdk8s'

new DependencyGraph(node: Node)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyGraph.Initializer.parameter.node">node</a></code> | <code>constructs.Node</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.DependencyGraph.Initializer.parameter.node"></a>

- *Type:* constructs.Node

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.DependencyGraph.topology">topology</a></code> | *No description.* |

---

##### `topology` <a name="topology" id="cdk8s.DependencyGraph.topology"></a>

```typescript
public topology(): IConstruct[]
```

> [Vertex.topology ()](Vertex.topology ())


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyGraph.property.root">root</a></code> | <code><a href="#cdk8s.DependencyVertex">DependencyVertex</a></code> | Returns the root of the graph. |

---

##### `root`<sup>Required</sup> <a name="root" id="cdk8s.DependencyGraph.property.root"></a>

```typescript
public readonly root: DependencyVertex;
```

- *Type:* <a href="#cdk8s.DependencyVertex">DependencyVertex</a>

Returns the root of the graph.

Note that this vertex will always have `null` as its `.value` since it is an artifical root
that binds all the connected spaces of the graph.

---


### DependencyVertex <a name="DependencyVertex" id="cdk8s.DependencyVertex"></a>

Represents a vertex in the graph.

The value of each vertex is an `IConstruct` that is accessible via the `.value` getter.

#### Initializers <a name="Initializers" id="cdk8s.DependencyVertex.Initializer"></a>

```typescript
import { DependencyVertex } from 'cdk8s'

new DependencyVertex(value?: IConstruct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyVertex.Initializer.parameter.value">value</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `value`<sup>Optional</sup> <a name="value" id="cdk8s.DependencyVertex.Initializer.parameter.value"></a>

- *Type:* constructs.IConstruct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.DependencyVertex.addChild">addChild</a></code> | Adds a vertex as a dependency of the current node. |
| <code><a href="#cdk8s.DependencyVertex.topology">topology</a></code> | Returns a topologically sorted array of the constructs in the sub-graph. |

---

##### `addChild` <a name="addChild" id="cdk8s.DependencyVertex.addChild"></a>

```typescript
public addChild(dep: DependencyVertex): void
```

Adds a vertex as a dependency of the current node.

Also updates the parents of `dep`, so that it contains this node as a parent.

This operation will fail in case it creates a cycle in the graph.

###### `dep`<sup>Required</sup> <a name="dep" id="cdk8s.DependencyVertex.addChild.parameter.dep"></a>

- *Type:* <a href="#cdk8s.DependencyVertex">DependencyVertex</a>

The dependency.

---

##### `topology` <a name="topology" id="cdk8s.DependencyVertex.topology"></a>

```typescript
public topology(): IConstruct[]
```

Returns a topologically sorted array of the constructs in the sub-graph.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyVertex.property.inbound">inbound</a></code> | <code><a href="#cdk8s.DependencyVertex">DependencyVertex</a>[]</code> | Returns the parents of the vertex (i.e dependants). |
| <code><a href="#cdk8s.DependencyVertex.property.outbound">outbound</a></code> | <code><a href="#cdk8s.DependencyVertex">DependencyVertex</a>[]</code> | Returns the children of the vertex (i.e dependencies). |
| <code><a href="#cdk8s.DependencyVertex.property.value">value</a></code> | <code>constructs.IConstruct</code> | Returns the IConstruct this graph vertex represents. |

---

##### `inbound`<sup>Required</sup> <a name="inbound" id="cdk8s.DependencyVertex.property.inbound"></a>

```typescript
public readonly inbound: DependencyVertex[];
```

- *Type:* <a href="#cdk8s.DependencyVertex">DependencyVertex</a>[]

Returns the parents of the vertex (i.e dependants).

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="cdk8s.DependencyVertex.property.outbound"></a>

```typescript
public readonly outbound: DependencyVertex[];
```

- *Type:* <a href="#cdk8s.DependencyVertex">DependencyVertex</a>[]

Returns the children of the vertex (i.e dependencies).

---

##### `value`<sup>Optional</sup> <a name="value" id="cdk8s.DependencyVertex.property.value"></a>

```typescript
public readonly value: IConstruct;
```

- *Type:* constructs.IConstruct

Returns the IConstruct this graph vertex represents.

`null` in case this is the root of the graph.

---


### Duration <a name="Duration" id="cdk8s.Duration"></a>

Represents a length of time.

The amount can be specified either as a literal value (e.g: `10`) which
cannot be negative.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Duration.toDays">toDays</a></code> | Return the total number of days in this Duration. |
| <code><a href="#cdk8s.Duration.toHours">toHours</a></code> | Return the total number of hours in this Duration. |
| <code><a href="#cdk8s.Duration.toHumanString">toHumanString</a></code> | Turn this duration into a human-readable string. |
| <code><a href="#cdk8s.Duration.toIsoString">toIsoString</a></code> | Return an ISO 8601 representation of this period. |
| <code><a href="#cdk8s.Duration.toMilliseconds">toMilliseconds</a></code> | Return the total number of milliseconds in this Duration. |
| <code><a href="#cdk8s.Duration.toMinutes">toMinutes</a></code> | Return the total number of minutes in this Duration. |
| <code><a href="#cdk8s.Duration.toSeconds">toSeconds</a></code> | Return the total number of seconds in this Duration. |
| <code><a href="#cdk8s.Duration.unitLabel">unitLabel</a></code> | Return unit of Duration. |

---

##### `toDays` <a name="toDays" id="cdk8s.Duration.toDays"></a>

```typescript
public toDays(opts?: TimeConversionOptions): number
```

Return the total number of days in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toDays.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toHours` <a name="toHours" id="cdk8s.Duration.toHours"></a>

```typescript
public toHours(opts?: TimeConversionOptions): number
```

Return the total number of hours in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toHours.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toHumanString` <a name="toHumanString" id="cdk8s.Duration.toHumanString"></a>

```typescript
public toHumanString(): string
```

Turn this duration into a human-readable string.

##### `toIsoString` <a name="toIsoString" id="cdk8s.Duration.toIsoString"></a>

```typescript
public toIsoString(): string
```

Return an ISO 8601 representation of this period.

> [https://www.iso.org/fr/standard/70907.html](https://www.iso.org/fr/standard/70907.html)

##### `toMilliseconds` <a name="toMilliseconds" id="cdk8s.Duration.toMilliseconds"></a>

```typescript
public toMilliseconds(opts?: TimeConversionOptions): number
```

Return the total number of milliseconds in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toMilliseconds.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toMinutes` <a name="toMinutes" id="cdk8s.Duration.toMinutes"></a>

```typescript
public toMinutes(opts?: TimeConversionOptions): number
```

Return the total number of minutes in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toMinutes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toSeconds` <a name="toSeconds" id="cdk8s.Duration.toSeconds"></a>

```typescript
public toSeconds(opts?: TimeConversionOptions): number
```

Return the total number of seconds in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toSeconds.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `unitLabel` <a name="unitLabel" id="cdk8s.Duration.unitLabel"></a>

```typescript
public unitLabel(): string
```

Return unit of Duration.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Duration.days">days</a></code> | Create a Duration representing an amount of days. |
| <code><a href="#cdk8s.Duration.hours">hours</a></code> | Create a Duration representing an amount of hours. |
| <code><a href="#cdk8s.Duration.millis">millis</a></code> | Create a Duration representing an amount of milliseconds. |
| <code><a href="#cdk8s.Duration.minutes">minutes</a></code> | Create a Duration representing an amount of minutes. |
| <code><a href="#cdk8s.Duration.parse">parse</a></code> | Parse a period formatted according to the ISO 8601 standard. |
| <code><a href="#cdk8s.Duration.seconds">seconds</a></code> | Create a Duration representing an amount of seconds. |

---

##### `days` <a name="days" id="cdk8s.Duration.days"></a>

```typescript
import { Duration } from 'cdk8s'

Duration.days(amount: number)
```

Create a Duration representing an amount of days.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.days.parameter.amount"></a>

- *Type:* number

the amount of Days the `Duration` will represent.

---

##### `hours` <a name="hours" id="cdk8s.Duration.hours"></a>

```typescript
import { Duration } from 'cdk8s'

Duration.hours(amount: number)
```

Create a Duration representing an amount of hours.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.hours.parameter.amount"></a>

- *Type:* number

the amount of Hours the `Duration` will represent.

---

##### `millis` <a name="millis" id="cdk8s.Duration.millis"></a>

```typescript
import { Duration } from 'cdk8s'

Duration.millis(amount: number)
```

Create a Duration representing an amount of milliseconds.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.millis.parameter.amount"></a>

- *Type:* number

the amount of Milliseconds the `Duration` will represent.

---

##### `minutes` <a name="minutes" id="cdk8s.Duration.minutes"></a>

```typescript
import { Duration } from 'cdk8s'

Duration.minutes(amount: number)
```

Create a Duration representing an amount of minutes.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.minutes.parameter.amount"></a>

- *Type:* number

the amount of Minutes the `Duration` will represent.

---

##### `parse` <a name="parse" id="cdk8s.Duration.parse"></a>

```typescript
import { Duration } from 'cdk8s'

Duration.parse(duration: string)
```

Parse a period formatted according to the ISO 8601 standard.

> [https://www.iso.org/fr/standard/70907.html](https://www.iso.org/fr/standard/70907.html)

###### `duration`<sup>Required</sup> <a name="duration" id="cdk8s.Duration.parse.parameter.duration"></a>

- *Type:* string

an ISO-formtted duration to be parsed.

---

##### `seconds` <a name="seconds" id="cdk8s.Duration.seconds"></a>

```typescript
import { Duration } from 'cdk8s'

Duration.seconds(amount: number)
```

Create a Duration representing an amount of seconds.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.seconds.parameter.amount"></a>

- *Type:* number

the amount of Seconds the `Duration` will represent.

---



### ImplicitTokenResolver <a name="ImplicitTokenResolver" id="cdk8s.ImplicitTokenResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolves implicit tokens.

#### Initializers <a name="Initializers" id="cdk8s.ImplicitTokenResolver.Initializer"></a>

```typescript
import { ImplicitTokenResolver } from 'cdk8s'

new ImplicitTokenResolver()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ImplicitTokenResolver.resolve">resolve</a></code> | This function is invoked on every property during cdk8s synthesis. |

---

##### `resolve` <a name="resolve" id="cdk8s.ImplicitTokenResolver.resolve"></a>

```typescript
public resolve(context: ResolutionContext): void
```

This function is invoked on every property during cdk8s synthesis.

To replace a value, implementations must invoke `context.replaceValue`.

###### `context`<sup>Required</sup> <a name="context" id="cdk8s.ImplicitTokenResolver.resolve.parameter.context"></a>

- *Type:* <a href="#cdk8s.ResolutionContext">ResolutionContext</a>

---




### JsonPatch <a name="JsonPatch" id="cdk8s.JsonPatch"></a>

Utility for applying RFC-6902 JSON-Patch to a document.

Use the the `JsonPatch.apply(doc, ...ops)` function to apply a set of
operations to a JSON document and return the result.

Operations can be created using the factory methods `JsonPatch.add()`,
`JsonPatch.remove()`, etc.

*Example*

```typescript
const output = JsonPatch.apply(input,
 JsonPatch.replace('/world/hi/there', 'goodbye'),
 JsonPatch.add('/world/foo/', 'boom'),
 JsonPatch.remove('/hello'));
```



#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.JsonPatch.add">add</a></code> | Adds a value to an object or inserts it into an array. |
| <code><a href="#cdk8s.JsonPatch.apply">apply</a></code> | Applies a set of JSON-Patch (RFC-6902) operations to `document` and returns the result. |
| <code><a href="#cdk8s.JsonPatch.copy">copy</a></code> | Copies a value from one location to another within the JSON document. |
| <code><a href="#cdk8s.JsonPatch.move">move</a></code> | Moves a value from one location to the other. |
| <code><a href="#cdk8s.JsonPatch.remove">remove</a></code> | Removes a value from an object or array. |
| <code><a href="#cdk8s.JsonPatch.replace">replace</a></code> | Replaces a value. |
| <code><a href="#cdk8s.JsonPatch.test">test</a></code> | Tests that the specified value is set in the document. |

---

##### `add` <a name="add" id="cdk8s.JsonPatch.add"></a>

```typescript
import { JsonPatch } from 'cdk8s'

JsonPatch.add(path: string, value: any)
```

Adds a value to an object or inserts it into an array.

In the case of an
array, the value is inserted before the given index. The - character can be
used instead of an index to insert at the end of an array.

*Example*

```typescript
JsonPatch.add('/biscuits/1', { "name": "Ginger Nut" })
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.add.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.add.parameter.value"></a>

- *Type:* any

---

##### `apply` <a name="apply" id="cdk8s.JsonPatch.apply"></a>

```typescript
import { JsonPatch } from 'cdk8s'

JsonPatch.apply(document: any, ops: ...JsonPatch[])
```

Applies a set of JSON-Patch (RFC-6902) operations to `document` and returns the result.

###### `document`<sup>Required</sup> <a name="document" id="cdk8s.JsonPatch.apply.parameter.document"></a>

- *Type:* any

The document to patch.

---

###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s.JsonPatch.apply.parameter.ops"></a>

- *Type:* ...<a href="#cdk8s.JsonPatch">JsonPatch</a>[]

The operations to apply.

---

##### `copy` <a name="copy" id="cdk8s.JsonPatch.copy"></a>

```typescript
import { JsonPatch } from 'cdk8s'

JsonPatch.copy(from: string, path: string)
```

Copies a value from one location to another within the JSON document.

Both
from and path are JSON Pointers.

*Example*

```typescript
JsonPatch.copy('/biscuits/0', '/best_biscuit')
```


###### `from`<sup>Required</sup> <a name="from" id="cdk8s.JsonPatch.copy.parameter.from"></a>

- *Type:* string

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.copy.parameter.path"></a>

- *Type:* string

---

##### `move` <a name="move" id="cdk8s.JsonPatch.move"></a>

```typescript
import { JsonPatch } from 'cdk8s'

JsonPatch.move(from: string, path: string)
```

Moves a value from one location to the other.

Both from and path are JSON Pointers.

*Example*

```typescript
JsonPatch.move('/biscuits', '/cookies')
```


###### `from`<sup>Required</sup> <a name="from" id="cdk8s.JsonPatch.move.parameter.from"></a>

- *Type:* string

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.move.parameter.path"></a>

- *Type:* string

---

##### `remove` <a name="remove" id="cdk8s.JsonPatch.remove"></a>

```typescript
import { JsonPatch } from 'cdk8s'

JsonPatch.remove(path: string)
```

Removes a value from an object or array.

*Example*

```typescript
JsonPatch.remove('/biscuits/0')
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.remove.parameter.path"></a>

- *Type:* string

---

##### `replace` <a name="replace" id="cdk8s.JsonPatch.replace"></a>

```typescript
import { JsonPatch } from 'cdk8s'

JsonPatch.replace(path: string, value: any)
```

Replaces a value.

Equivalent to a “remove” followed by an “add”.

*Example*

```typescript
JsonPatch.replace('/biscuits/0/name', 'Chocolate Digestive')
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.replace.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.replace.parameter.value"></a>

- *Type:* any

---

##### `test` <a name="test" id="cdk8s.JsonPatch.test"></a>

```typescript
import { JsonPatch } from 'cdk8s'

JsonPatch.test(path: string, value: any)
```

Tests that the specified value is set in the document.

If the test fails,
then the patch as a whole should not apply.

*Example*

```typescript
JsonPatch.test('/best_biscuit/name', 'Choco Leibniz')
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.test.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.test.parameter.value"></a>

- *Type:* any

---



### Lazy <a name="Lazy" id="cdk8s.Lazy"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Lazy.produce">produce</a></code> | *No description.* |

---

##### `produce` <a name="produce" id="cdk8s.Lazy.produce"></a>

```typescript
public produce(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Lazy.any">any</a></code> | *No description.* |

---

##### `any` <a name="any" id="cdk8s.Lazy.any"></a>

```typescript
import { Lazy } from 'cdk8s'

Lazy.any(producer: IAnyProducer)
```

###### `producer`<sup>Required</sup> <a name="producer" id="cdk8s.Lazy.any.parameter.producer"></a>

- *Type:* <a href="#cdk8s.IAnyProducer">IAnyProducer</a>

---



### LazyResolver <a name="LazyResolver" id="cdk8s.LazyResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolvers instanecs of `Lazy`.

#### Initializers <a name="Initializers" id="cdk8s.LazyResolver.Initializer"></a>

```typescript
import { LazyResolver } from 'cdk8s'

new LazyResolver()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.LazyResolver.resolve">resolve</a></code> | This function is invoked on every property during cdk8s synthesis. |

---

##### `resolve` <a name="resolve" id="cdk8s.LazyResolver.resolve"></a>

```typescript
public resolve(context: ResolutionContext): void
```

This function is invoked on every property during cdk8s synthesis.

To replace a value, implementations must invoke `context.replaceValue`.

###### `context`<sup>Required</sup> <a name="context" id="cdk8s.LazyResolver.resolve.parameter.context"></a>

- *Type:* <a href="#cdk8s.ResolutionContext">ResolutionContext</a>

---




### Names <a name="Names" id="cdk8s.Names"></a>

Utilities for generating unique and stable names.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Names.toDnsLabel">toDnsLabel</a></code> | Generates a unique and stable name compatible DNS_LABEL from RFC-1123 from a path. |
| <code><a href="#cdk8s.Names.toLabelValue">toLabelValue</a></code> | Generates a unique and stable name compatible label key name segment and label value from a path. |

---

##### `toDnsLabel` <a name="toDnsLabel" id="cdk8s.Names.toDnsLabel"></a>

```typescript
import { Names } from 'cdk8s'

Names.toDnsLabel(scope: Construct, options?: NameOptions)
```

Generates a unique and stable name compatible DNS_LABEL from RFC-1123 from a path.

The generated name will:
 - contain at most 63 characters
 - contain only lowercase alphanumeric characters or ‘-’
 - start with an alphanumeric character
 - end with an alphanumeric character

The generated name will have the form:
 <comp0>-<comp1>-..-<compN>-<short-hash>

Where <comp> are the path components (assuming they are is separated by
"/").

Note that if the total length is longer than 63 characters, we will trim
the first components since the last components usually encode more meaning.

> [https://tools.ietf.org/html/rfc1123](https://tools.ietf.org/html/rfc1123)

###### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Names.toDnsLabel.parameter.scope"></a>

- *Type:* constructs.Construct

The construct for which to render the DNS label.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk8s.Names.toDnsLabel.parameter.options"></a>

- *Type:* <a href="#cdk8s.NameOptions">NameOptions</a>

Name options.

---

##### `toLabelValue` <a name="toLabelValue" id="cdk8s.Names.toLabelValue"></a>

```typescript
import { Names } from 'cdk8s'

Names.toLabelValue(scope: Construct, options?: NameOptions)
```

Generates a unique and stable name compatible label key name segment and label value from a path.

The name segment is required and must be 63 characters or less, beginning
and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-),
underscores (_), dots (.), and alphanumerics between.

Valid label values must be 63 characters or less and must be empty or
begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes
(-), underscores (_), dots (.), and alphanumerics between.

The generated name will have the form:
 <comp0><delim><comp1><delim>..<delim><compN><delim><short-hash>

Where <comp> are the path components (assuming they are is separated by
"/").

Note that if the total length is longer than 63 characters, we will trim
the first components since the last components usually encode more meaning.

> [https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)

###### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Names.toLabelValue.parameter.scope"></a>

- *Type:* constructs.Construct

The construct for which to render the DNS label.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk8s.Names.toLabelValue.parameter.options"></a>

- *Type:* <a href="#cdk8s.NameOptions">NameOptions</a>

Name options.

---



### NumberStringUnionResolver <a name="NumberStringUnionResolver" id="cdk8s.NumberStringUnionResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolves union types that allow using either number or string (as generated by the CLI).

E.g IntOrString, Quantity, ...

#### Initializers <a name="Initializers" id="cdk8s.NumberStringUnionResolver.Initializer"></a>

```typescript
import { NumberStringUnionResolver } from 'cdk8s'

new NumberStringUnionResolver()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.NumberStringUnionResolver.resolve">resolve</a></code> | This function is invoked on every property during cdk8s synthesis. |

---

##### `resolve` <a name="resolve" id="cdk8s.NumberStringUnionResolver.resolve"></a>

```typescript
public resolve(context: ResolutionContext): void
```

This function is invoked on every property during cdk8s synthesis.

To replace a value, implementations must invoke `context.replaceValue`.

###### `context`<sup>Required</sup> <a name="context" id="cdk8s.NumberStringUnionResolver.resolve.parameter.context"></a>

- *Type:* <a href="#cdk8s.ResolutionContext">ResolutionContext</a>

---




### ResolutionContext <a name="ResolutionContext" id="cdk8s.ResolutionContext"></a>

Context object for a specific resolution process.

#### Initializers <a name="Initializers" id="cdk8s.ResolutionContext.Initializer"></a>

```typescript
import { ResolutionContext } from 'cdk8s'

new ResolutionContext(obj: ApiObject, key: string[], value: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.obj">obj</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.key">key</a></code> | <code>string[]</code> | Which key is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.value">value</a></code> | <code>any</code> | The value associated to the key currently being resolved. |

---

##### `obj`<sup>Required</sup> <a name="obj" id="cdk8s.ResolutionContext.Initializer.parameter.obj"></a>

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject is currently being resolved.

---

##### `key`<sup>Required</sup> <a name="key" id="cdk8s.ResolutionContext.Initializer.parameter.key"></a>

- *Type:* string[]

Which key is currently being resolved.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s.ResolutionContext.Initializer.parameter.value"></a>

- *Type:* any

The value associated to the key currently being resolved.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ResolutionContext.replaceValue">replaceValue</a></code> | Replaces the original value in this resolution context with a new value. |

---

##### `replaceValue` <a name="replaceValue" id="cdk8s.ResolutionContext.replaceValue"></a>

```typescript
public replaceValue(newValue: any): void
```

Replaces the original value in this resolution context with a new value.

The new value is what will end up in the manifest.

###### `newValue`<sup>Required</sup> <a name="newValue" id="cdk8s.ResolutionContext.replaceValue.parameter.newValue"></a>

- *Type:* any

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ResolutionContext.property.key">key</a></code> | <code>string[]</code> | Which key is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.obj">obj</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.value">value</a></code> | <code>any</code> | The value associated to the key currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.replaced">replaced</a></code> | <code>boolean</code> | Whether or not the value was replaced by invoking the `replaceValue` method. |
| <code><a href="#cdk8s.ResolutionContext.property.replacedValue">replacedValue</a></code> | <code>any</code> | The replaced value that was set via the `replaceValue` method. |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk8s.ResolutionContext.property.key"></a>

```typescript
public readonly key: string[];
```

- *Type:* string[]

Which key is currently being resolved.

---

##### `obj`<sup>Required</sup> <a name="obj" id="cdk8s.ResolutionContext.property.obj"></a>

```typescript
public readonly obj: ApiObject;
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject is currently being resolved.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s.ResolutionContext.property.value"></a>

```typescript
public readonly value: any;
```

- *Type:* any

The value associated to the key currently being resolved.

---

##### `replaced`<sup>Required</sup> <a name="replaced" id="cdk8s.ResolutionContext.property.replaced"></a>

```typescript
public readonly replaced: boolean;
```

- *Type:* boolean

Whether or not the value was replaced by invoking the `replaceValue` method.

---

##### `replacedValue`<sup>Required</sup> <a name="replacedValue" id="cdk8s.ResolutionContext.property.replacedValue"></a>

```typescript
public readonly replacedValue: any;
```

- *Type:* any

The replaced value that was set via the `replaceValue` method.

---


### Size <a name="Size" id="cdk8s.Size"></a>

Represents the amount of digital storage.

The amount can be specified either as a literal value (e.g: `10`) which
cannot be negative.

When the amount is passed as a token, unit conversion is not possible.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Size.asString">asString</a></code> | Returns amount with abbreviated storage unit. |
| <code><a href="#cdk8s.Size.toGibibytes">toGibibytes</a></code> | Return this storage as a total number of gibibytes. |
| <code><a href="#cdk8s.Size.toKibibytes">toKibibytes</a></code> | Return this storage as a total number of kibibytes. |
| <code><a href="#cdk8s.Size.toMebibytes">toMebibytes</a></code> | Return this storage as a total number of mebibytes. |
| <code><a href="#cdk8s.Size.toPebibytes">toPebibytes</a></code> | Return this storage as a total number of pebibytes. |
| <code><a href="#cdk8s.Size.toTebibytes">toTebibytes</a></code> | Return this storage as a total number of tebibytes. |

---

##### `asString` <a name="asString" id="cdk8s.Size.asString"></a>

```typescript
public asString(): string
```

Returns amount with abbreviated storage unit.

##### `toGibibytes` <a name="toGibibytes" id="cdk8s.Size.toGibibytes"></a>

```typescript
public toGibibytes(opts?: SizeConversionOptions): number
```

Return this storage as a total number of gibibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toGibibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toKibibytes` <a name="toKibibytes" id="cdk8s.Size.toKibibytes"></a>

```typescript
public toKibibytes(opts?: SizeConversionOptions): number
```

Return this storage as a total number of kibibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toKibibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toMebibytes` <a name="toMebibytes" id="cdk8s.Size.toMebibytes"></a>

```typescript
public toMebibytes(opts?: SizeConversionOptions): number
```

Return this storage as a total number of mebibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toMebibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toPebibytes` <a name="toPebibytes" id="cdk8s.Size.toPebibytes"></a>

```typescript
public toPebibytes(opts?: SizeConversionOptions): number
```

Return this storage as a total number of pebibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toPebibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toTebibytes` <a name="toTebibytes" id="cdk8s.Size.toTebibytes"></a>

```typescript
public toTebibytes(opts?: SizeConversionOptions): number
```

Return this storage as a total number of tebibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toTebibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Size.gibibytes">gibibytes</a></code> | Create a Storage representing an amount gibibytes. |
| <code><a href="#cdk8s.Size.kibibytes">kibibytes</a></code> | Create a Storage representing an amount kibibytes. |
| <code><a href="#cdk8s.Size.mebibytes">mebibytes</a></code> | Create a Storage representing an amount mebibytes. |
| <code><a href="#cdk8s.Size.pebibyte">pebibyte</a></code> | Create a Storage representing an amount pebibytes. |
| <code><a href="#cdk8s.Size.tebibytes">tebibytes</a></code> | Create a Storage representing an amount tebibytes. |

---

##### `gibibytes` <a name="gibibytes" id="cdk8s.Size.gibibytes"></a>

```typescript
import { Size } from 'cdk8s'

Size.gibibytes(amount: number)
```

Create a Storage representing an amount gibibytes.

1 GiB = 1024 MiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.gibibytes.parameter.amount"></a>

- *Type:* number

---

##### `kibibytes` <a name="kibibytes" id="cdk8s.Size.kibibytes"></a>

```typescript
import { Size } from 'cdk8s'

Size.kibibytes(amount: number)
```

Create a Storage representing an amount kibibytes.

1 KiB = 1024 bytes

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.kibibytes.parameter.amount"></a>

- *Type:* number

---

##### `mebibytes` <a name="mebibytes" id="cdk8s.Size.mebibytes"></a>

```typescript
import { Size } from 'cdk8s'

Size.mebibytes(amount: number)
```

Create a Storage representing an amount mebibytes.

1 MiB = 1024 KiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.mebibytes.parameter.amount"></a>

- *Type:* number

---

##### `pebibyte` <a name="pebibyte" id="cdk8s.Size.pebibyte"></a>

```typescript
import { Size } from 'cdk8s'

Size.pebibyte(amount: number)
```

Create a Storage representing an amount pebibytes.

1 PiB = 1024 TiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.pebibyte.parameter.amount"></a>

- *Type:* number

---

##### `tebibytes` <a name="tebibytes" id="cdk8s.Size.tebibytes"></a>

```typescript
import { Size } from 'cdk8s'

Size.tebibytes(amount: number)
```

Create a Storage representing an amount tebibytes.

1 TiB = 1024 GiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.tebibytes.parameter.amount"></a>

- *Type:* number

---



### Testing <a name="Testing" id="cdk8s.Testing"></a>

Testing utilities for cdk8s applications.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Testing.app">app</a></code> | Returns an app for testing with the following properties: - Output directory is a temp dir. |
| <code><a href="#cdk8s.Testing.chart">chart</a></code> | *No description.* |
| <code><a href="#cdk8s.Testing.synth">synth</a></code> | Returns the Kubernetes manifest synthesized from this chart. |

---

##### `app` <a name="app" id="cdk8s.Testing.app"></a>

```typescript
import { Testing } from 'cdk8s'

Testing.app(props?: AppProps)
```

Returns an app for testing with the following properties: - Output directory is a temp dir.

###### `props`<sup>Optional</sup> <a name="props" id="cdk8s.Testing.app.parameter.props"></a>

- *Type:* <a href="#cdk8s.AppProps">AppProps</a>

---

##### `chart` <a name="chart" id="cdk8s.Testing.chart"></a>

```typescript
import { Testing } from 'cdk8s'

Testing.chart()
```

##### `synth` <a name="synth" id="cdk8s.Testing.synth"></a>

```typescript
import { Testing } from 'cdk8s'

Testing.synth(chart: Chart)
```

Returns the Kubernetes manifest synthesized from this chart.

###### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.Testing.synth.parameter.chart"></a>

- *Type:* <a href="#cdk8s.Chart">Chart</a>

---



### Yaml <a name="Yaml" id="cdk8s.Yaml"></a>

YAML utilities.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Yaml.formatObjects">formatObjects</a></code> | *No description.* |
| <code><a href="#cdk8s.Yaml.load">load</a></code> | Downloads a set of YAML documents (k8s manifest for example) from a URL or a file and returns them as javascript objects. |
| <code><a href="#cdk8s.Yaml.save">save</a></code> | Saves a set of objects as a multi-document YAML file. |
| <code><a href="#cdk8s.Yaml.stringify">stringify</a></code> | Stringify a document (or multiple documents) into YAML. |
| <code><a href="#cdk8s.Yaml.tmp">tmp</a></code> | Saves a set of YAML documents into a temp file (in /tmp). |

---

##### ~~`formatObjects`~~ <a name="formatObjects" id="cdk8s.Yaml.formatObjects"></a>

```typescript
import { Yaml } from 'cdk8s'

Yaml.formatObjects(docs: any[])
```

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.formatObjects.parameter.docs"></a>

- *Type:* any[]

---

##### `load` <a name="load" id="cdk8s.Yaml.load"></a>

```typescript
import { Yaml } from 'cdk8s'

Yaml.load(urlOrFile: string)
```

Downloads a set of YAML documents (k8s manifest for example) from a URL or a file and returns them as javascript objects.

Empty documents are filtered out.

###### `urlOrFile`<sup>Required</sup> <a name="urlOrFile" id="cdk8s.Yaml.load.parameter.urlOrFile"></a>

- *Type:* string

a URL of a file path to load from.

---

##### `save` <a name="save" id="cdk8s.Yaml.save"></a>

```typescript
import { Yaml } from 'cdk8s'

Yaml.save(filePath: string, docs: any[])
```

Saves a set of objects as a multi-document YAML file.

###### `filePath`<sup>Required</sup> <a name="filePath" id="cdk8s.Yaml.save.parameter.filePath"></a>

- *Type:* string

The output path.

---

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.save.parameter.docs"></a>

- *Type:* any[]

The set of objects.

---

##### `stringify` <a name="stringify" id="cdk8s.Yaml.stringify"></a>

```typescript
import { Yaml } from 'cdk8s'

Yaml.stringify(docs: ...any[])
```

Stringify a document (or multiple documents) into YAML.

We convert undefined values to null, but ignore any documents that are
undefined.

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.stringify.parameter.docs"></a>

- *Type:* ...any[]

A set of objects to convert to YAML.

---

##### `tmp` <a name="tmp" id="cdk8s.Yaml.tmp"></a>

```typescript
import { Yaml } from 'cdk8s'

Yaml.tmp(docs: any[])
```

Saves a set of YAML documents into a temp file (in /tmp).

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.tmp.parameter.docs"></a>

- *Type:* any[]

the set of documents to save.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IAnyProducer <a name="IAnyProducer" id="cdk8s.IAnyProducer"></a>

- *Implemented By:* <a href="#cdk8s.IAnyProducer">IAnyProducer</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.IAnyProducer.produce">produce</a></code> | *No description.* |

---

##### `produce` <a name="produce" id="cdk8s.IAnyProducer.produce"></a>

```typescript
public produce(): any
```


### IResolver <a name="IResolver" id="cdk8s.IResolver"></a>

- *Implemented By:* <a href="#cdk8s.ImplicitTokenResolver">ImplicitTokenResolver</a>, <a href="#cdk8s.LazyResolver">LazyResolver</a>, <a href="#cdk8s.NumberStringUnionResolver">NumberStringUnionResolver</a>, <a href="#cdk8s.IResolver">IResolver</a>

Contract for resolver objects.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.IResolver.resolve">resolve</a></code> | This function is invoked on every property during cdk8s synthesis. |

---

##### `resolve` <a name="resolve" id="cdk8s.IResolver.resolve"></a>

```typescript
public resolve(context: ResolutionContext): void
```

This function is invoked on every property during cdk8s synthesis.

To replace a value, implementations must invoke `context.replaceValue`.

###### `context`<sup>Required</sup> <a name="context" id="cdk8s.IResolver.resolve.parameter.context"></a>

- *Type:* <a href="#cdk8s.ResolutionContext">ResolutionContext</a>

---


## Enums <a name="Enums" id="Enums"></a>

### SizeRoundingBehavior <a name="SizeRoundingBehavior" id="cdk8s.SizeRoundingBehavior"></a>

Rounding behaviour when converting between units of `Size`.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.SizeRoundingBehavior.FAIL">FAIL</a></code> | Fail the conversion if the result is not an integer. |
| <code><a href="#cdk8s.SizeRoundingBehavior.FLOOR">FLOOR</a></code> | If the result is not an integer, round it to the closest integer less than the result. |
| <code><a href="#cdk8s.SizeRoundingBehavior.NONE">NONE</a></code> | Don't round. |

---

##### `FAIL` <a name="FAIL" id="cdk8s.SizeRoundingBehavior.FAIL"></a>

Fail the conversion if the result is not an integer.

---


##### `FLOOR` <a name="FLOOR" id="cdk8s.SizeRoundingBehavior.FLOOR"></a>

If the result is not an integer, round it to the closest integer less than the result.

---


##### `NONE` <a name="NONE" id="cdk8s.SizeRoundingBehavior.NONE"></a>

Don't round.

Return even if the result is a fraction.

---


### YamlOutputType <a name="YamlOutputType" id="cdk8s.YamlOutputType"></a>

The method to divide YAML output into files.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.YamlOutputType.FILE_PER_APP">FILE_PER_APP</a></code> | All resources are output into a single YAML file. |
| <code><a href="#cdk8s.YamlOutputType.FILE_PER_CHART">FILE_PER_CHART</a></code> | Resources are split into seperate files by chart. |
| <code><a href="#cdk8s.YamlOutputType.FILE_PER_RESOURCE">FILE_PER_RESOURCE</a></code> | Each resource is output to its own file. |
| <code><a href="#cdk8s.YamlOutputType.FOLDER_PER_CHART_FILE_PER_RESOURCE">FOLDER_PER_CHART_FILE_PER_RESOURCE</a></code> | Each chart in its own folder and each resource in its own file. |

---

##### `FILE_PER_APP` <a name="FILE_PER_APP" id="cdk8s.YamlOutputType.FILE_PER_APP"></a>

All resources are output into a single YAML file.

---


##### `FILE_PER_CHART` <a name="FILE_PER_CHART" id="cdk8s.YamlOutputType.FILE_PER_CHART"></a>

Resources are split into seperate files by chart.

---


##### `FILE_PER_RESOURCE` <a name="FILE_PER_RESOURCE" id="cdk8s.YamlOutputType.FILE_PER_RESOURCE"></a>

Each resource is output to its own file.

---


##### `FOLDER_PER_CHART_FILE_PER_RESOURCE` <a name="FOLDER_PER_CHART_FILE_PER_RESOURCE" id="cdk8s.YamlOutputType.FOLDER_PER_CHART_FILE_PER_RESOURCE"></a>

Each chart in its own folder and each resource in its own file.

---

