# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiObject <a name="ApiObject" id="cdk8s.ApiObject"></a>

#### Initializers <a name="Initializers" id="cdk8s.ApiObject.Initializer"></a>

```python
import cdk8s

cdk8s.ApiObject(
  scope: Construct,
  id: str,
  api_version: str,
  kind: str,
  metadata: ApiObjectMetadata = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the construct scope. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.id">id</a></code> | <code>str</code> | namespace. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.apiVersion">api_version</a></code> | <code>str</code> | API version. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Resource kind. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a></code> | Object metadata. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.ApiObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the construct scope.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.ApiObject.Initializer.parameter.id"></a>

- *Type:* str

namespace.

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="cdk8s.ApiObject.Initializer.parameter.apiVersion"></a>

- *Type:* str

API version.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObject.Initializer.parameter.kind"></a>

- *Type:* str

Resource kind.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s.ApiObject.Initializer.parameter.metadata"></a>

- *Type:* <a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a>

Object metadata.

If `name` is not specified, an app-unique name will be allocated by the
framework based on the path of the construct within thes construct tree.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ApiObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.ApiObject.addDependency">add_dependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s.ApiObject.addJsonPatch">add_json_patch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s.ApiObject.toJson">to_json</a></code> | Renders the object to Kubernetes JSON. |

---

##### `to_string` <a name="to_string" id="cdk8s.ApiObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_dependency` <a name="add_dependency" id="cdk8s.ApiObject.addDependency"></a>

```python
def add_dependency(
  dependencies: *IConstruct
) -> None
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s.ApiObject.addDependency.parameter.dependencies"></a>

- *Type:* *constructs.IConstruct

the dependencies to add.

---

##### `add_json_patch` <a name="add_json_patch" id="cdk8s.ApiObject.addJsonPatch"></a>

```python
def add_json_patch(
  ops: *JsonPatch
) -> None
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
kube_pod.add_json_patch(JsonPatch.replace("/spec/enableServiceLinks", True))
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s.ApiObject.addJsonPatch.parameter.ops"></a>

- *Type:* *<a href="#cdk8s.JsonPatch">JsonPatch</a>

The JSON-Patch operations to apply.

---

##### `to_json` <a name="to_json" id="cdk8s.ApiObject.toJson"></a>

```python
def to_json() -> typing.Any
```

Renders the object to Kubernetes JSON.

To disable sorting of dictionary keys in output object set the
`CDK8S_DISABLE_SORT` environment variable to any non-empty value.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ApiObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s.ApiObject.isApiObject">is_api_object</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s.ApiObject.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |

---

##### ~~`is_construct`~~ <a name="is_construct" id="cdk8s.ApiObject.isConstruct"></a>

```python
import cdk8s

cdk8s.ApiObject.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.ApiObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_api_object` <a name="is_api_object" id="cdk8s.ApiObject.isApiObject"></a>

```python
import cdk8s

cdk8s.ApiObject.is_api_object(
  o: typing.Any
)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s.ApiObject.isApiObject.parameter.o"></a>

- *Type:* typing.Any

The object to check.

---

##### `of` <a name="of" id="cdk8s.ApiObject.of"></a>

```python
import cdk8s

cdk8s.ApiObject.of(
  c: IConstruct
)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` *or* if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.ApiObject.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.ApiObject.property.apiGroup">api_group</a></code> | <code>str</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s.ApiObject.property.apiVersion">api_version</a></code> | <code>str</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s.ApiObject.property.chart">chart</a></code> | <code><a href="#cdk8s.Chart">Chart</a></code> | The chart in which this object is defined. |
| <code><a href="#cdk8s.ApiObject.property.kind">kind</a></code> | <code>str</code> | The object kind. |
| <code><a href="#cdk8s.ApiObject.property.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadataDefinition">ApiObjectMetadataDefinition</a></code> | Metadata associated with this API object. |
| <code><a href="#cdk8s.ApiObject.property.name">name</a></code> | <code>str</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.ApiObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="cdk8s.ApiObject.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="cdk8s.ApiObject.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.ApiObject.property.chart"></a>

```python
chart: Chart
```

- *Type:* <a href="#cdk8s.Chart">Chart</a>

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObject.property.kind"></a>

```python
kind: str
```

- *Type:* str

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s.ApiObject.property.metadata"></a>

```python
metadata: ApiObjectMetadataDefinition
```

- *Type:* <a href="#cdk8s.ApiObjectMetadataDefinition">ApiObjectMetadataDefinition</a>

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s.ApiObject.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---


### App <a name="App" id="cdk8s.App"></a>

Represents a cdk8s application.

#### Initializers <a name="Initializers" id="cdk8s.App.Initializer"></a>

```python
import cdk8s

cdk8s.App(
  outdir: str = None,
  output_file_extension: str = None,
  record_construct_metadata: bool = None,
  resolvers: typing.List[IResolver] = None,
  yaml_output_type: YamlOutputType = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.App.Initializer.parameter.outdir">outdir</a></code> | <code>str</code> | The directory to output Kubernetes manifests. |
| <code><a href="#cdk8s.App.Initializer.parameter.outputFileExtension">output_file_extension</a></code> | <code>str</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.App.Initializer.parameter.recordConstructMetadata">record_construct_metadata</a></code> | <code>bool</code> | When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app. |
| <code><a href="#cdk8s.App.Initializer.parameter.resolvers">resolvers</a></code> | <code>typing.List[<a href="#cdk8s.IResolver">IResolver</a>]</code> | A list of resolvers that can be used to replace property values before they are written to the manifest file. |
| <code><a href="#cdk8s.App.Initializer.parameter.yamlOutputType">yaml_output_type</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk8s.App.Initializer.parameter.outdir"></a>

- *Type:* str
- *Default:* CDK8S_OUTDIR if defined, otherwise "dist"

The directory to output Kubernetes manifests.

If you synthesize your application using `cdk8s synth`, you must
also pass this value to the CLI using the `--output` option or
the `output` property in the `cdk8s.yaml` configuration file.
Otherwise, the CLI will not know about the output directory,
and synthesis will fail.

This property is intended for internal and testing use.

---

##### `output_file_extension`<sup>Optional</sup> <a name="output_file_extension" id="cdk8s.App.Initializer.parameter.outputFileExtension"></a>

- *Type:* str
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `record_construct_metadata`<sup>Optional</sup> <a name="record_construct_metadata" id="cdk8s.App.Initializer.parameter.recordConstructMetadata"></a>

- *Type:* bool
- *Default:* false

When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app.

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="cdk8s.App.Initializer.parameter.resolvers"></a>

- *Type:* typing.List[<a href="#cdk8s.IResolver">IResolver</a>]
- *Default:* no resolvers.

A list of resolvers that can be used to replace property values before they are written to the manifest file.

When multiple resolvers are passed,
they are invoked by order in the list, and only the first one that applies
(e.g calls `context.replaceValue`) is invoked.

> [https://cdk8s.io/docs/latest/basics/app/#resolvers](https://cdk8s.io/docs/latest/basics/app/#resolvers)

---

##### `yaml_output_type`<sup>Optional</sup> <a name="yaml_output_type" id="cdk8s.App.Initializer.parameter.yamlOutputType"></a>

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.App.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.App.synth">synth</a></code> | Synthesizes all manifests to the output directory. |
| <code><a href="#cdk8s.App.synthYaml">synth_yaml</a></code> | Synthesizes the app into a YAML string. |

---

##### `to_string` <a name="to_string" id="cdk8s.App.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="cdk8s.App.synth"></a>

```python
def synth() -> None
```

Synthesizes all manifests to the output directory.

##### `synth_yaml` <a name="synth_yaml" id="cdk8s.App.synthYaml"></a>

```python
def synth_yaml() -> str
```

Synthesizes the app into a YAML string.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.App.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s.App.of">of</a></code> | *No description.* |

---

##### ~~`is_construct`~~ <a name="is_construct" id="cdk8s.App.isConstruct"></a>

```python
import cdk8s

cdk8s.App.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.App.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `of` <a name="of" id="cdk8s.App.of"></a>

```python
import cdk8s

cdk8s.App.of(
  c: IConstruct
)
```

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.App.of.parameter.c"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.App.property.charts">charts</a></code> | <code>typing.List[<a href="#cdk8s.Chart">Chart</a>]</code> | Returns all the charts in this app, sorted topologically. |
| <code><a href="#cdk8s.App.property.outdir">outdir</a></code> | <code>str</code> | The output directory into which manifests will be synthesized. |
| <code><a href="#cdk8s.App.property.outputFileExtension">output_file_extension</a></code> | <code>str</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.App.property.resolvers">resolvers</a></code> | <code>typing.List[<a href="#cdk8s.IResolver">IResolver</a>]</code> | Resolvers used by this app. |
| <code><a href="#cdk8s.App.property.yamlOutputType">yaml_output_type</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.App.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `charts`<sup>Required</sup> <a name="charts" id="cdk8s.App.property.charts"></a>

```python
charts: typing.List[Chart]
```

- *Type:* typing.List[<a href="#cdk8s.Chart">Chart</a>]

Returns all the charts in this app, sorted topologically.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdk8s.App.property.outdir"></a>

```python
outdir: str
```

- *Type:* str

The output directory into which manifests will be synthesized.

---

##### `output_file_extension`<sup>Required</sup> <a name="output_file_extension" id="cdk8s.App.property.outputFileExtension"></a>

```python
output_file_extension: str
```

- *Type:* str
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="cdk8s.App.property.resolvers"></a>

```python
resolvers: typing.List[IResolver]
```

- *Type:* typing.List[<a href="#cdk8s.IResolver">IResolver</a>]

Resolvers used by this app.

This includes both custom resolvers
passed by the `resolvers` property, as well as built-in resolvers.

---

##### `yaml_output_type`<sup>Required</sup> <a name="yaml_output_type" id="cdk8s.App.property.yamlOutputType"></a>

```python
yaml_output_type: YamlOutputType
```

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---


### Chart <a name="Chart" id="cdk8s.Chart"></a>

#### Initializers <a name="Initializers" id="cdk8s.Chart.Initializer"></a>

```python
import cdk8s

cdk8s.Chart(
  scope: Construct,
  id: str,
  disable_resource_name_hashes: bool = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Chart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Chart.Initializer.parameter.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#cdk8s.Chart.Initializer.parameter.disableResourceNameHashes">disable_resource_name_hashes</a></code> | <code>bool</code> | The autogenerated resource name by default is suffixed with a stable hash of the construct path. |
| <code><a href="#cdk8s.Chart.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to all resources in this chart. |
| <code><a href="#cdk8s.Chart.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The default namespace for all objects defined in this chart (directly or indirectly). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Chart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Chart.Initializer.parameter.id"></a>

- *Type:* str

---

##### `disable_resource_name_hashes`<sup>Optional</sup> <a name="disable_resource_name_hashes" id="cdk8s.Chart.Initializer.parameter.disableResourceNameHashes"></a>

- *Type:* bool
- *Default:* false

The autogenerated resource name by default is suffixed with a stable hash of the construct path.

Setting this property to true drops the hash suffix.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.Chart.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]
- *Default:* no common labels

Labels to apply to all resources in this chart.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.Chart.Initializer.parameter.namespace"></a>

- *Type:* str
- *Default:* no namespace is synthesized (usually this implies "default")

The default namespace for all objects defined in this chart (directly or indirectly).

This namespace will only apply to objects that don't have a
`namespace` explicitly defined for them.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Chart.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.Chart.addDependency">add_dependency</a></code> | Create a dependency between this Chart and other constructs. |
| <code><a href="#cdk8s.Chart.generateObjectName">generate_object_name</a></code> | Generates a app-unique name for an object given it's construct node path. |
| <code><a href="#cdk8s.Chart.toJson">to_json</a></code> | Renders this chart to a set of Kubernetes JSON resources. |

---

##### `to_string` <a name="to_string" id="cdk8s.Chart.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_dependency` <a name="add_dependency" id="cdk8s.Chart.addDependency"></a>

```python
def add_dependency(
  dependencies: *IConstruct
) -> None
```

Create a dependency between this Chart and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s.Chart.addDependency.parameter.dependencies"></a>

- *Type:* *constructs.IConstruct

the dependencies to add.

---

##### `generate_object_name` <a name="generate_object_name" id="cdk8s.Chart.generateObjectName"></a>

```python
def generate_object_name(
  api_object: ApiObject
) -> str
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

###### `api_object`<sup>Required</sup> <a name="api_object" id="cdk8s.Chart.generateObjectName.parameter.apiObject"></a>

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

The API object to generate a name for.

---

##### `to_json` <a name="to_json" id="cdk8s.Chart.toJson"></a>

```python
def to_json() -> typing.List[typing.Any]
```

Renders this chart to a set of Kubernetes JSON resources.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Chart.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s.Chart.isChart">is_chart</a></code> | Return whether the given object is a Chart. |
| <code><a href="#cdk8s.Chart.of">of</a></code> | Finds the chart in which a node is defined. |

---

##### ~~`is_construct`~~ <a name="is_construct" id="cdk8s.Chart.isConstruct"></a>

```python
import cdk8s

cdk8s.Chart.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Chart.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_chart` <a name="is_chart" id="cdk8s.Chart.isChart"></a>

```python
import cdk8s

cdk8s.Chart.is_chart(
  x: typing.Any
)
```

Return whether the given object is a Chart.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Chart.isChart.parameter.x"></a>

- *Type:* typing.Any

---

##### `of` <a name="of" id="cdk8s.Chart.of"></a>

```python
import cdk8s

cdk8s.Chart.of(
  c: IConstruct
)
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
| <code><a href="#cdk8s.Chart.property.apiObjects">api_objects</a></code> | <code>typing.List[<a href="#cdk8s.ApiObject">ApiObject</a>]</code> | Returns all the included API objects. |
| <code><a href="#cdk8s.Chart.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels applied to all resources in this chart. |
| <code><a href="#cdk8s.Chart.property.namespace">namespace</a></code> | <code>str</code> | The default namespace for all objects in this chart. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Chart.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `api_objects`<sup>Required</sup> <a name="api_objects" id="cdk8s.Chart.property.apiObjects"></a>

```python
api_objects: typing.List[ApiObject]
```

- *Type:* typing.List[<a href="#cdk8s.ApiObject">ApiObject</a>]

Returns all the included API objects.

---

##### `labels`<sup>Required</sup> <a name="labels" id="cdk8s.Chart.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels applied to all resources in this chart.

This is an immutable copy.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.Chart.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The default namespace for all objects in this chart.

---


### Helm <a name="Helm" id="cdk8s.Helm"></a>

Represents a Helm deployment.

Use this construct to import an existing Helm chart and incorporate it into your constructs.

#### Initializers <a name="Initializers" id="cdk8s.Helm.Initializer"></a>

```python
import cdk8s

cdk8s.Helm(
  scope: Construct,
  id: str,
  chart: str,
  helm_executable: str = None,
  helm_flags: typing.List[str] = None,
  namespace: str = None,
  release_name: str = None,
  repo: str = None,
  values: typing.Mapping[typing.Any] = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Helm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Helm.Initializer.parameter.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#cdk8s.Helm.Initializer.parameter.chart">chart</a></code> | <code>str</code> | The chart name to use. It can be a chart from a helm repository or a local directory. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.helmExecutable">helm_executable</a></code> | <code>str</code> | The local helm executable to use in order to create the manifest the chart. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.helmFlags">helm_flags</a></code> | <code>typing.List[str]</code> | Additional flags to add to the `helm` execution. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Scope all resources in to a given namespace. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.releaseName">release_name</a></code> | <code>str</code> | The release name. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.repo">repo</a></code> | <code>str</code> | Chart repository url where to locate the requested chart. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.values">values</a></code> | <code>typing.Mapping[typing.Any]</code> | Values to pass to the chart. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.version">version</a></code> | <code>str</code> | Version constraint for the chart version to use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Helm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Helm.Initializer.parameter.id"></a>

- *Type:* str

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.Helm.Initializer.parameter.chart"></a>

- *Type:* str

The chart name to use. It can be a chart from a helm repository or a local directory.

This name is passed to `helm template` and has all the relevant semantics.

---

*Example*

```python
"bitnami/redis"
```


##### `helm_executable`<sup>Optional</sup> <a name="helm_executable" id="cdk8s.Helm.Initializer.parameter.helmExecutable"></a>

- *Type:* str
- *Default:* "helm"

The local helm executable to use in order to create the manifest the chart.

---

##### `helm_flags`<sup>Optional</sup> <a name="helm_flags" id="cdk8s.Helm.Initializer.parameter.helmFlags"></a>

- *Type:* typing.List[str]
- *Default:* []

Additional flags to add to the `helm` execution.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.Helm.Initializer.parameter.namespace"></a>

- *Type:* str

Scope all resources in to a given namespace.

---

##### `release_name`<sup>Optional</sup> <a name="release_name" id="cdk8s.Helm.Initializer.parameter.releaseName"></a>

- *Type:* str
- *Default:* if unspecified, a name will be allocated based on the construct path

The release name.

> [https://helm.sh/docs/intro/using_helm/#three-big-concepts](https://helm.sh/docs/intro/using_helm/#three-big-concepts)

---

##### `repo`<sup>Optional</sup> <a name="repo" id="cdk8s.Helm.Initializer.parameter.repo"></a>

- *Type:* str

Chart repository url where to locate the requested chart.

---

##### `values`<sup>Optional</sup> <a name="values" id="cdk8s.Helm.Initializer.parameter.values"></a>

- *Type:* typing.Mapping[typing.Any]
- *Default:* If no values are specified, chart will use the defaults.

Values to pass to the chart.

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk8s.Helm.Initializer.parameter.version"></a>

- *Type:* str

Version constraint for the chart version to use.

This constraint can be a specific tag (e.g. 1.1.1)
or it may reference a valid range (e.g. ^2.0.0).
If this is not specified, the latest version is used

This name is passed to `helm template --version` and has all the relevant semantics.

---

*Example*

```python
"^2.0.0"
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Helm.toString">to_string</a></code> | Returns a string representation of this construct. |

---

##### `to_string` <a name="to_string" id="cdk8s.Helm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Helm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |

---

##### ~~`is_construct`~~ <a name="is_construct" id="cdk8s.Helm.isConstruct"></a>

```python
import cdk8s

cdk8s.Helm.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Helm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Helm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Helm.property.apiObjects">api_objects</a></code> | <code>typing.List[<a href="#cdk8s.ApiObject">ApiObject</a>]</code> | Returns all the included API objects. |
| <code><a href="#cdk8s.Helm.property.releaseName">release_name</a></code> | <code>str</code> | The helm release name. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Helm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `api_objects`<sup>Required</sup> <a name="api_objects" id="cdk8s.Helm.property.apiObjects"></a>

```python
api_objects: typing.List[ApiObject]
```

- *Type:* typing.List[<a href="#cdk8s.ApiObject">ApiObject</a>]

Returns all the included API objects.

---

##### `release_name`<sup>Required</sup> <a name="release_name" id="cdk8s.Helm.property.releaseName"></a>

```python
release_name: str
```

- *Type:* str

The helm release name.

---


### Include <a name="Include" id="cdk8s.Include"></a>

Reads a YAML manifest from a file or a URL and defines all resources as API objects within the defined scope.

The names (`metadata.name`) of imported resources will be preserved as-is
from the manifest.

#### Initializers <a name="Initializers" id="cdk8s.Include.Initializer"></a>

```python
import cdk8s

cdk8s.Include(
  scope: Construct,
  id: str,
  url: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Include.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Include.Initializer.parameter.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#cdk8s.Include.Initializer.parameter.url">url</a></code> | <code>str</code> | Local file path or URL which includes a Kubernetes YAML manifest. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Include.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Include.Initializer.parameter.id"></a>

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s.Include.Initializer.parameter.url"></a>

- *Type:* str

Local file path or URL which includes a Kubernetes YAML manifest.

---

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
mymanifest.yaml
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Include.toString">to_string</a></code> | Returns a string representation of this construct. |

---

##### `to_string` <a name="to_string" id="cdk8s.Include.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Include.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |

---

##### ~~`is_construct`~~ <a name="is_construct" id="cdk8s.Include.isConstruct"></a>

```python
import cdk8s

cdk8s.Include.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Include.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Include.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Include.property.apiObjects">api_objects</a></code> | <code>typing.List[<a href="#cdk8s.ApiObject">ApiObject</a>]</code> | Returns all the included API objects. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Include.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `api_objects`<sup>Required</sup> <a name="api_objects" id="cdk8s.Include.property.apiObjects"></a>

```python
api_objects: typing.List[ApiObject]
```

- *Type:* typing.List[<a href="#cdk8s.ApiObject">ApiObject</a>]

Returns all the included API objects.

---


## Structs <a name="Structs" id="Structs"></a>

### ApiObjectMetadata <a name="ApiObjectMetadata" id="cdk8s.ApiObjectMetadata"></a>

Metadata associated with this object.

#### Initializer <a name="Initializer" id="cdk8s.ApiObjectMetadata.Initializer"></a>

```python
import cdk8s

cdk8s.ApiObjectMetadata(
  annotations: typing.Mapping[str] = None,
  finalizers: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None,
  owner_references: typing.List[OwnerReference] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.finalizers">finalizers</a></code> | <code>typing.List[str]</code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.name">name</a></code> | <code>str</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.ownerReferences">owner_references</a></code> | <code>typing.List[<a href="#cdk8s.OwnerReference">OwnerReference</a>]</code> | List of objects depended by this object. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadata.property.finalizers"></a>

```python
finalizers: typing.List[str]
```

- *Type:* typing.List[str]
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

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadata.property.name"></a>

```python
name: str
```

- *Type:* str
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

```python
namespace: str
```

- *Type:* str
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `owner_references`<sup>Optional</sup> <a name="owner_references" id="cdk8s.ApiObjectMetadata.property.ownerReferences"></a>

```python
owner_references: typing.List[OwnerReference]
```

- *Type:* typing.List[<a href="#cdk8s.OwnerReference">OwnerReference</a>]
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

```python
import cdk8s

cdk8s.ApiObjectMetadataDefinitionOptions(
  annotations: typing.Mapping[str] = None,
  finalizers: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None,
  owner_references: typing.List[OwnerReference] = None,
  api_object: ApiObject
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.finalizers">finalizers</a></code> | <code>typing.List[str]</code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.name">name</a></code> | <code>str</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.ownerReferences">owner_references</a></code> | <code>typing.List[<a href="#cdk8s.OwnerReference">OwnerReference</a>]</code> | List of objects depended by this object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.apiObject">api_object</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject instance is the metadata attached to. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.finalizers"></a>

```python
finalizers: typing.List[str]
```

- *Type:* typing.List[str]
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

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.name"></a>

```python
name: str
```

- *Type:* str
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

```python
namespace: str
```

- *Type:* str
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `owner_references`<sup>Optional</sup> <a name="owner_references" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.ownerReferences"></a>

```python
owner_references: typing.List[OwnerReference]
```

- *Type:* typing.List[<a href="#cdk8s.OwnerReference">OwnerReference</a>]
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

##### `api_object`<sup>Required</sup> <a name="api_object" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.apiObject"></a>

```python
api_object: ApiObject
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject instance is the metadata attached to.

---

### ApiObjectProps <a name="ApiObjectProps" id="cdk8s.ApiObjectProps"></a>

Options for defining API objects.

#### Initializer <a name="Initializer" id="cdk8s.ApiObjectProps.Initializer"></a>

```python
import cdk8s

cdk8s.ApiObjectProps(
  api_version: str,
  kind: str,
  metadata: ApiObjectMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectProps.property.apiVersion">api_version</a></code> | <code>str</code> | API version. |
| <code><a href="#cdk8s.ApiObjectProps.property.kind">kind</a></code> | <code>str</code> | Resource kind. |
| <code><a href="#cdk8s.ApiObjectProps.property.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a></code> | Object metadata. |

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="cdk8s.ApiObjectProps.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObjectProps.property.kind"></a>

```python
kind: str
```

- *Type:* str

Resource kind.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s.ApiObjectProps.property.metadata"></a>

```python
metadata: ApiObjectMetadata
```

- *Type:* <a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a>

Object metadata.

If `name` is not specified, an app-unique name will be allocated by the
framework based on the path of the construct within thes construct tree.

---

### AppProps <a name="AppProps" id="cdk8s.AppProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.AppProps.Initializer"></a>

```python
import cdk8s

cdk8s.AppProps(
  outdir: str = None,
  output_file_extension: str = None,
  record_construct_metadata: bool = None,
  resolvers: typing.List[IResolver] = None,
  yaml_output_type: YamlOutputType = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.AppProps.property.outdir">outdir</a></code> | <code>str</code> | The directory to output Kubernetes manifests. |
| <code><a href="#cdk8s.AppProps.property.outputFileExtension">output_file_extension</a></code> | <code>str</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.AppProps.property.recordConstructMetadata">record_construct_metadata</a></code> | <code>bool</code> | When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app. |
| <code><a href="#cdk8s.AppProps.property.resolvers">resolvers</a></code> | <code>typing.List[<a href="#cdk8s.IResolver">IResolver</a>]</code> | A list of resolvers that can be used to replace property values before they are written to the manifest file. |
| <code><a href="#cdk8s.AppProps.property.yamlOutputType">yaml_output_type</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk8s.AppProps.property.outdir"></a>

```python
outdir: str
```

- *Type:* str
- *Default:* CDK8S_OUTDIR if defined, otherwise "dist"

The directory to output Kubernetes manifests.

If you synthesize your application using `cdk8s synth`, you must
also pass this value to the CLI using the `--output` option or
the `output` property in the `cdk8s.yaml` configuration file.
Otherwise, the CLI will not know about the output directory,
and synthesis will fail.

This property is intended for internal and testing use.

---

##### `output_file_extension`<sup>Optional</sup> <a name="output_file_extension" id="cdk8s.AppProps.property.outputFileExtension"></a>

```python
output_file_extension: str
```

- *Type:* str
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `record_construct_metadata`<sup>Optional</sup> <a name="record_construct_metadata" id="cdk8s.AppProps.property.recordConstructMetadata"></a>

```python
record_construct_metadata: bool
```

- *Type:* bool
- *Default:* false

When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app.

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="cdk8s.AppProps.property.resolvers"></a>

```python
resolvers: typing.List[IResolver]
```

- *Type:* typing.List[<a href="#cdk8s.IResolver">IResolver</a>]
- *Default:* no resolvers.

A list of resolvers that can be used to replace property values before they are written to the manifest file.

When multiple resolvers are passed,
they are invoked by order in the list, and only the first one that applies
(e.g calls `context.replaceValue`) is invoked.

> [https://cdk8s.io/docs/latest/basics/app/#resolvers](https://cdk8s.io/docs/latest/basics/app/#resolvers)

---

##### `yaml_output_type`<sup>Optional</sup> <a name="yaml_output_type" id="cdk8s.AppProps.property.yamlOutputType"></a>

```python
yaml_output_type: YamlOutputType
```

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---

### ChartProps <a name="ChartProps" id="cdk8s.ChartProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.ChartProps.Initializer"></a>

```python
import cdk8s

cdk8s.ChartProps(
  disable_resource_name_hashes: bool = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ChartProps.property.disableResourceNameHashes">disable_resource_name_hashes</a></code> | <code>bool</code> | The autogenerated resource name by default is suffixed with a stable hash of the construct path. |
| <code><a href="#cdk8s.ChartProps.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to all resources in this chart. |
| <code><a href="#cdk8s.ChartProps.property.namespace">namespace</a></code> | <code>str</code> | The default namespace for all objects defined in this chart (directly or indirectly). |

---

##### `disable_resource_name_hashes`<sup>Optional</sup> <a name="disable_resource_name_hashes" id="cdk8s.ChartProps.property.disableResourceNameHashes"></a>

```python
disable_resource_name_hashes: bool
```

- *Type:* bool
- *Default:* false

The autogenerated resource name by default is suffixed with a stable hash of the construct path.

Setting this property to true drops the hash suffix.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.ChartProps.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]
- *Default:* no common labels

Labels to apply to all resources in this chart.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ChartProps.property.namespace"></a>

```python
namespace: str
```

- *Type:* str
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

```python
import cdk8s

cdk8s.CronOptions(
  day: str = None,
  hour: str = None,
  minute: str = None,
  month: str = None,
  week_day: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.CronOptions.property.day">day</a></code> | <code>str</code> | The day of the month to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.hour">hour</a></code> | <code>str</code> | The hour to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.minute">minute</a></code> | <code>str</code> | The minute to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.month">month</a></code> | <code>str</code> | The month to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.weekDay">week_day</a></code> | <code>str</code> | The day of the week to run this rule at. |

---

##### `day`<sup>Optional</sup> <a name="day" id="cdk8s.CronOptions.property.day"></a>

```python
day: str
```

- *Type:* str
- *Default:* Every day of the month

The day of the month to run this rule at.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="cdk8s.CronOptions.property.hour"></a>

```python
hour: str
```

- *Type:* str
- *Default:* Every hour

The hour to run this rule at.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="cdk8s.CronOptions.property.minute"></a>

```python
minute: str
```

- *Type:* str
- *Default:* Every minute

The minute to run this rule at.

---

##### `month`<sup>Optional</sup> <a name="month" id="cdk8s.CronOptions.property.month"></a>

```python
month: str
```

- *Type:* str
- *Default:* Every month

The month to run this rule at.

---

##### `week_day`<sup>Optional</sup> <a name="week_day" id="cdk8s.CronOptions.property.weekDay"></a>

```python
week_day: str
```

- *Type:* str
- *Default:* Any day of the week

The day of the week to run this rule at.

---

### GroupVersionKind <a name="GroupVersionKind" id="cdk8s.GroupVersionKind"></a>

#### Initializer <a name="Initializer" id="cdk8s.GroupVersionKind.Initializer"></a>

```python
import cdk8s

cdk8s.GroupVersionKind(
  api_version: str,
  kind: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.GroupVersionKind.property.apiVersion">api_version</a></code> | <code>str</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s.GroupVersionKind.property.kind">kind</a></code> | <code>str</code> | The object kind. |

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="cdk8s.GroupVersionKind.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.GroupVersionKind.property.kind"></a>

```python
kind: str
```

- *Type:* str

The object kind.

---

### HelmProps <a name="HelmProps" id="cdk8s.HelmProps"></a>

Options for `Helm`.

#### Initializer <a name="Initializer" id="cdk8s.HelmProps.Initializer"></a>

```python
import cdk8s

cdk8s.HelmProps(
  chart: str,
  helm_executable: str = None,
  helm_flags: typing.List[str] = None,
  namespace: str = None,
  release_name: str = None,
  repo: str = None,
  values: typing.Mapping[typing.Any] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.HelmProps.property.chart">chart</a></code> | <code>str</code> | The chart name to use. It can be a chart from a helm repository or a local directory. |
| <code><a href="#cdk8s.HelmProps.property.helmExecutable">helm_executable</a></code> | <code>str</code> | The local helm executable to use in order to create the manifest the chart. |
| <code><a href="#cdk8s.HelmProps.property.helmFlags">helm_flags</a></code> | <code>typing.List[str]</code> | Additional flags to add to the `helm` execution. |
| <code><a href="#cdk8s.HelmProps.property.namespace">namespace</a></code> | <code>str</code> | Scope all resources in to a given namespace. |
| <code><a href="#cdk8s.HelmProps.property.releaseName">release_name</a></code> | <code>str</code> | The release name. |
| <code><a href="#cdk8s.HelmProps.property.repo">repo</a></code> | <code>str</code> | Chart repository url where to locate the requested chart. |
| <code><a href="#cdk8s.HelmProps.property.values">values</a></code> | <code>typing.Mapping[typing.Any]</code> | Values to pass to the chart. |
| <code><a href="#cdk8s.HelmProps.property.version">version</a></code> | <code>str</code> | Version constraint for the chart version to use. |

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.HelmProps.property.chart"></a>

```python
chart: str
```

- *Type:* str

The chart name to use. It can be a chart from a helm repository or a local directory.

This name is passed to `helm template` and has all the relevant semantics.

---

*Example*

```python
"bitnami/redis"
```


##### `helm_executable`<sup>Optional</sup> <a name="helm_executable" id="cdk8s.HelmProps.property.helmExecutable"></a>

```python
helm_executable: str
```

- *Type:* str
- *Default:* "helm"

The local helm executable to use in order to create the manifest the chart.

---

##### `helm_flags`<sup>Optional</sup> <a name="helm_flags" id="cdk8s.HelmProps.property.helmFlags"></a>

```python
helm_flags: typing.List[str]
```

- *Type:* typing.List[str]
- *Default:* []

Additional flags to add to the `helm` execution.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.HelmProps.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Scope all resources in to a given namespace.

---

##### `release_name`<sup>Optional</sup> <a name="release_name" id="cdk8s.HelmProps.property.releaseName"></a>

```python
release_name: str
```

- *Type:* str
- *Default:* if unspecified, a name will be allocated based on the construct path

The release name.

> [https://helm.sh/docs/intro/using_helm/#three-big-concepts](https://helm.sh/docs/intro/using_helm/#three-big-concepts)

---

##### `repo`<sup>Optional</sup> <a name="repo" id="cdk8s.HelmProps.property.repo"></a>

```python
repo: str
```

- *Type:* str

Chart repository url where to locate the requested chart.

---

##### `values`<sup>Optional</sup> <a name="values" id="cdk8s.HelmProps.property.values"></a>

```python
values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]
- *Default:* If no values are specified, chart will use the defaults.

Values to pass to the chart.

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk8s.HelmProps.property.version"></a>

```python
version: str
```

- *Type:* str

Version constraint for the chart version to use.

This constraint can be a specific tag (e.g. 1.1.1)
or it may reference a valid range (e.g. ^2.0.0).
If this is not specified, the latest version is used

This name is passed to `helm template --version` and has all the relevant semantics.

---

*Example*

```python
"^2.0.0"
```


### IncludeProps <a name="IncludeProps" id="cdk8s.IncludeProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.IncludeProps.Initializer"></a>

```python
import cdk8s

cdk8s.IncludeProps(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.IncludeProps.property.url">url</a></code> | <code>str</code> | Local file path or URL which includes a Kubernetes YAML manifest. |

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s.IncludeProps.property.url"></a>

```python
url: str
```

- *Type:* str

Local file path or URL which includes a Kubernetes YAML manifest.

---

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
mymanifest.yaml
```


### NameOptions <a name="NameOptions" id="cdk8s.NameOptions"></a>

Options for name generation.

#### Initializer <a name="Initializer" id="cdk8s.NameOptions.Initializer"></a>

```python
import cdk8s

cdk8s.NameOptions(
  delimiter: str = None,
  extra: typing.List[str] = None,
  include_hash: bool = None,
  max_len: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.NameOptions.property.delimiter">delimiter</a></code> | <code>str</code> | Delimiter to use between components. |
| <code><a href="#cdk8s.NameOptions.property.extra">extra</a></code> | <code>typing.List[str]</code> | Extra components to include in the name. |
| <code><a href="#cdk8s.NameOptions.property.includeHash">include_hash</a></code> | <code>bool</code> | Include a short hash as last part of the name. |
| <code><a href="#cdk8s.NameOptions.property.maxLen">max_len</a></code> | <code>typing.Union[int, float]</code> | Maximum allowed length for the name. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="cdk8s.NameOptions.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str
- *Default:* "-"

Delimiter to use between components.

---

##### `extra`<sup>Optional</sup> <a name="extra" id="cdk8s.NameOptions.property.extra"></a>

```python
extra: typing.List[str]
```

- *Type:* typing.List[str]
- *Default:* [] use the construct path components

Extra components to include in the name.

---

##### `include_hash`<sup>Optional</sup> <a name="include_hash" id="cdk8s.NameOptions.property.includeHash"></a>

```python
include_hash: bool
```

- *Type:* bool
- *Default:* true

Include a short hash as last part of the name.

---

##### `max_len`<sup>Optional</sup> <a name="max_len" id="cdk8s.NameOptions.property.maxLen"></a>

```python
max_len: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]
- *Default:* 63

Maximum allowed length for the name.

---

### OwnerReference <a name="OwnerReference" id="cdk8s.OwnerReference"></a>

OwnerReference contains enough information to let you identify an owning object.

An owning object must be in the same namespace as the dependent, or
be cluster-scoped, so there is no namespace field.

#### Initializer <a name="Initializer" id="cdk8s.OwnerReference.Initializer"></a>

```python
import cdk8s

cdk8s.OwnerReference(
  api_version: str,
  kind: str,
  name: str,
  uid: str,
  block_owner_deletion: bool = None,
  controller: bool = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.OwnerReference.property.apiVersion">api_version</a></code> | <code>str</code> | API version of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.kind">kind</a></code> | <code>str</code> | Kind of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.name">name</a></code> | <code>str</code> | Name of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.uid">uid</a></code> | <code>str</code> | UID of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.blockOwnerDeletion">block_owner_deletion</a></code> | <code>bool</code> | If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. |
| <code><a href="#cdk8s.OwnerReference.property.controller">controller</a></code> | <code>bool</code> | If true, this reference points to the managing controller. |

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="cdk8s.OwnerReference.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version of the referent.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.OwnerReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

Kind of the referent.

> [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds)

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s.OwnerReference.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#names](http://kubernetes.io/docs/user-guide/identifiers#names)

---

##### `uid`<sup>Required</sup> <a name="uid" id="cdk8s.OwnerReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

UID of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#uids](http://kubernetes.io/docs/user-guide/identifiers#uids)

---

##### `block_owner_deletion`<sup>Optional</sup> <a name="block_owner_deletion" id="cdk8s.OwnerReference.property.blockOwnerDeletion"></a>

```python
block_owner_deletion: bool
```

- *Type:* bool
- *Default:* false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.

If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed.

Defaults to false. To set this field, a user needs "delete"
permission of the owner, otherwise 422 (Unprocessable Entity) will be
returned.

---

##### `controller`<sup>Optional</sup> <a name="controller" id="cdk8s.OwnerReference.property.controller"></a>

```python
controller: bool
```

- *Type:* bool

If true, this reference points to the managing controller.

---

### SizeConversionOptions <a name="SizeConversionOptions" id="cdk8s.SizeConversionOptions"></a>

Options for how to convert size to a different unit.

#### Initializer <a name="Initializer" id="cdk8s.SizeConversionOptions.Initializer"></a>

```python
import cdk8s

cdk8s.SizeConversionOptions(
  rounding: SizeRoundingBehavior = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.SizeConversionOptions.property.rounding">rounding</a></code> | <code><a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a></code> | How conversions should behave when it encounters a non-integer result. |

---

##### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.SizeConversionOptions.property.rounding"></a>

```python
rounding: SizeRoundingBehavior
```

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

---

### TimeConversionOptions <a name="TimeConversionOptions" id="cdk8s.TimeConversionOptions"></a>

Options for how to convert time to a different unit.

#### Initializer <a name="Initializer" id="cdk8s.TimeConversionOptions.Initializer"></a>

```python
import cdk8s

cdk8s.TimeConversionOptions(
  integral: bool = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.TimeConversionOptions.property.integral">integral</a></code> | <code>bool</code> | If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer. |

---

##### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.TimeConversionOptions.property.integral"></a>

```python
integral: bool
```

- *Type:* bool
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiObjectMetadataDefinition <a name="ApiObjectMetadataDefinition" id="cdk8s.ApiObjectMetadataDefinition"></a>

Object metadata.

#### Initializers <a name="Initializers" id="cdk8s.ApiObjectMetadataDefinition.Initializer"></a>

```python
import cdk8s

cdk8s.ApiObjectMetadataDefinition(
  annotations: typing.Mapping[str] = None,
  finalizers: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None,
  owner_references: typing.List[OwnerReference] = None,
  api_object: ApiObject
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.finalizers">finalizers</a></code> | <code>typing.List[str]</code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.ownerReferences">owner_references</a></code> | <code>typing.List[<a href="#cdk8s.OwnerReference">OwnerReference</a>]</code> | List of objects depended by this object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.apiObject">api_object</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject instance is the metadata attached to. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.finalizers"></a>

- *Type:* typing.List[str]
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

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.name"></a>

- *Type:* str
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

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.namespace"></a>

- *Type:* str
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `owner_references`<sup>Optional</sup> <a name="owner_references" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.ownerReferences"></a>

- *Type:* typing.List[<a href="#cdk8s.OwnerReference">OwnerReference</a>]
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

##### `api_object`<sup>Required</sup> <a name="api_object" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.apiObject"></a>

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject instance is the metadata attached to.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.add">add</a></code> | Adds an arbitrary key/value to the object metadata. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addAnnotation">add_annotation</a></code> | Add an annotation. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addFinalizers">add_finalizers</a></code> | Add one or more finalizers. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addLabel">add_label</a></code> | Add a label. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.addOwnerReference">add_owner_reference</a></code> | Add an owner. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.getLabel">get_label</a></code> | *No description.* |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.toJson">to_json</a></code> | Synthesizes a k8s ObjectMeta for this metadata set. |

---

##### `add` <a name="add" id="cdk8s.ApiObjectMetadataDefinition.add"></a>

```python
def add(
  key: str,
  value: typing.Any
) -> None
```

Adds an arbitrary key/value to the object metadata.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.add.parameter.key"></a>

- *Type:* str

Metadata key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.add.parameter.value"></a>

- *Type:* typing.Any

Metadata value.

---

##### `add_annotation` <a name="add_annotation" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation"></a>

```python
def add_annotation(
  key: str,
  value: str
) -> None
```

Add an annotation.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation.parameter.key"></a>

- *Type:* str

The key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation.parameter.value"></a>

- *Type:* str

The value.

---

##### `add_finalizers` <a name="add_finalizers" id="cdk8s.ApiObjectMetadataDefinition.addFinalizers"></a>

```python
def add_finalizers(
  finalizers: *str
) -> None
```

Add one or more finalizers.

###### `finalizers`<sup>Required</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinition.addFinalizers.parameter.finalizers"></a>

- *Type:* *str

the finalizers.

---

##### `add_label` <a name="add_label" id="cdk8s.ApiObjectMetadataDefinition.addLabel"></a>

```python
def add_label(
  key: str,
  value: str
) -> None
```

Add a label.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.addLabel.parameter.key"></a>

- *Type:* str

The key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.addLabel.parameter.value"></a>

- *Type:* str

The value.

---

##### `add_owner_reference` <a name="add_owner_reference" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference"></a>

```python
def add_owner_reference(
  api_version: str,
  kind: str,
  name: str,
  uid: str,
  block_owner_deletion: bool = None,
  controller: bool = None
) -> None
```

Add an owner.

###### `api_version`<sup>Required</sup> <a name="api_version" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.apiVersion"></a>

- *Type:* str

API version of the referent.

---

###### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.kind"></a>

- *Type:* str

Kind of the referent.

> [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds)

---

###### `name`<sup>Required</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.name"></a>

- *Type:* str

Name of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#names](http://kubernetes.io/docs/user-guide/identifiers#names)

---

###### `uid`<sup>Required</sup> <a name="uid" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.uid"></a>

- *Type:* str

UID of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#uids](http://kubernetes.io/docs/user-guide/identifiers#uids)

---

###### `block_owner_deletion`<sup>Optional</sup> <a name="block_owner_deletion" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.blockOwnerDeletion"></a>

- *Type:* bool
- *Default:* false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.

If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed.

Defaults to false. To set this field, a user needs "delete"
permission of the owner, otherwise 422 (Unprocessable Entity) will be
returned.

---

###### `controller`<sup>Optional</sup> <a name="controller" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.controller"></a>

- *Type:* bool

If true, this reference points to the managing controller.

---

##### `get_label` <a name="get_label" id="cdk8s.ApiObjectMetadataDefinition.getLabel"></a>

```python
def get_label(
  key: str
) -> str
```

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.getLabel.parameter.key"></a>

- *Type:* str

the label.

---

##### `to_json` <a name="to_json" id="cdk8s.ApiObjectMetadataDefinition.toJson"></a>

```python
def to_json() -> typing.Any
```

Synthesizes a k8s ObjectMeta for this metadata set.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.property.name">name</a></code> | <code>str</code> | The name of the API object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.property.namespace">namespace</a></code> | <code>str</code> | The object's namespace. |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ApiObjectMetadataDefinition.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The object's namespace.

---


### Cron <a name="Cron" id="cdk8s.Cron"></a>

Represents a cron schedule.

#### Initializers <a name="Initializers" id="cdk8s.Cron.Initializer"></a>

```python
import cdk8s

cdk8s.Cron(
  day: str = None,
  hour: str = None,
  minute: str = None,
  month: str = None,
  week_day: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Cron.Initializer.parameter.day">day</a></code> | <code>str</code> | The day of the month to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.hour">hour</a></code> | <code>str</code> | The hour to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.minute">minute</a></code> | <code>str</code> | The minute to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.month">month</a></code> | <code>str</code> | The month to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.weekDay">week_day</a></code> | <code>str</code> | The day of the week to run this rule at. |

---

##### `day`<sup>Optional</sup> <a name="day" id="cdk8s.Cron.Initializer.parameter.day"></a>

- *Type:* str
- *Default:* Every day of the month

The day of the month to run this rule at.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="cdk8s.Cron.Initializer.parameter.hour"></a>

- *Type:* str
- *Default:* Every hour

The hour to run this rule at.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="cdk8s.Cron.Initializer.parameter.minute"></a>

- *Type:* str
- *Default:* Every minute

The minute to run this rule at.

---

##### `month`<sup>Optional</sup> <a name="month" id="cdk8s.Cron.Initializer.parameter.month"></a>

- *Type:* str
- *Default:* Every month

The month to run this rule at.

---

##### `week_day`<sup>Optional</sup> <a name="week_day" id="cdk8s.Cron.Initializer.parameter.weekDay"></a>

- *Type:* str
- *Default:* Any day of the week

The day of the week to run this rule at.

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Cron.annually">annually</a></code> | Create a cron schedule which runs first day of January every year. |
| <code><a href="#cdk8s.Cron.daily">daily</a></code> | Create a cron schedule which runs every day at midnight. |
| <code><a href="#cdk8s.Cron.everyMinute">every_minute</a></code> | Create a cron schedule which runs every minute. |
| <code><a href="#cdk8s.Cron.hourly">hourly</a></code> | Create a cron schedule which runs every hour. |
| <code><a href="#cdk8s.Cron.monthly">monthly</a></code> | Create a cron schedule which runs first day of every month. |
| <code><a href="#cdk8s.Cron.schedule">schedule</a></code> | Create a custom cron schedule from a set of cron fields. |
| <code><a href="#cdk8s.Cron.weekly">weekly</a></code> | Create a cron schedule which runs every week on Sunday. |

---

##### `annually` <a name="annually" id="cdk8s.Cron.annually"></a>

```python
import cdk8s

cdk8s.Cron.annually()
```

Create a cron schedule which runs first day of January every year.

##### `daily` <a name="daily" id="cdk8s.Cron.daily"></a>

```python
import cdk8s

cdk8s.Cron.daily()
```

Create a cron schedule which runs every day at midnight.

##### `every_minute` <a name="every_minute" id="cdk8s.Cron.everyMinute"></a>

```python
import cdk8s

cdk8s.Cron.every_minute()
```

Create a cron schedule which runs every minute.

##### `hourly` <a name="hourly" id="cdk8s.Cron.hourly"></a>

```python
import cdk8s

cdk8s.Cron.hourly()
```

Create a cron schedule which runs every hour.

##### `monthly` <a name="monthly" id="cdk8s.Cron.monthly"></a>

```python
import cdk8s

cdk8s.Cron.monthly()
```

Create a cron schedule which runs first day of every month.

##### `schedule` <a name="schedule" id="cdk8s.Cron.schedule"></a>

```python
import cdk8s

cdk8s.Cron.schedule(
  day: str = None,
  hour: str = None,
  minute: str = None,
  month: str = None,
  week_day: str = None
)
```

Create a custom cron schedule from a set of cron fields.

###### `day`<sup>Optional</sup> <a name="day" id="cdk8s.Cron.schedule.parameter.day"></a>

- *Type:* str
- *Default:* Every day of the month

The day of the month to run this rule at.

---

###### `hour`<sup>Optional</sup> <a name="hour" id="cdk8s.Cron.schedule.parameter.hour"></a>

- *Type:* str
- *Default:* Every hour

The hour to run this rule at.

---

###### `minute`<sup>Optional</sup> <a name="minute" id="cdk8s.Cron.schedule.parameter.minute"></a>

- *Type:* str
- *Default:* Every minute

The minute to run this rule at.

---

###### `month`<sup>Optional</sup> <a name="month" id="cdk8s.Cron.schedule.parameter.month"></a>

- *Type:* str
- *Default:* Every month

The month to run this rule at.

---

###### `week_day`<sup>Optional</sup> <a name="week_day" id="cdk8s.Cron.schedule.parameter.weekDay"></a>

- *Type:* str
- *Default:* Any day of the week

The day of the week to run this rule at.

---

##### `weekly` <a name="weekly" id="cdk8s.Cron.weekly"></a>

```python
import cdk8s

cdk8s.Cron.weekly()
```

Create a cron schedule which runs every week on Sunday.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Cron.property.expressionString">expression_string</a></code> | <code>str</code> | Retrieve the expression for this schedule. |

---

##### `expression_string`<sup>Required</sup> <a name="expression_string" id="cdk8s.Cron.property.expressionString"></a>

```python
expression_string: str
```

- *Type:* str

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

```python
import cdk8s

cdk8s.DependencyGraph(
  node: Node
)
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

```python
def topology() -> typing.List[IConstruct]
```

> [Vertex.topology ()](Vertex.topology ())


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyGraph.property.root">root</a></code> | <code><a href="#cdk8s.DependencyVertex">DependencyVertex</a></code> | Returns the root of the graph. |

---

##### `root`<sup>Required</sup> <a name="root" id="cdk8s.DependencyGraph.property.root"></a>

```python
root: DependencyVertex
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

```python
import cdk8s

cdk8s.DependencyVertex(
  value: IConstruct = None
)
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
| <code><a href="#cdk8s.DependencyVertex.addChild">add_child</a></code> | Adds a vertex as a dependency of the current node. |
| <code><a href="#cdk8s.DependencyVertex.topology">topology</a></code> | Returns a topologically sorted array of the constructs in the sub-graph. |

---

##### `add_child` <a name="add_child" id="cdk8s.DependencyVertex.addChild"></a>

```python
def add_child(
  dep: DependencyVertex
) -> None
```

Adds a vertex as a dependency of the current node.

Also updates the parents of `dep`, so that it contains this node as a parent.

This operation will fail in case it creates a cycle in the graph.

###### `dep`<sup>Required</sup> <a name="dep" id="cdk8s.DependencyVertex.addChild.parameter.dep"></a>

- *Type:* <a href="#cdk8s.DependencyVertex">DependencyVertex</a>

The dependency.

---

##### `topology` <a name="topology" id="cdk8s.DependencyVertex.topology"></a>

```python
def topology() -> typing.List[IConstruct]
```

Returns a topologically sorted array of the constructs in the sub-graph.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyVertex.property.inbound">inbound</a></code> | <code>typing.List[<a href="#cdk8s.DependencyVertex">DependencyVertex</a>]</code> | Returns the parents of the vertex (i.e dependants). |
| <code><a href="#cdk8s.DependencyVertex.property.outbound">outbound</a></code> | <code>typing.List[<a href="#cdk8s.DependencyVertex">DependencyVertex</a>]</code> | Returns the children of the vertex (i.e dependencies). |
| <code><a href="#cdk8s.DependencyVertex.property.value">value</a></code> | <code>constructs.IConstruct</code> | Returns the IConstruct this graph vertex represents. |

---

##### `inbound`<sup>Required</sup> <a name="inbound" id="cdk8s.DependencyVertex.property.inbound"></a>

```python
inbound: typing.List[DependencyVertex]
```

- *Type:* typing.List[<a href="#cdk8s.DependencyVertex">DependencyVertex</a>]

Returns the parents of the vertex (i.e dependants).

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="cdk8s.DependencyVertex.property.outbound"></a>

```python
outbound: typing.List[DependencyVertex]
```

- *Type:* typing.List[<a href="#cdk8s.DependencyVertex">DependencyVertex</a>]

Returns the children of the vertex (i.e dependencies).

---

##### `value`<sup>Optional</sup> <a name="value" id="cdk8s.DependencyVertex.property.value"></a>

```python
value: IConstruct
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
| <code><a href="#cdk8s.Duration.toDays">to_days</a></code> | Return the total number of days in this Duration. |
| <code><a href="#cdk8s.Duration.toHours">to_hours</a></code> | Return the total number of hours in this Duration. |
| <code><a href="#cdk8s.Duration.toHumanString">to_human_string</a></code> | Turn this duration into a human-readable string. |
| <code><a href="#cdk8s.Duration.toIsoString">to_iso_string</a></code> | Return an ISO 8601 representation of this period. |
| <code><a href="#cdk8s.Duration.toMilliseconds">to_milliseconds</a></code> | Return the total number of milliseconds in this Duration. |
| <code><a href="#cdk8s.Duration.toMinutes">to_minutes</a></code> | Return the total number of minutes in this Duration. |
| <code><a href="#cdk8s.Duration.toSeconds">to_seconds</a></code> | Return the total number of seconds in this Duration. |
| <code><a href="#cdk8s.Duration.unitLabel">unit_label</a></code> | Return unit of Duration. |

---

##### `to_days` <a name="to_days" id="cdk8s.Duration.toDays"></a>

```python
def to_days(
  integral: bool = None
) -> typing.Union[int, float]
```

Return the total number of days in this Duration.

###### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.Duration.toDays.parameter.integral"></a>

- *Type:* bool
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

##### `to_hours` <a name="to_hours" id="cdk8s.Duration.toHours"></a>

```python
def to_hours(
  integral: bool = None
) -> typing.Union[int, float]
```

Return the total number of hours in this Duration.

###### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.Duration.toHours.parameter.integral"></a>

- *Type:* bool
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

##### `to_human_string` <a name="to_human_string" id="cdk8s.Duration.toHumanString"></a>

```python
def to_human_string() -> str
```

Turn this duration into a human-readable string.

##### `to_iso_string` <a name="to_iso_string" id="cdk8s.Duration.toIsoString"></a>

```python
def to_iso_string() -> str
```

Return an ISO 8601 representation of this period.

> [https://www.iso.org/fr/standard/70907.html](https://www.iso.org/fr/standard/70907.html)

##### `to_milliseconds` <a name="to_milliseconds" id="cdk8s.Duration.toMilliseconds"></a>

```python
def to_milliseconds(
  integral: bool = None
) -> typing.Union[int, float]
```

Return the total number of milliseconds in this Duration.

###### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.Duration.toMilliseconds.parameter.integral"></a>

- *Type:* bool
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

##### `to_minutes` <a name="to_minutes" id="cdk8s.Duration.toMinutes"></a>

```python
def to_minutes(
  integral: bool = None
) -> typing.Union[int, float]
```

Return the total number of minutes in this Duration.

###### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.Duration.toMinutes.parameter.integral"></a>

- *Type:* bool
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

##### `to_seconds` <a name="to_seconds" id="cdk8s.Duration.toSeconds"></a>

```python
def to_seconds(
  integral: bool = None
) -> typing.Union[int, float]
```

Return the total number of seconds in this Duration.

###### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.Duration.toSeconds.parameter.integral"></a>

- *Type:* bool
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

##### `unit_label` <a name="unit_label" id="cdk8s.Duration.unitLabel"></a>

```python
def unit_label() -> str
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

```python
import cdk8s

cdk8s.Duration.days(
  amount: typing.Union[int, float]
)
```

Create a Duration representing an amount of days.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.days.parameter.amount"></a>

- *Type:* typing.Union[int, float]

the amount of Days the `Duration` will represent.

---

##### `hours` <a name="hours" id="cdk8s.Duration.hours"></a>

```python
import cdk8s

cdk8s.Duration.hours(
  amount: typing.Union[int, float]
)
```

Create a Duration representing an amount of hours.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.hours.parameter.amount"></a>

- *Type:* typing.Union[int, float]

the amount of Hours the `Duration` will represent.

---

##### `millis` <a name="millis" id="cdk8s.Duration.millis"></a>

```python
import cdk8s

cdk8s.Duration.millis(
  amount: typing.Union[int, float]
)
```

Create a Duration representing an amount of milliseconds.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.millis.parameter.amount"></a>

- *Type:* typing.Union[int, float]

the amount of Milliseconds the `Duration` will represent.

---

##### `minutes` <a name="minutes" id="cdk8s.Duration.minutes"></a>

```python
import cdk8s

cdk8s.Duration.minutes(
  amount: typing.Union[int, float]
)
```

Create a Duration representing an amount of minutes.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.minutes.parameter.amount"></a>

- *Type:* typing.Union[int, float]

the amount of Minutes the `Duration` will represent.

---

##### `parse` <a name="parse" id="cdk8s.Duration.parse"></a>

```python
import cdk8s

cdk8s.Duration.parse(
  duration: str
)
```

Parse a period formatted according to the ISO 8601 standard.

> [https://www.iso.org/fr/standard/70907.html](https://www.iso.org/fr/standard/70907.html)

###### `duration`<sup>Required</sup> <a name="duration" id="cdk8s.Duration.parse.parameter.duration"></a>

- *Type:* str

an ISO-formtted duration to be parsed.

---

##### `seconds` <a name="seconds" id="cdk8s.Duration.seconds"></a>

```python
import cdk8s

cdk8s.Duration.seconds(
  amount: typing.Union[int, float]
)
```

Create a Duration representing an amount of seconds.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.seconds.parameter.amount"></a>

- *Type:* typing.Union[int, float]

the amount of Seconds the `Duration` will represent.

---



### ImplicitTokenResolver <a name="ImplicitTokenResolver" id="cdk8s.ImplicitTokenResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolves implicit tokens.

#### Initializers <a name="Initializers" id="cdk8s.ImplicitTokenResolver.Initializer"></a>

```python
import cdk8s

cdk8s.ImplicitTokenResolver()
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

```python
def resolve(
  context: ResolutionContext
) -> None
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

```python
# Example automatically generated from non-compiling source. May contain errors.
output = JsonPatch.apply(input,
    JsonPatch.replace("/world/hi/there", "goodbye"),
    JsonPatch.add("/world/foo/", "boom"),
    JsonPatch.remove("/hello"))
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

```python
import cdk8s

cdk8s.JsonPatch.add(
  path: str,
  value: typing.Any
)
```

Adds a value to an object or inserts it into an array.

In the case of an
array, the value is inserted before the given index. The - character can be
used instead of an index to insert at the end of an array.

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
JsonPatch.add("/biscuits/1", name="Ginger Nut")
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.add.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.add.parameter.value"></a>

- *Type:* typing.Any

---

##### `apply` <a name="apply" id="cdk8s.JsonPatch.apply"></a>

```python
import cdk8s

cdk8s.JsonPatch.apply(
  document: typing.Any,
  ops: *JsonPatch
)
```

Applies a set of JSON-Patch (RFC-6902) operations to `document` and returns the result.

###### `document`<sup>Required</sup> <a name="document" id="cdk8s.JsonPatch.apply.parameter.document"></a>

- *Type:* typing.Any

The document to patch.

---

###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s.JsonPatch.apply.parameter.ops"></a>

- *Type:* *<a href="#cdk8s.JsonPatch">JsonPatch</a>

The operations to apply.

---

##### `copy` <a name="copy" id="cdk8s.JsonPatch.copy"></a>

```python
import cdk8s

cdk8s.JsonPatch.copy(
  from: str,
  path: str
)
```

Copies a value from one location to another within the JSON document.

Both
from and path are JSON Pointers.

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
JsonPatch.copy("/biscuits/0", "/best_biscuit")
```


###### `from`<sup>Required</sup> <a name="from" id="cdk8s.JsonPatch.copy.parameter.from"></a>

- *Type:* str

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.copy.parameter.path"></a>

- *Type:* str

---

##### `move` <a name="move" id="cdk8s.JsonPatch.move"></a>

```python
import cdk8s

cdk8s.JsonPatch.move(
  from: str,
  path: str
)
```

Moves a value from one location to the other.

Both from and path are JSON Pointers.

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
JsonPatch.move("/biscuits", "/cookies")
```


###### `from`<sup>Required</sup> <a name="from" id="cdk8s.JsonPatch.move.parameter.from"></a>

- *Type:* str

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.move.parameter.path"></a>

- *Type:* str

---

##### `remove` <a name="remove" id="cdk8s.JsonPatch.remove"></a>

```python
import cdk8s

cdk8s.JsonPatch.remove(
  path: str
)
```

Removes a value from an object or array.

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
JsonPatch.remove("/biscuits/0")
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.remove.parameter.path"></a>

- *Type:* str

---

##### `replace` <a name="replace" id="cdk8s.JsonPatch.replace"></a>

```python
import cdk8s

cdk8s.JsonPatch.replace(
  path: str,
  value: typing.Any
)
```

Replaces a value.

Equivalent to a “remove” followed by an “add”.

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
JsonPatch.replace("/biscuits/0/name", "Chocolate Digestive")
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.replace.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.replace.parameter.value"></a>

- *Type:* typing.Any

---

##### `test` <a name="test" id="cdk8s.JsonPatch.test"></a>

```python
import cdk8s

cdk8s.JsonPatch.test(
  path: str,
  value: typing.Any
)
```

Tests that the specified value is set in the document.

If the test fails,
then the patch as a whole should not apply.

*Example*

```python
# Example automatically generated from non-compiling source. May contain errors.
JsonPatch.test("/best_biscuit/name", "Choco Leibniz")
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.test.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.test.parameter.value"></a>

- *Type:* typing.Any

---



### Lazy <a name="Lazy" id="cdk8s.Lazy"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Lazy.produce">produce</a></code> | *No description.* |

---

##### `produce` <a name="produce" id="cdk8s.Lazy.produce"></a>

```python
def produce() -> typing.Any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Lazy.any">any</a></code> | *No description.* |

---

##### `any` <a name="any" id="cdk8s.Lazy.any"></a>

```python
import cdk8s

cdk8s.Lazy.any(
  producer: IAnyProducer
)
```

###### `producer`<sup>Required</sup> <a name="producer" id="cdk8s.Lazy.any.parameter.producer"></a>

- *Type:* <a href="#cdk8s.IAnyProducer">IAnyProducer</a>

---



### LazyResolver <a name="LazyResolver" id="cdk8s.LazyResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolvers instanecs of `Lazy`.

#### Initializers <a name="Initializers" id="cdk8s.LazyResolver.Initializer"></a>

```python
import cdk8s

cdk8s.LazyResolver()
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

```python
def resolve(
  context: ResolutionContext
) -> None
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
| <code><a href="#cdk8s.Names.toDnsLabel">to_dns_label</a></code> | Generates a unique and stable name compatible DNS_LABEL from RFC-1123 from a path. |
| <code><a href="#cdk8s.Names.toLabelValue">to_label_value</a></code> | Generates a unique and stable name compatible label key name segment and label value from a path. |

---

##### `to_dns_label` <a name="to_dns_label" id="cdk8s.Names.toDnsLabel"></a>

```python
import cdk8s

cdk8s.Names.to_dns_label(
  scope: Construct,
  delimiter: str = None,
  extra: typing.List[str] = None,
  include_hash: bool = None,
  max_len: typing.Union[int, float] = None
)
```

Generates a unique and stable name compatible DNS_LABEL from RFC-1123 from a path.

The generated name will:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or ‘-’
* start with an alphanumeric character
* end with an alphanumeric character

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

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="cdk8s.Names.toDnsLabel.parameter.delimiter"></a>

- *Type:* str
- *Default:* "-"

Delimiter to use between components.

---

###### `extra`<sup>Optional</sup> <a name="extra" id="cdk8s.Names.toDnsLabel.parameter.extra"></a>

- *Type:* typing.List[str]
- *Default:* [] use the construct path components

Extra components to include in the name.

---

###### `include_hash`<sup>Optional</sup> <a name="include_hash" id="cdk8s.Names.toDnsLabel.parameter.includeHash"></a>

- *Type:* bool
- *Default:* true

Include a short hash as last part of the name.

---

###### `max_len`<sup>Optional</sup> <a name="max_len" id="cdk8s.Names.toDnsLabel.parameter.maxLen"></a>

- *Type:* typing.Union[int, float]
- *Default:* 63

Maximum allowed length for the name.

---

##### `to_label_value` <a name="to_label_value" id="cdk8s.Names.toLabelValue"></a>

```python
import cdk8s

cdk8s.Names.to_label_value(
  scope: Construct,
  delimiter: str = None,
  extra: typing.List[str] = None,
  include_hash: bool = None,
  max_len: typing.Union[int, float] = None
)
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

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="cdk8s.Names.toLabelValue.parameter.delimiter"></a>

- *Type:* str
- *Default:* "-"

Delimiter to use between components.

---

###### `extra`<sup>Optional</sup> <a name="extra" id="cdk8s.Names.toLabelValue.parameter.extra"></a>

- *Type:* typing.List[str]
- *Default:* [] use the construct path components

Extra components to include in the name.

---

###### `include_hash`<sup>Optional</sup> <a name="include_hash" id="cdk8s.Names.toLabelValue.parameter.includeHash"></a>

- *Type:* bool
- *Default:* true

Include a short hash as last part of the name.

---

###### `max_len`<sup>Optional</sup> <a name="max_len" id="cdk8s.Names.toLabelValue.parameter.maxLen"></a>

- *Type:* typing.Union[int, float]
- *Default:* 63

Maximum allowed length for the name.

---



### NumberStringUnionResolver <a name="NumberStringUnionResolver" id="cdk8s.NumberStringUnionResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolves union types that allow using either number or string (as generated by the CLI).

E.g IntOrString, Quantity, ...

#### Initializers <a name="Initializers" id="cdk8s.NumberStringUnionResolver.Initializer"></a>

```python
import cdk8s

cdk8s.NumberStringUnionResolver()
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

```python
def resolve(
  context: ResolutionContext
) -> None
```

This function is invoked on every property during cdk8s synthesis.

To replace a value, implementations must invoke `context.replaceValue`.

###### `context`<sup>Required</sup> <a name="context" id="cdk8s.NumberStringUnionResolver.resolve.parameter.context"></a>

- *Type:* <a href="#cdk8s.ResolutionContext">ResolutionContext</a>

---




### ResolutionContext <a name="ResolutionContext" id="cdk8s.ResolutionContext"></a>

Context object for a specific resolution process.

#### Initializers <a name="Initializers" id="cdk8s.ResolutionContext.Initializer"></a>

```python
import cdk8s

cdk8s.ResolutionContext(
  obj: ApiObject,
  key: typing.List[str],
  value: typing.Any
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.obj">obj</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.key">key</a></code> | <code>typing.List[str]</code> | Which key is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.value">value</a></code> | <code>typing.Any</code> | The value associated to the key currently being resolved. |

---

##### `obj`<sup>Required</sup> <a name="obj" id="cdk8s.ResolutionContext.Initializer.parameter.obj"></a>

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject is currently being resolved.

---

##### `key`<sup>Required</sup> <a name="key" id="cdk8s.ResolutionContext.Initializer.parameter.key"></a>

- *Type:* typing.List[str]

Which key is currently being resolved.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s.ResolutionContext.Initializer.parameter.value"></a>

- *Type:* typing.Any

The value associated to the key currently being resolved.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ResolutionContext.replaceValue">replace_value</a></code> | Replaces the original value in this resolution context with a new value. |

---

##### `replace_value` <a name="replace_value" id="cdk8s.ResolutionContext.replaceValue"></a>

```python
def replace_value(
  new_value: typing.Any
) -> None
```

Replaces the original value in this resolution context with a new value.

The new value is what will end up in the manifest.

###### `new_value`<sup>Required</sup> <a name="new_value" id="cdk8s.ResolutionContext.replaceValue.parameter.newValue"></a>

- *Type:* typing.Any

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ResolutionContext.property.key">key</a></code> | <code>typing.List[str]</code> | Which key is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.obj">obj</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.value">value</a></code> | <code>typing.Any</code> | The value associated to the key currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.replaced">replaced</a></code> | <code>bool</code> | Whether or not the value was replaced by invoking the `replaceValue` method. |
| <code><a href="#cdk8s.ResolutionContext.property.replacedValue">replaced_value</a></code> | <code>typing.Any</code> | The replaced value that was set via the `replaceValue` method. |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk8s.ResolutionContext.property.key"></a>

```python
key: typing.List[str]
```

- *Type:* typing.List[str]

Which key is currently being resolved.

---

##### `obj`<sup>Required</sup> <a name="obj" id="cdk8s.ResolutionContext.property.obj"></a>

```python
obj: ApiObject
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject is currently being resolved.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s.ResolutionContext.property.value"></a>

```python
value: typing.Any
```

- *Type:* typing.Any

The value associated to the key currently being resolved.

---

##### `replaced`<sup>Required</sup> <a name="replaced" id="cdk8s.ResolutionContext.property.replaced"></a>

```python
replaced: bool
```

- *Type:* bool

Whether or not the value was replaced by invoking the `replaceValue` method.

---

##### `replaced_value`<sup>Required</sup> <a name="replaced_value" id="cdk8s.ResolutionContext.property.replacedValue"></a>

```python
replaced_value: typing.Any
```

- *Type:* typing.Any

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
| <code><a href="#cdk8s.Size.asString">as_string</a></code> | Returns amount with abbreviated storage unit. |
| <code><a href="#cdk8s.Size.toGibibytes">to_gibibytes</a></code> | Return this storage as a total number of gibibytes. |
| <code><a href="#cdk8s.Size.toKibibytes">to_kibibytes</a></code> | Return this storage as a total number of kibibytes. |
| <code><a href="#cdk8s.Size.toMebibytes">to_mebibytes</a></code> | Return this storage as a total number of mebibytes. |
| <code><a href="#cdk8s.Size.toPebibytes">to_pebibytes</a></code> | Return this storage as a total number of pebibytes. |
| <code><a href="#cdk8s.Size.toTebibytes">to_tebibytes</a></code> | Return this storage as a total number of tebibytes. |

---

##### `as_string` <a name="as_string" id="cdk8s.Size.asString"></a>

```python
def as_string() -> str
```

Returns amount with abbreviated storage unit.

##### `to_gibibytes` <a name="to_gibibytes" id="cdk8s.Size.toGibibytes"></a>

```python
def to_gibibytes(
  rounding: SizeRoundingBehavior = None
) -> typing.Union[int, float]
```

Return this storage as a total number of gibibytes.

###### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.Size.toGibibytes.parameter.rounding"></a>

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

---

##### `to_kibibytes` <a name="to_kibibytes" id="cdk8s.Size.toKibibytes"></a>

```python
def to_kibibytes(
  rounding: SizeRoundingBehavior = None
) -> typing.Union[int, float]
```

Return this storage as a total number of kibibytes.

###### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.Size.toKibibytes.parameter.rounding"></a>

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

---

##### `to_mebibytes` <a name="to_mebibytes" id="cdk8s.Size.toMebibytes"></a>

```python
def to_mebibytes(
  rounding: SizeRoundingBehavior = None
) -> typing.Union[int, float]
```

Return this storage as a total number of mebibytes.

###### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.Size.toMebibytes.parameter.rounding"></a>

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

---

##### `to_pebibytes` <a name="to_pebibytes" id="cdk8s.Size.toPebibytes"></a>

```python
def to_pebibytes(
  rounding: SizeRoundingBehavior = None
) -> typing.Union[int, float]
```

Return this storage as a total number of pebibytes.

###### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.Size.toPebibytes.parameter.rounding"></a>

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

---

##### `to_tebibytes` <a name="to_tebibytes" id="cdk8s.Size.toTebibytes"></a>

```python
def to_tebibytes(
  rounding: SizeRoundingBehavior = None
) -> typing.Union[int, float]
```

Return this storage as a total number of tebibytes.

###### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.Size.toTebibytes.parameter.rounding"></a>

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

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

```python
import cdk8s

cdk8s.Size.gibibytes(
  amount: typing.Union[int, float]
)
```

Create a Storage representing an amount gibibytes.

1 GiB = 1024 MiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.gibibytes.parameter.amount"></a>

- *Type:* typing.Union[int, float]

---

##### `kibibytes` <a name="kibibytes" id="cdk8s.Size.kibibytes"></a>

```python
import cdk8s

cdk8s.Size.kibibytes(
  amount: typing.Union[int, float]
)
```

Create a Storage representing an amount kibibytes.

1 KiB = 1024 bytes

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.kibibytes.parameter.amount"></a>

- *Type:* typing.Union[int, float]

---

##### `mebibytes` <a name="mebibytes" id="cdk8s.Size.mebibytes"></a>

```python
import cdk8s

cdk8s.Size.mebibytes(
  amount: typing.Union[int, float]
)
```

Create a Storage representing an amount mebibytes.

1 MiB = 1024 KiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.mebibytes.parameter.amount"></a>

- *Type:* typing.Union[int, float]

---

##### `pebibyte` <a name="pebibyte" id="cdk8s.Size.pebibyte"></a>

```python
import cdk8s

cdk8s.Size.pebibyte(
  amount: typing.Union[int, float]
)
```

Create a Storage representing an amount pebibytes.

1 PiB = 1024 TiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.pebibyte.parameter.amount"></a>

- *Type:* typing.Union[int, float]

---

##### `tebibytes` <a name="tebibytes" id="cdk8s.Size.tebibytes"></a>

```python
import cdk8s

cdk8s.Size.tebibytes(
  amount: typing.Union[int, float]
)
```

Create a Storage representing an amount tebibytes.

1 TiB = 1024 GiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.tebibytes.parameter.amount"></a>

- *Type:* typing.Union[int, float]

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

```python
import cdk8s

cdk8s.Testing.app(
  outdir: str = None,
  output_file_extension: str = None,
  record_construct_metadata: bool = None,
  resolvers: typing.List[IResolver] = None,
  yaml_output_type: YamlOutputType = None
)
```

Returns an app for testing with the following properties: - Output directory is a temp dir.

###### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk8s.Testing.app.parameter.outdir"></a>

- *Type:* str
- *Default:* CDK8S_OUTDIR if defined, otherwise "dist"

The directory to output Kubernetes manifests.

If you synthesize your application using `cdk8s synth`, you must
also pass this value to the CLI using the `--output` option or
the `output` property in the `cdk8s.yaml` configuration file.
Otherwise, the CLI will not know about the output directory,
and synthesis will fail.

This property is intended for internal and testing use.

---

###### `output_file_extension`<sup>Optional</sup> <a name="output_file_extension" id="cdk8s.Testing.app.parameter.outputFileExtension"></a>

- *Type:* str
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

###### `record_construct_metadata`<sup>Optional</sup> <a name="record_construct_metadata" id="cdk8s.Testing.app.parameter.recordConstructMetadata"></a>

- *Type:* bool
- *Default:* false

When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app.

---

###### `resolvers`<sup>Optional</sup> <a name="resolvers" id="cdk8s.Testing.app.parameter.resolvers"></a>

- *Type:* typing.List[<a href="#cdk8s.IResolver">IResolver</a>]
- *Default:* no resolvers.

A list of resolvers that can be used to replace property values before they are written to the manifest file.

When multiple resolvers are passed,
they are invoked by order in the list, and only the first one that applies
(e.g calls `context.replaceValue`) is invoked.

> [https://cdk8s.io/docs/latest/basics/app/#resolvers](https://cdk8s.io/docs/latest/basics/app/#resolvers)

---

###### `yaml_output_type`<sup>Optional</sup> <a name="yaml_output_type" id="cdk8s.Testing.app.parameter.yamlOutputType"></a>

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---

##### `chart` <a name="chart" id="cdk8s.Testing.chart"></a>

```python
import cdk8s

cdk8s.Testing.chart()
```

##### `synth` <a name="synth" id="cdk8s.Testing.synth"></a>

```python
import cdk8s

cdk8s.Testing.synth(
  chart: Chart
)
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
| <code><a href="#cdk8s.Yaml.formatObjects">format_objects</a></code> | *No description.* |
| <code><a href="#cdk8s.Yaml.load">load</a></code> | Downloads a set of YAML documents (k8s manifest for example) from a URL or a file and returns them as javascript objects. |
| <code><a href="#cdk8s.Yaml.save">save</a></code> | Saves a set of objects as a multi-document YAML file. |
| <code><a href="#cdk8s.Yaml.stringify">stringify</a></code> | Stringify a document (or multiple documents) into YAML. |
| <code><a href="#cdk8s.Yaml.tmp">tmp</a></code> | Saves a set of YAML documents into a temp file (in /tmp). |

---

##### ~~`format_objects`~~ <a name="format_objects" id="cdk8s.Yaml.formatObjects"></a>

```python
import cdk8s

cdk8s.Yaml.format_objects(
  docs: typing.List[typing.Any]
)
```

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.formatObjects.parameter.docs"></a>

- *Type:* typing.List[typing.Any]

---

##### `load` <a name="load" id="cdk8s.Yaml.load"></a>

```python
import cdk8s

cdk8s.Yaml.load(
  url_or_file: str
)
```

Downloads a set of YAML documents (k8s manifest for example) from a URL or a file and returns them as javascript objects.

Empty documents are filtered out.

###### `url_or_file`<sup>Required</sup> <a name="url_or_file" id="cdk8s.Yaml.load.parameter.urlOrFile"></a>

- *Type:* str

a URL of a file path to load from.

---

##### `save` <a name="save" id="cdk8s.Yaml.save"></a>

```python
import cdk8s

cdk8s.Yaml.save(
  file_path: str,
  docs: typing.List[typing.Any]
)
```

Saves a set of objects as a multi-document YAML file.

###### `file_path`<sup>Required</sup> <a name="file_path" id="cdk8s.Yaml.save.parameter.filePath"></a>

- *Type:* str

The output path.

---

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.save.parameter.docs"></a>

- *Type:* typing.List[typing.Any]

The set of objects.

---

##### `stringify` <a name="stringify" id="cdk8s.Yaml.stringify"></a>

```python
import cdk8s

cdk8s.Yaml.stringify(
  docs: *typing.Any
)
```

Stringify a document (or multiple documents) into YAML.

We convert undefined values to null, but ignore any documents that are
undefined.

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.stringify.parameter.docs"></a>

- *Type:* *typing.Any

A set of objects to convert to YAML.

---

##### `tmp` <a name="tmp" id="cdk8s.Yaml.tmp"></a>

```python
import cdk8s

cdk8s.Yaml.tmp(
  docs: typing.List[typing.Any]
)
```

Saves a set of YAML documents into a temp file (in /tmp).

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.tmp.parameter.docs"></a>

- *Type:* typing.List[typing.Any]

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

```python
def produce() -> typing.Any
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

```python
def resolve(
  context: ResolutionContext
) -> None
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

