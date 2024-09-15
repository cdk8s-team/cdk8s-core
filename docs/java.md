# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiObject <a name="ApiObject" id="cdk8s.ApiObject"></a>

#### Initializers <a name="Initializers" id="cdk8s.ApiObject.Initializer"></a>

```java
import org.cdk8s.ApiObject;

ApiObject.Builder.create(Construct scope, java.lang.String id)
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
//  .metadata(ApiObjectMetadata)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | the construct scope. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | namespace. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Resource kind. |
| <code><a href="#cdk8s.ApiObject.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a></code> | Object metadata. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.ApiObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

the construct scope.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.ApiObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

namespace.

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.ApiObject.Initializer.parameter.apiVersion"></a>

- *Type:* java.lang.String

API version.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObject.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

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
| <code><a href="#cdk8s.ApiObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.ApiObject.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s.ApiObject.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s.ApiObject.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s.ApiObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s.ApiObject.addDependency"></a>

```java
public void addDependency(IConstruct... dependencies)
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s.ApiObject.addDependency.parameter.dependencies"></a>

- *Type:* software.constructs.IConstruct...

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s.ApiObject.addJsonPatch"></a>

```java
public void addJsonPatch(JsonPatch... ops)
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
kubePod.addJsonPatch(JsonPatch.replace("/spec/enableServiceLinks", true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s.ApiObject.addJsonPatch.parameter.ops"></a>

- *Type:* <a href="#cdk8s.JsonPatch">JsonPatch</a>...

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s.ApiObject.toJson"></a>

```java
public java.lang.Object toJson()
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

```java
import org.cdk8s.ApiObject;

ApiObject.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.ApiObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s.ApiObject.isApiObject"></a>

```java
import org.cdk8s.ApiObject;

ApiObject.isApiObject(java.lang.Object o)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s.ApiObject.isApiObject.parameter.o"></a>

- *Type:* java.lang.Object

The object to check.

---

##### `of` <a name="of" id="cdk8s.ApiObject.of"></a>

```java
import org.cdk8s.ApiObject;

ApiObject.of(IConstruct c)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` *or* if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.ApiObject.of.parameter.c"></a>

- *Type:* software.constructs.IConstruct

The higher-level construct.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.ApiObject.property.apiGroup">apiGroup</a></code> | <code>java.lang.String</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s.ApiObject.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s.ApiObject.property.chart">chart</a></code> | <code><a href="#cdk8s.Chart">Chart</a></code> | The chart in which this object is defined. |
| <code><a href="#cdk8s.ApiObject.property.kind">kind</a></code> | <code>java.lang.String</code> | The object kind. |
| <code><a href="#cdk8s.ApiObject.property.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadataDefinition">ApiObjectMetadataDefinition</a></code> | Metadata associated with this API object. |
| <code><a href="#cdk8s.ApiObject.property.name">name</a></code> | <code>java.lang.String</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.ApiObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s.ApiObject.property.apiGroup"></a>

```java
public java.lang.String getApiGroup();
```

- *Type:* java.lang.String

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.ApiObject.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.ApiObject.property.chart"></a>

```java
public Chart getChart();
```

- *Type:* <a href="#cdk8s.Chart">Chart</a>

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObject.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s.ApiObject.property.metadata"></a>

```java
public ApiObjectMetadataDefinition getMetadata();
```

- *Type:* <a href="#cdk8s.ApiObjectMetadataDefinition">ApiObjectMetadataDefinition</a>

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s.ApiObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---


### App <a name="App" id="cdk8s.App"></a>

Represents a cdk8s application.

#### Initializers <a name="Initializers" id="cdk8s.App.Initializer"></a>

```java
import org.cdk8s.App;

App.Builder.create()
//  .outdir(java.lang.String)
//  .outputFileExtension(java.lang.String)
//  .recordConstructMetadata(java.lang.Boolean)
//  .resolvers(java.util.List<IResolver>)
//  .yamlOutputType(YamlOutputType)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.App.Initializer.parameter.outdir">outdir</a></code> | <code>java.lang.String</code> | The directory to output Kubernetes manifests. |
| <code><a href="#cdk8s.App.Initializer.parameter.outputFileExtension">outputFileExtension</a></code> | <code>java.lang.String</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.App.Initializer.parameter.recordConstructMetadata">recordConstructMetadata</a></code> | <code>java.lang.Boolean</code> | When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app. |
| <code><a href="#cdk8s.App.Initializer.parameter.resolvers">resolvers</a></code> | <code>java.util.List<<a href="#cdk8s.IResolver">IResolver</a>></code> | A list of resolvers that can be used to replace property values before they are written to the manifest file. |
| <code><a href="#cdk8s.App.Initializer.parameter.yamlOutputType">yamlOutputType</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk8s.App.Initializer.parameter.outdir"></a>

- *Type:* java.lang.String
- *Default:* CDK8S_OUTDIR if defined, otherwise "dist"

The directory to output Kubernetes manifests.

If you synthesize your application using `cdk8s synth`, you must
also pass this value to the CLI using the `--output` option or
the `output` property in the `cdk8s.yaml` configuration file.
Otherwise, the CLI will not know about the output directory,
and synthesis will fail.

This property is intended for internal and testing use.

---

##### `outputFileExtension`<sup>Optional</sup> <a name="outputFileExtension" id="cdk8s.App.Initializer.parameter.outputFileExtension"></a>

- *Type:* java.lang.String
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `recordConstructMetadata`<sup>Optional</sup> <a name="recordConstructMetadata" id="cdk8s.App.Initializer.parameter.recordConstructMetadata"></a>

- *Type:* java.lang.Boolean
- *Default:* false

When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app.

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="cdk8s.App.Initializer.parameter.resolvers"></a>

- *Type:* java.util.List<<a href="#cdk8s.IResolver">IResolver</a>>
- *Default:* no resolvers.

A list of resolvers that can be used to replace property values before they are written to the manifest file.

When multiple resolvers are passed,
they are invoked by order in the list, and only the first one that applies
(e.g calls `context.replaceValue`) is invoked.

> [https://cdk8s.io/docs/latest/basics/app/#resolvers](https://cdk8s.io/docs/latest/basics/app/#resolvers)

---

##### `yamlOutputType`<sup>Optional</sup> <a name="yamlOutputType" id="cdk8s.App.Initializer.parameter.yamlOutputType"></a>

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.App.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s.App.synth">synth</a></code> | Synthesizes all manifests to the output directory. |
| <code><a href="#cdk8s.App.synthYaml">synthYaml</a></code> | Synthesizes the app into a YAML string. |

---

##### `toString` <a name="toString" id="cdk8s.App.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="cdk8s.App.synth"></a>

```java
public void synth()
```

Synthesizes all manifests to the output directory.

##### `synthYaml` <a name="synthYaml" id="cdk8s.App.synthYaml"></a>

```java
public java.lang.String synthYaml()
```

Synthesizes the app into a YAML string.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s.App.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.App.isConstruct"></a>

```java
import org.cdk8s.App;

App.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.App.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `of` <a name="of" id="cdk8s.App.of"></a>

```java
import org.cdk8s.App;

App.of(IConstruct c)
```

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.App.of.parameter.c"></a>

- *Type:* software.constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.App.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.App.property.charts">charts</a></code> | <code>java.util.List<<a href="#cdk8s.Chart">Chart</a>></code> | Returns all the charts in this app, sorted topologically. |
| <code><a href="#cdk8s.App.property.outdir">outdir</a></code> | <code>java.lang.String</code> | The output directory into which manifests will be synthesized. |
| <code><a href="#cdk8s.App.property.outputFileExtension">outputFileExtension</a></code> | <code>java.lang.String</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.App.property.resolvers">resolvers</a></code> | <code>java.util.List<<a href="#cdk8s.IResolver">IResolver</a>></code> | Resolvers used by this app. |
| <code><a href="#cdk8s.App.property.yamlOutputType">yamlOutputType</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.App.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `charts`<sup>Required</sup> <a name="charts" id="cdk8s.App.property.charts"></a>

```java
public java.util.List<Chart> getCharts();
```

- *Type:* java.util.List<<a href="#cdk8s.Chart">Chart</a>>

Returns all the charts in this app, sorted topologically.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdk8s.App.property.outdir"></a>

```java
public java.lang.String getOutdir();
```

- *Type:* java.lang.String

The output directory into which manifests will be synthesized.

---

##### `outputFileExtension`<sup>Required</sup> <a name="outputFileExtension" id="cdk8s.App.property.outputFileExtension"></a>

```java
public java.lang.String getOutputFileExtension();
```

- *Type:* java.lang.String
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="cdk8s.App.property.resolvers"></a>

```java
public java.util.List<IResolver> getResolvers();
```

- *Type:* java.util.List<<a href="#cdk8s.IResolver">IResolver</a>>

Resolvers used by this app.

This includes both custom resolvers
passed by the `resolvers` property, as well as built-in resolvers.

---

##### `yamlOutputType`<sup>Required</sup> <a name="yamlOutputType" id="cdk8s.App.property.yamlOutputType"></a>

```java
public YamlOutputType getYamlOutputType();
```

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---


### Chart <a name="Chart" id="cdk8s.Chart"></a>

#### Initializers <a name="Initializers" id="cdk8s.Chart.Initializer"></a>

```java
import org.cdk8s.Chart;

Chart.Builder.create(Construct scope, java.lang.String id)
//  .disableResourceNameHashes(java.lang.Boolean)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Chart.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Chart.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#cdk8s.Chart.Initializer.parameter.disableResourceNameHashes">disableResourceNameHashes</a></code> | <code>java.lang.Boolean</code> | The autogenerated resource name by default is suffixed with a stable hash of the construct path. |
| <code><a href="#cdk8s.Chart.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to all resources in this chart. |
| <code><a href="#cdk8s.Chart.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The default namespace for all objects defined in this chart (directly or indirectly). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Chart.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Chart.Initializer.parameter.id"></a>

- *Type:* java.lang.String

---

##### `disableResourceNameHashes`<sup>Optional</sup> <a name="disableResourceNameHashes" id="cdk8s.Chart.Initializer.parameter.disableResourceNameHashes"></a>

- *Type:* java.lang.Boolean
- *Default:* false

The autogenerated resource name by default is suffixed with a stable hash of the construct path.

Setting this property to true drops the hash suffix.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.Chart.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* no common labels

Labels to apply to all resources in this chart.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.Chart.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String
- *Default:* no namespace is synthesized (usually this implies "default")

The default namespace for all objects defined in this chart (directly or indirectly).

This namespace will only apply to objects that don't have a
`namespace` explicitly defined for them.

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s.Chart.addDependency"></a>

```java
public void addDependency(IConstruct... dependencies)
```

Create a dependency between this Chart and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s.Chart.addDependency.parameter.dependencies"></a>

- *Type:* software.constructs.IConstruct...

the dependencies to add.

---

##### `generateObjectName` <a name="generateObjectName" id="cdk8s.Chart.generateObjectName"></a>

```java
public java.lang.String generateObjectName(ApiObject apiObject)
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

```java
public java.util.List<java.lang.Object> toJson()
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

```java
import org.cdk8s.Chart;

Chart.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Chart.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isChart` <a name="isChart" id="cdk8s.Chart.isChart"></a>

```java
import org.cdk8s.Chart;

Chart.isChart(java.lang.Object x)
```

Return whether the given object is a Chart.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Chart.isChart.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `of` <a name="of" id="cdk8s.Chart.of"></a>

```java
import org.cdk8s.Chart;

Chart.of(IConstruct c)
```

Finds the chart in which a node is defined.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s.Chart.of.parameter.c"></a>

- *Type:* software.constructs.IConstruct

a construct node.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Chart.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Chart.property.apiObjects">apiObjects</a></code> | <code>java.util.List<<a href="#cdk8s.ApiObject">ApiObject</a>></code> | Returns all the included API objects. |
| <code><a href="#cdk8s.Chart.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels applied to all resources in this chart. |
| <code><a href="#cdk8s.Chart.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The default namespace for all objects in this chart. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Chart.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s.Chart.property.apiObjects"></a>

```java
public java.util.List<ApiObject> getApiObjects();
```

- *Type:* java.util.List<<a href="#cdk8s.ApiObject">ApiObject</a>>

Returns all the included API objects.

---

##### `labels`<sup>Required</sup> <a name="labels" id="cdk8s.Chart.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels applied to all resources in this chart.

This is an immutable copy.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.Chart.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The default namespace for all objects in this chart.

---


### Helm <a name="Helm" id="cdk8s.Helm"></a>

Represents a Helm deployment.

Use this construct to import an existing Helm chart and incorporate it into your constructs.

#### Initializers <a name="Initializers" id="cdk8s.Helm.Initializer"></a>

```java
import org.cdk8s.Helm;

Helm.Builder.create(Construct scope, java.lang.String id)
    .chart(java.lang.String)
//  .helmExecutable(java.lang.String)
//  .helmFlags(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .releaseName(java.lang.String)
//  .repo(java.lang.String)
//  .values(java.util.Map<java.lang.String, java.lang.Object>)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Helm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Helm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#cdk8s.Helm.Initializer.parameter.chart">chart</a></code> | <code>java.lang.String</code> | The chart name to use. It can be a chart from a helm repository or a local directory. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.helmExecutable">helmExecutable</a></code> | <code>java.lang.String</code> | The local helm executable to use in order to create the manifest the chart. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.helmFlags">helmFlags</a></code> | <code>java.util.List<java.lang.String></code> | Additional flags to add to the `helm` execution. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Scope all resources in to a given namespace. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.releaseName">releaseName</a></code> | <code>java.lang.String</code> | The release name. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.repo">repo</a></code> | <code>java.lang.String</code> | Chart repository url where to locate the requested chart. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.values">values</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Values to pass to the chart. |
| <code><a href="#cdk8s.Helm.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Version constraint for the chart version to use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Helm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Helm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.Helm.Initializer.parameter.chart"></a>

- *Type:* java.lang.String

The chart name to use. It can be a chart from a helm repository or a local directory.

This name is passed to `helm template` and has all the relevant semantics.

---

*Example*

```java
"bitnami/redis";
```


##### `helmExecutable`<sup>Optional</sup> <a name="helmExecutable" id="cdk8s.Helm.Initializer.parameter.helmExecutable"></a>

- *Type:* java.lang.String
- *Default:* "helm"

The local helm executable to use in order to create the manifest the chart.

---

##### `helmFlags`<sup>Optional</sup> <a name="helmFlags" id="cdk8s.Helm.Initializer.parameter.helmFlags"></a>

- *Type:* java.util.List<java.lang.String>
- *Default:* []

Additional flags to add to the `helm` execution.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.Helm.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Scope all resources in to a given namespace.

---

##### `releaseName`<sup>Optional</sup> <a name="releaseName" id="cdk8s.Helm.Initializer.parameter.releaseName"></a>

- *Type:* java.lang.String
- *Default:* if unspecified, a name will be allocated based on the construct path

The release name.

> [https://helm.sh/docs/intro/using_helm/#three-big-concepts](https://helm.sh/docs/intro/using_helm/#three-big-concepts)

---

##### `repo`<sup>Optional</sup> <a name="repo" id="cdk8s.Helm.Initializer.parameter.repo"></a>

- *Type:* java.lang.String

Chart repository url where to locate the requested chart.

---

##### `values`<sup>Optional</sup> <a name="values" id="cdk8s.Helm.Initializer.parameter.values"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>
- *Default:* If no values are specified, chart will use the defaults.

Values to pass to the chart.

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk8s.Helm.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Version constraint for the chart version to use.

This constraint can be a specific tag (e.g. 1.1.1)
or it may reference a valid range (e.g. ^2.0.0).
If this is not specified, the latest version is used

This name is passed to `helm template --version` and has all the relevant semantics.

---

*Example*

```java
"^2.0.0";
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Helm.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s.Helm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Helm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.Helm.isConstruct"></a>

```java
import org.cdk8s.Helm;

Helm.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Helm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Helm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Helm.property.apiObjects">apiObjects</a></code> | <code>java.util.List<<a href="#cdk8s.ApiObject">ApiObject</a>></code> | Returns all the included API objects. |
| <code><a href="#cdk8s.Helm.property.releaseName">releaseName</a></code> | <code>java.lang.String</code> | The helm release name. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Helm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s.Helm.property.apiObjects"></a>

```java
public java.util.List<ApiObject> getApiObjects();
```

- *Type:* java.util.List<<a href="#cdk8s.ApiObject">ApiObject</a>>

Returns all the included API objects.

---

##### `releaseName`<sup>Required</sup> <a name="releaseName" id="cdk8s.Helm.property.releaseName"></a>

```java
public java.lang.String getReleaseName();
```

- *Type:* java.lang.String

The helm release name.

---


### Include <a name="Include" id="cdk8s.Include"></a>

Reads a YAML manifest from a file or a URL and defines all resources as API objects within the defined scope.

The names (`metadata.name`) of imported resources will be preserved as-is
from the manifest.

#### Initializers <a name="Initializers" id="cdk8s.Include.Initializer"></a>

```java
import org.cdk8s.Include;

Include.Builder.create(Construct scope, java.lang.String id)
    .url(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Include.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s.Include.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#cdk8s.Include.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Local file path or URL which includes a Kubernetes YAML manifest. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s.Include.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s.Include.Initializer.parameter.id"></a>

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s.Include.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Local file path or URL which includes a Kubernetes YAML manifest.

---

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
mymanifest.getYaml();
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Include.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s.Include.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Include.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s.Include.isConstruct"></a>

```java
import org.cdk8s.Include;

Include.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s.Include.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Include.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s.Include.property.apiObjects">apiObjects</a></code> | <code>java.util.List<<a href="#cdk8s.ApiObject">ApiObject</a>></code> | Returns all the included API objects. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.Include.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s.Include.property.apiObjects"></a>

```java
public java.util.List<ApiObject> getApiObjects();
```

- *Type:* java.util.List<<a href="#cdk8s.ApiObject">ApiObject</a>>

Returns all the included API objects.

---


## Structs <a name="Structs" id="Structs"></a>

### ApiObjectMetadata <a name="ApiObjectMetadata" id="cdk8s.ApiObjectMetadata"></a>

Metadata associated with this object.

#### Initializer <a name="Initializer" id="cdk8s.ApiObjectMetadata.Initializer"></a>

```java
import org.cdk8s.ApiObjectMetadata;

ApiObjectMetadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .finalizers(java.util.List<java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .ownerReferences(java.util.List<OwnerReference>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.finalizers">finalizers</a></code> | <code>java.util.List<java.lang.String></code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.name">name</a></code> | <code>java.lang.String</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadata.property.ownerReferences">ownerReferences</a></code> | <code>java.util.List<<a href="#cdk8s.OwnerReference">OwnerReference</a>></code> | List of objects depended by this object. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadata.property.finalizers"></a>

```java
public java.util.List<java.lang.String> getFinalizers();
```

- *Type:* java.util.List<java.lang.String>
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

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String
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

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `ownerReferences`<sup>Optional</sup> <a name="ownerReferences" id="cdk8s.ApiObjectMetadata.property.ownerReferences"></a>

```java
public java.util.List<OwnerReference> getOwnerReferences();
```

- *Type:* java.util.List<<a href="#cdk8s.OwnerReference">OwnerReference</a>>
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

```java
import org.cdk8s.ApiObjectMetadataDefinitionOptions;

ApiObjectMetadataDefinitionOptions.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .finalizers(java.util.List<java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .ownerReferences(java.util.List<OwnerReference>)
    .apiObject(ApiObject)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.finalizers">finalizers</a></code> | <code>java.util.List<java.lang.String></code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.name">name</a></code> | <code>java.lang.String</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.ownerReferences">ownerReferences</a></code> | <code>java.util.List<<a href="#cdk8s.OwnerReference">OwnerReference</a>></code> | List of objects depended by this object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinitionOptions.property.apiObject">apiObject</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject instance is the metadata attached to. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.finalizers"></a>

```java
public java.util.List<java.lang.String> getFinalizers();
```

- *Type:* java.util.List<java.lang.String>
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

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String
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

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `ownerReferences`<sup>Optional</sup> <a name="ownerReferences" id="cdk8s.ApiObjectMetadataDefinitionOptions.property.ownerReferences"></a>

```java
public java.util.List<OwnerReference> getOwnerReferences();
```

- *Type:* java.util.List<<a href="#cdk8s.OwnerReference">OwnerReference</a>>
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

```java
public ApiObject getApiObject();
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject instance is the metadata attached to.

---

### ApiObjectProps <a name="ApiObjectProps" id="cdk8s.ApiObjectProps"></a>

Options for defining API objects.

#### Initializer <a name="Initializer" id="cdk8s.ApiObjectProps.Initializer"></a>

```java
import org.cdk8s.ApiObjectProps;

ApiObjectProps.builder()
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
//  .metadata(ApiObjectMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectProps.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version. |
| <code><a href="#cdk8s.ApiObjectProps.property.kind">kind</a></code> | <code>java.lang.String</code> | Resource kind. |
| <code><a href="#cdk8s.ApiObjectProps.property.metadata">metadata</a></code> | <code><a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a></code> | Object metadata. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.ApiObjectProps.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.ApiObjectProps.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Resource kind.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s.ApiObjectProps.property.metadata"></a>

```java
public ApiObjectMetadata getMetadata();
```

- *Type:* <a href="#cdk8s.ApiObjectMetadata">ApiObjectMetadata</a>

Object metadata.

If `name` is not specified, an app-unique name will be allocated by the
framework based on the path of the construct within thes construct tree.

---

### AppProps <a name="AppProps" id="cdk8s.AppProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.AppProps.Initializer"></a>

```java
import org.cdk8s.AppProps;

AppProps.builder()
//  .outdir(java.lang.String)
//  .outputFileExtension(java.lang.String)
//  .recordConstructMetadata(java.lang.Boolean)
//  .resolvers(java.util.List<IResolver>)
//  .yamlOutputType(YamlOutputType)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.AppProps.property.outdir">outdir</a></code> | <code>java.lang.String</code> | The directory to output Kubernetes manifests. |
| <code><a href="#cdk8s.AppProps.property.outputFileExtension">outputFileExtension</a></code> | <code>java.lang.String</code> | The file extension to use for rendered YAML files. |
| <code><a href="#cdk8s.AppProps.property.recordConstructMetadata">recordConstructMetadata</a></code> | <code>java.lang.Boolean</code> | When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app. |
| <code><a href="#cdk8s.AppProps.property.resolvers">resolvers</a></code> | <code>java.util.List<<a href="#cdk8s.IResolver">IResolver</a>></code> | A list of resolvers that can be used to replace property values before they are written to the manifest file. |
| <code><a href="#cdk8s.AppProps.property.yamlOutputType">yamlOutputType</a></code> | <code><a href="#cdk8s.YamlOutputType">YamlOutputType</a></code> | How to divide the YAML output into files. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk8s.AppProps.property.outdir"></a>

```java
public java.lang.String getOutdir();
```

- *Type:* java.lang.String
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

```java
public java.lang.String getOutputFileExtension();
```

- *Type:* java.lang.String
- *Default:* .k8s.yaml

The file extension to use for rendered YAML files.

---

##### `recordConstructMetadata`<sup>Optional</sup> <a name="recordConstructMetadata" id="cdk8s.AppProps.property.recordConstructMetadata"></a>

```java
public java.lang.Boolean getRecordConstructMetadata();
```

- *Type:* java.lang.Boolean
- *Default:* false

When set to true, the output directory will contain a `construct-metadata.json` file that holds construct related metadata on every resource in the app.

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="cdk8s.AppProps.property.resolvers"></a>

```java
public java.util.List<IResolver> getResolvers();
```

- *Type:* java.util.List<<a href="#cdk8s.IResolver">IResolver</a>>
- *Default:* no resolvers.

A list of resolvers that can be used to replace property values before they are written to the manifest file.

When multiple resolvers are passed,
they are invoked by order in the list, and only the first one that applies
(e.g calls `context.replaceValue`) is invoked.

> [https://cdk8s.io/docs/latest/basics/app/#resolvers](https://cdk8s.io/docs/latest/basics/app/#resolvers)

---

##### `yamlOutputType`<sup>Optional</sup> <a name="yamlOutputType" id="cdk8s.AppProps.property.yamlOutputType"></a>

```java
public YamlOutputType getYamlOutputType();
```

- *Type:* <a href="#cdk8s.YamlOutputType">YamlOutputType</a>
- *Default:* YamlOutputType.FILE_PER_CHART

How to divide the YAML output into files.

---

### ChartProps <a name="ChartProps" id="cdk8s.ChartProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.ChartProps.Initializer"></a>

```java
import org.cdk8s.ChartProps;

ChartProps.builder()
//  .disableResourceNameHashes(java.lang.Boolean)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ChartProps.property.disableResourceNameHashes">disableResourceNameHashes</a></code> | <code>java.lang.Boolean</code> | The autogenerated resource name by default is suffixed with a stable hash of the construct path. |
| <code><a href="#cdk8s.ChartProps.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to all resources in this chart. |
| <code><a href="#cdk8s.ChartProps.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The default namespace for all objects defined in this chart (directly or indirectly). |

---

##### `disableResourceNameHashes`<sup>Optional</sup> <a name="disableResourceNameHashes" id="cdk8s.ChartProps.property.disableResourceNameHashes"></a>

```java
public java.lang.Boolean getDisableResourceNameHashes();
```

- *Type:* java.lang.Boolean
- *Default:* false

The autogenerated resource name by default is suffixed with a stable hash of the construct path.

Setting this property to true drops the hash suffix.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s.ChartProps.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* no common labels

Labels to apply to all resources in this chart.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ChartProps.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String
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

```java
import org.cdk8s.CronOptions;

CronOptions.builder()
//  .day(java.lang.String)
//  .hour(java.lang.String)
//  .minute(java.lang.String)
//  .month(java.lang.String)
//  .weekDay(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.CronOptions.property.day">day</a></code> | <code>java.lang.String</code> | The day of the month to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.hour">hour</a></code> | <code>java.lang.String</code> | The hour to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.minute">minute</a></code> | <code>java.lang.String</code> | The minute to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.month">month</a></code> | <code>java.lang.String</code> | The month to run this rule at. |
| <code><a href="#cdk8s.CronOptions.property.weekDay">weekDay</a></code> | <code>java.lang.String</code> | The day of the week to run this rule at. |

---

##### `day`<sup>Optional</sup> <a name="day" id="cdk8s.CronOptions.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String
- *Default:* Every day of the month

The day of the month to run this rule at.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="cdk8s.CronOptions.property.hour"></a>

```java
public java.lang.String getHour();
```

- *Type:* java.lang.String
- *Default:* Every hour

The hour to run this rule at.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="cdk8s.CronOptions.property.minute"></a>

```java
public java.lang.String getMinute();
```

- *Type:* java.lang.String
- *Default:* Every minute

The minute to run this rule at.

---

##### `month`<sup>Optional</sup> <a name="month" id="cdk8s.CronOptions.property.month"></a>

```java
public java.lang.String getMonth();
```

- *Type:* java.lang.String
- *Default:* Every month

The month to run this rule at.

---

##### `weekDay`<sup>Optional</sup> <a name="weekDay" id="cdk8s.CronOptions.property.weekDay"></a>

```java
public java.lang.String getWeekDay();
```

- *Type:* java.lang.String
- *Default:* Any day of the week

The day of the week to run this rule at.

---

### GroupVersionKind <a name="GroupVersionKind" id="cdk8s.GroupVersionKind"></a>

#### Initializer <a name="Initializer" id="cdk8s.GroupVersionKind.Initializer"></a>

```java
import org.cdk8s.GroupVersionKind;

GroupVersionKind.builder()
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.GroupVersionKind.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s.GroupVersionKind.property.kind">kind</a></code> | <code>java.lang.String</code> | The object kind. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.GroupVersionKind.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.GroupVersionKind.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The object kind.

---

### HelmProps <a name="HelmProps" id="cdk8s.HelmProps"></a>

Options for `Helm`.

#### Initializer <a name="Initializer" id="cdk8s.HelmProps.Initializer"></a>

```java
import org.cdk8s.HelmProps;

HelmProps.builder()
    .chart(java.lang.String)
//  .helmExecutable(java.lang.String)
//  .helmFlags(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .releaseName(java.lang.String)
//  .repo(java.lang.String)
//  .values(java.util.Map<java.lang.String, java.lang.Object>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.HelmProps.property.chart">chart</a></code> | <code>java.lang.String</code> | The chart name to use. It can be a chart from a helm repository or a local directory. |
| <code><a href="#cdk8s.HelmProps.property.helmExecutable">helmExecutable</a></code> | <code>java.lang.String</code> | The local helm executable to use in order to create the manifest the chart. |
| <code><a href="#cdk8s.HelmProps.property.helmFlags">helmFlags</a></code> | <code>java.util.List<java.lang.String></code> | Additional flags to add to the `helm` execution. |
| <code><a href="#cdk8s.HelmProps.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Scope all resources in to a given namespace. |
| <code><a href="#cdk8s.HelmProps.property.releaseName">releaseName</a></code> | <code>java.lang.String</code> | The release name. |
| <code><a href="#cdk8s.HelmProps.property.repo">repo</a></code> | <code>java.lang.String</code> | Chart repository url where to locate the requested chart. |
| <code><a href="#cdk8s.HelmProps.property.values">values</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Values to pass to the chart. |
| <code><a href="#cdk8s.HelmProps.property.version">version</a></code> | <code>java.lang.String</code> | Version constraint for the chart version to use. |

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s.HelmProps.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

The chart name to use. It can be a chart from a helm repository or a local directory.

This name is passed to `helm template` and has all the relevant semantics.

---

*Example*

```java
"bitnami/redis";
```


##### `helmExecutable`<sup>Optional</sup> <a name="helmExecutable" id="cdk8s.HelmProps.property.helmExecutable"></a>

```java
public java.lang.String getHelmExecutable();
```

- *Type:* java.lang.String
- *Default:* "helm"

The local helm executable to use in order to create the manifest the chart.

---

##### `helmFlags`<sup>Optional</sup> <a name="helmFlags" id="cdk8s.HelmProps.property.helmFlags"></a>

```java
public java.util.List<java.lang.String> getHelmFlags();
```

- *Type:* java.util.List<java.lang.String>
- *Default:* []

Additional flags to add to the `helm` execution.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.HelmProps.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Scope all resources in to a given namespace.

---

##### `releaseName`<sup>Optional</sup> <a name="releaseName" id="cdk8s.HelmProps.property.releaseName"></a>

```java
public java.lang.String getReleaseName();
```

- *Type:* java.lang.String
- *Default:* if unspecified, a name will be allocated based on the construct path

The release name.

> [https://helm.sh/docs/intro/using_helm/#three-big-concepts](https://helm.sh/docs/intro/using_helm/#three-big-concepts)

---

##### `repo`<sup>Optional</sup> <a name="repo" id="cdk8s.HelmProps.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Chart repository url where to locate the requested chart.

---

##### `values`<sup>Optional</sup> <a name="values" id="cdk8s.HelmProps.property.values"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>
- *Default:* If no values are specified, chart will use the defaults.

Values to pass to the chart.

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk8s.HelmProps.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version constraint for the chart version to use.

This constraint can be a specific tag (e.g. 1.1.1)
or it may reference a valid range (e.g. ^2.0.0).
If this is not specified, the latest version is used

This name is passed to `helm template --version` and has all the relevant semantics.

---

*Example*

```java
"^2.0.0";
```


### IncludeProps <a name="IncludeProps" id="cdk8s.IncludeProps"></a>

#### Initializer <a name="Initializer" id="cdk8s.IncludeProps.Initializer"></a>

```java
import org.cdk8s.IncludeProps;

IncludeProps.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.IncludeProps.property.url">url</a></code> | <code>java.lang.String</code> | Local file path or URL which includes a Kubernetes YAML manifest. |

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s.IncludeProps.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Local file path or URL which includes a Kubernetes YAML manifest.

---

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
mymanifest.getYaml();
```


### NameOptions <a name="NameOptions" id="cdk8s.NameOptions"></a>

Options for name generation.

#### Initializer <a name="Initializer" id="cdk8s.NameOptions.Initializer"></a>

```java
import org.cdk8s.NameOptions;

NameOptions.builder()
//  .delimiter(java.lang.String)
//  .extra(java.util.List<java.lang.String>)
//  .includeHash(java.lang.Boolean)
//  .maxLen(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.NameOptions.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Delimiter to use between components. |
| <code><a href="#cdk8s.NameOptions.property.extra">extra</a></code> | <code>java.util.List<java.lang.String></code> | Extra components to include in the name. |
| <code><a href="#cdk8s.NameOptions.property.includeHash">includeHash</a></code> | <code>java.lang.Boolean</code> | Include a short hash as last part of the name. |
| <code><a href="#cdk8s.NameOptions.property.maxLen">maxLen</a></code> | <code>java.lang.Number</code> | Maximum allowed length for the name. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="cdk8s.NameOptions.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String
- *Default:* "-"

Delimiter to use between components.

---

##### `extra`<sup>Optional</sup> <a name="extra" id="cdk8s.NameOptions.property.extra"></a>

```java
public java.util.List<java.lang.String> getExtra();
```

- *Type:* java.util.List<java.lang.String>
- *Default:* [] use the construct path components

Extra components to include in the name.

---

##### `includeHash`<sup>Optional</sup> <a name="includeHash" id="cdk8s.NameOptions.property.includeHash"></a>

```java
public java.lang.Boolean getIncludeHash();
```

- *Type:* java.lang.Boolean
- *Default:* true

Include a short hash as last part of the name.

---

##### `maxLen`<sup>Optional</sup> <a name="maxLen" id="cdk8s.NameOptions.property.maxLen"></a>

```java
public java.lang.Number getMaxLen();
```

- *Type:* java.lang.Number
- *Default:* 63

Maximum allowed length for the name.

---

### OwnerReference <a name="OwnerReference" id="cdk8s.OwnerReference"></a>

OwnerReference contains enough information to let you identify an owning object.

An owning object must be in the same namespace as the dependent, or
be cluster-scoped, so there is no namespace field.

#### Initializer <a name="Initializer" id="cdk8s.OwnerReference.Initializer"></a>

```java
import org.cdk8s.OwnerReference;

OwnerReference.builder()
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
    .name(java.lang.String)
    .uid(java.lang.String)
//  .blockOwnerDeletion(java.lang.Boolean)
//  .controller(java.lang.Boolean)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.OwnerReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.uid">uid</a></code> | <code>java.lang.String</code> | UID of the referent. |
| <code><a href="#cdk8s.OwnerReference.property.blockOwnerDeletion">blockOwnerDeletion</a></code> | <code>java.lang.Boolean</code> | If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. |
| <code><a href="#cdk8s.OwnerReference.property.controller">controller</a></code> | <code>java.lang.Boolean</code> | If true, this reference points to the managing controller. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s.OwnerReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s.OwnerReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent.

> [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds)

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s.OwnerReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#names](http://kubernetes.io/docs/user-guide/identifiers#names)

---

##### `uid`<sup>Required</sup> <a name="uid" id="cdk8s.OwnerReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

UID of the referent.

> [http://kubernetes.io/docs/user-guide/identifiers#uids](http://kubernetes.io/docs/user-guide/identifiers#uids)

---

##### `blockOwnerDeletion`<sup>Optional</sup> <a name="blockOwnerDeletion" id="cdk8s.OwnerReference.property.blockOwnerDeletion"></a>

```java
public java.lang.Boolean getBlockOwnerDeletion();
```

- *Type:* java.lang.Boolean
- *Default:* false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.

If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed.

Defaults to false. To set this field, a user needs "delete"
permission of the owner, otherwise 422 (Unprocessable Entity) will be
returned.

---

##### `controller`<sup>Optional</sup> <a name="controller" id="cdk8s.OwnerReference.property.controller"></a>

```java
public java.lang.Boolean getController();
```

- *Type:* java.lang.Boolean

If true, this reference points to the managing controller.

---

### SizeConversionOptions <a name="SizeConversionOptions" id="cdk8s.SizeConversionOptions"></a>

Options for how to convert size to a different unit.

#### Initializer <a name="Initializer" id="cdk8s.SizeConversionOptions.Initializer"></a>

```java
import org.cdk8s.SizeConversionOptions;

SizeConversionOptions.builder()
//  .rounding(SizeRoundingBehavior)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.SizeConversionOptions.property.rounding">rounding</a></code> | <code><a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a></code> | How conversions should behave when it encounters a non-integer result. |

---

##### `rounding`<sup>Optional</sup> <a name="rounding" id="cdk8s.SizeConversionOptions.property.rounding"></a>

```java
public SizeRoundingBehavior getRounding();
```

- *Type:* <a href="#cdk8s.SizeRoundingBehavior">SizeRoundingBehavior</a>
- *Default:* SizeRoundingBehavior.FAIL

How conversions should behave when it encounters a non-integer result.

---

### TimeConversionOptions <a name="TimeConversionOptions" id="cdk8s.TimeConversionOptions"></a>

Options for how to convert time to a different unit.

#### Initializer <a name="Initializer" id="cdk8s.TimeConversionOptions.Initializer"></a>

```java
import org.cdk8s.TimeConversionOptions;

TimeConversionOptions.builder()
//  .integral(java.lang.Boolean)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.TimeConversionOptions.property.integral">integral</a></code> | <code>java.lang.Boolean</code> | If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer. |

---

##### `integral`<sup>Optional</sup> <a name="integral" id="cdk8s.TimeConversionOptions.property.integral"></a>

```java
public java.lang.Boolean getIntegral();
```

- *Type:* java.lang.Boolean
- *Default:* true

If `true`, conversions into a larger time unit (e.g. `Seconds` to `Minutes`) will fail if the result is not an integer.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiObjectMetadataDefinition <a name="ApiObjectMetadataDefinition" id="cdk8s.ApiObjectMetadataDefinition"></a>

Object metadata.

#### Initializers <a name="Initializers" id="cdk8s.ApiObjectMetadataDefinition.Initializer"></a>

```java
import org.cdk8s.ApiObjectMetadataDefinition;

ApiObjectMetadataDefinition.Builder.create()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .finalizers(java.util.List<java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .ownerReferences(java.util.List<OwnerReference>)
    .apiObject(ApiObject)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.finalizers">finalizers</a></code> | <code>java.util.List<java.lang.String></code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.ownerReferences">ownerReferences</a></code> | <code>java.util.List<<a href="#cdk8s.OwnerReference">OwnerReference</a>></code> | List of objects depended by this object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.apiObject">apiObject</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject instance is the metadata attached to. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.finalizers"></a>

- *Type:* java.util.List<java.lang.String>
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

- *Type:* java.util.Map<java.lang.String, java.lang.String>
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String
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

- *Type:* java.lang.String
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

---

##### `ownerReferences`<sup>Optional</sup> <a name="ownerReferences" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.ownerReferences"></a>

- *Type:* java.util.List<<a href="#cdk8s.OwnerReference">OwnerReference</a>>
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

##### `apiObject`<sup>Required</sup> <a name="apiObject" id="cdk8s.ApiObjectMetadataDefinition.Initializer.parameter.apiObject"></a>

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject instance is the metadata attached to.

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

```java
public void add(java.lang.String key, java.lang.Object value)
```

Adds an arbitrary key/value to the object metadata.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.add.parameter.key"></a>

- *Type:* java.lang.String

Metadata key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.add.parameter.value"></a>

- *Type:* java.lang.Object

Metadata value.

---

##### `addAnnotation` <a name="addAnnotation" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation"></a>

```java
public void addAnnotation(java.lang.String key, java.lang.String value)
```

Add an annotation.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation.parameter.key"></a>

- *Type:* java.lang.String

The key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.addAnnotation.parameter.value"></a>

- *Type:* java.lang.String

The value.

---

##### `addFinalizers` <a name="addFinalizers" id="cdk8s.ApiObjectMetadataDefinition.addFinalizers"></a>

```java
public void addFinalizers(java.lang.String... finalizers)
```

Add one or more finalizers.

###### `finalizers`<sup>Required</sup> <a name="finalizers" id="cdk8s.ApiObjectMetadataDefinition.addFinalizers.parameter.finalizers"></a>

- *Type:* java.lang.String...

the finalizers.

---

##### `addLabel` <a name="addLabel" id="cdk8s.ApiObjectMetadataDefinition.addLabel"></a>

```java
public void addLabel(java.lang.String key, java.lang.String value)
```

Add a label.

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.addLabel.parameter.key"></a>

- *Type:* java.lang.String

The key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.ApiObjectMetadataDefinition.addLabel.parameter.value"></a>

- *Type:* java.lang.String

The value.

---

##### `addOwnerReference` <a name="addOwnerReference" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference"></a>

```java
public void addOwnerReference(OwnerReference owner)
```

Add an owner.

###### `owner`<sup>Required</sup> <a name="owner" id="cdk8s.ApiObjectMetadataDefinition.addOwnerReference.parameter.owner"></a>

- *Type:* <a href="#cdk8s.OwnerReference">OwnerReference</a>

the owner.

---

##### `getLabel` <a name="getLabel" id="cdk8s.ApiObjectMetadataDefinition.getLabel"></a>

```java
public java.lang.String getLabel(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="cdk8s.ApiObjectMetadataDefinition.getLabel.parameter.key"></a>

- *Type:* java.lang.String

the label.

---

##### `toJson` <a name="toJson" id="cdk8s.ApiObjectMetadataDefinition.toJson"></a>

```java
public java.lang.Object toJson()
```

Synthesizes a k8s ObjectMeta for this metadata set.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.property.name">name</a></code> | <code>java.lang.String</code> | The name of the API object. |
| <code><a href="#cdk8s.ApiObjectMetadataDefinition.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The object's namespace. |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s.ApiObjectMetadataDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s.ApiObjectMetadataDefinition.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The object's namespace.

---


### Cron <a name="Cron" id="cdk8s.Cron"></a>

Represents a cron schedule.

#### Initializers <a name="Initializers" id="cdk8s.Cron.Initializer"></a>

```java
import org.cdk8s.Cron;

Cron.Builder.create()
//  .day(java.lang.String)
//  .hour(java.lang.String)
//  .minute(java.lang.String)
//  .month(java.lang.String)
//  .weekDay(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Cron.Initializer.parameter.day">day</a></code> | <code>java.lang.String</code> | The day of the month to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.hour">hour</a></code> | <code>java.lang.String</code> | The hour to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.minute">minute</a></code> | <code>java.lang.String</code> | The minute to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.month">month</a></code> | <code>java.lang.String</code> | The month to run this rule at. |
| <code><a href="#cdk8s.Cron.Initializer.parameter.weekDay">weekDay</a></code> | <code>java.lang.String</code> | The day of the week to run this rule at. |

---

##### `day`<sup>Optional</sup> <a name="day" id="cdk8s.Cron.Initializer.parameter.day"></a>

- *Type:* java.lang.String
- *Default:* Every day of the month

The day of the month to run this rule at.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="cdk8s.Cron.Initializer.parameter.hour"></a>

- *Type:* java.lang.String
- *Default:* Every hour

The hour to run this rule at.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="cdk8s.Cron.Initializer.parameter.minute"></a>

- *Type:* java.lang.String
- *Default:* Every minute

The minute to run this rule at.

---

##### `month`<sup>Optional</sup> <a name="month" id="cdk8s.Cron.Initializer.parameter.month"></a>

- *Type:* java.lang.String
- *Default:* Every month

The month to run this rule at.

---

##### `weekDay`<sup>Optional</sup> <a name="weekDay" id="cdk8s.Cron.Initializer.parameter.weekDay"></a>

- *Type:* java.lang.String
- *Default:* Any day of the week

The day of the week to run this rule at.

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

```java
import org.cdk8s.Cron;

Cron.annually()
```

Create a cron schedule which runs first day of January every year.

##### `daily` <a name="daily" id="cdk8s.Cron.daily"></a>

```java
import org.cdk8s.Cron;

Cron.daily()
```

Create a cron schedule which runs every day at midnight.

##### `everyMinute` <a name="everyMinute" id="cdk8s.Cron.everyMinute"></a>

```java
import org.cdk8s.Cron;

Cron.everyMinute()
```

Create a cron schedule which runs every minute.

##### `hourly` <a name="hourly" id="cdk8s.Cron.hourly"></a>

```java
import org.cdk8s.Cron;

Cron.hourly()
```

Create a cron schedule which runs every hour.

##### `monthly` <a name="monthly" id="cdk8s.Cron.monthly"></a>

```java
import org.cdk8s.Cron;

Cron.monthly()
```

Create a cron schedule which runs first day of every month.

##### `schedule` <a name="schedule" id="cdk8s.Cron.schedule"></a>

```java
import org.cdk8s.Cron;

Cron.schedule(CronOptions options)
```

Create a custom cron schedule from a set of cron fields.

###### `options`<sup>Required</sup> <a name="options" id="cdk8s.Cron.schedule.parameter.options"></a>

- *Type:* <a href="#cdk8s.CronOptions">CronOptions</a>

---

##### `weekly` <a name="weekly" id="cdk8s.Cron.weekly"></a>

```java
import org.cdk8s.Cron;

Cron.weekly()
```

Create a cron schedule which runs every week on Sunday.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.Cron.property.expressionString">expressionString</a></code> | <code>java.lang.String</code> | Retrieve the expression for this schedule. |

---

##### `expressionString`<sup>Required</sup> <a name="expressionString" id="cdk8s.Cron.property.expressionString"></a>

```java
public java.lang.String getExpressionString();
```

- *Type:* java.lang.String

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

```java
import org.cdk8s.DependencyGraph;

new DependencyGraph(Node node);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyGraph.Initializer.parameter.node">node</a></code> | <code>software.constructs.Node</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s.DependencyGraph.Initializer.parameter.node"></a>

- *Type:* software.constructs.Node

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.DependencyGraph.topology">topology</a></code> | *No description.* |

---

##### `topology` <a name="topology" id="cdk8s.DependencyGraph.topology"></a>

```java
public java.util.List<IConstruct> topology()
```

> [Vertex.topology ()](Vertex.topology ())


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyGraph.property.root">root</a></code> | <code><a href="#cdk8s.DependencyVertex">DependencyVertex</a></code> | Returns the root of the graph. |

---

##### `root`<sup>Required</sup> <a name="root" id="cdk8s.DependencyGraph.property.root"></a>

```java
public DependencyVertex getRoot();
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

```java
import org.cdk8s.DependencyVertex;

new DependencyVertex();,new DependencyVertex(IConstruct value);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyVertex.Initializer.parameter.value">value</a></code> | <code>software.constructs.IConstruct</code> | *No description.* |

---

##### `value`<sup>Optional</sup> <a name="value" id="cdk8s.DependencyVertex.Initializer.parameter.value"></a>

- *Type:* software.constructs.IConstruct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.DependencyVertex.addChild">addChild</a></code> | Adds a vertex as a dependency of the current node. |
| <code><a href="#cdk8s.DependencyVertex.topology">topology</a></code> | Returns a topologically sorted array of the constructs in the sub-graph. |

---

##### `addChild` <a name="addChild" id="cdk8s.DependencyVertex.addChild"></a>

```java
public void addChild(DependencyVertex dep)
```

Adds a vertex as a dependency of the current node.

Also updates the parents of `dep`, so that it contains this node as a parent.

This operation will fail in case it creates a cycle in the graph.

###### `dep`<sup>Required</sup> <a name="dep" id="cdk8s.DependencyVertex.addChild.parameter.dep"></a>

- *Type:* <a href="#cdk8s.DependencyVertex">DependencyVertex</a>

The dependency.

---

##### `topology` <a name="topology" id="cdk8s.DependencyVertex.topology"></a>

```java
public java.util.List<IConstruct> topology()
```

Returns a topologically sorted array of the constructs in the sub-graph.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.DependencyVertex.property.inbound">inbound</a></code> | <code>java.util.List<<a href="#cdk8s.DependencyVertex">DependencyVertex</a>></code> | Returns the parents of the vertex (i.e dependants). |
| <code><a href="#cdk8s.DependencyVertex.property.outbound">outbound</a></code> | <code>java.util.List<<a href="#cdk8s.DependencyVertex">DependencyVertex</a>></code> | Returns the children of the vertex (i.e dependencies). |
| <code><a href="#cdk8s.DependencyVertex.property.value">value</a></code> | <code>software.constructs.IConstruct</code> | Returns the IConstruct this graph vertex represents. |

---

##### `inbound`<sup>Required</sup> <a name="inbound" id="cdk8s.DependencyVertex.property.inbound"></a>

```java
public java.util.List<DependencyVertex> getInbound();
```

- *Type:* java.util.List<<a href="#cdk8s.DependencyVertex">DependencyVertex</a>>

Returns the parents of the vertex (i.e dependants).

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="cdk8s.DependencyVertex.property.outbound"></a>

```java
public java.util.List<DependencyVertex> getOutbound();
```

- *Type:* java.util.List<<a href="#cdk8s.DependencyVertex">DependencyVertex</a>>

Returns the children of the vertex (i.e dependencies).

---

##### `value`<sup>Optional</sup> <a name="value" id="cdk8s.DependencyVertex.property.value"></a>

```java
public IConstruct getValue();
```

- *Type:* software.constructs.IConstruct

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

```java
public java.lang.Number toDays()
public java.lang.Number toDays(TimeConversionOptions opts)
```

Return the total number of days in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toDays.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toHours` <a name="toHours" id="cdk8s.Duration.toHours"></a>

```java
public java.lang.Number toHours()
public java.lang.Number toHours(TimeConversionOptions opts)
```

Return the total number of hours in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toHours.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toHumanString` <a name="toHumanString" id="cdk8s.Duration.toHumanString"></a>

```java
public java.lang.String toHumanString()
```

Turn this duration into a human-readable string.

##### `toIsoString` <a name="toIsoString" id="cdk8s.Duration.toIsoString"></a>

```java
public java.lang.String toIsoString()
```

Return an ISO 8601 representation of this period.

> [https://www.iso.org/fr/standard/70907.html](https://www.iso.org/fr/standard/70907.html)

##### `toMilliseconds` <a name="toMilliseconds" id="cdk8s.Duration.toMilliseconds"></a>

```java
public java.lang.Number toMilliseconds()
public java.lang.Number toMilliseconds(TimeConversionOptions opts)
```

Return the total number of milliseconds in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toMilliseconds.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toMinutes` <a name="toMinutes" id="cdk8s.Duration.toMinutes"></a>

```java
public java.lang.Number toMinutes()
public java.lang.Number toMinutes(TimeConversionOptions opts)
```

Return the total number of minutes in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toMinutes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `toSeconds` <a name="toSeconds" id="cdk8s.Duration.toSeconds"></a>

```java
public java.lang.Number toSeconds()
public java.lang.Number toSeconds(TimeConversionOptions opts)
```

Return the total number of seconds in this Duration.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Duration.toSeconds.parameter.opts"></a>

- *Type:* <a href="#cdk8s.TimeConversionOptions">TimeConversionOptions</a>

---

##### `unitLabel` <a name="unitLabel" id="cdk8s.Duration.unitLabel"></a>

```java
public java.lang.String unitLabel()
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

```java
import org.cdk8s.Duration;

Duration.days(java.lang.Number amount)
```

Create a Duration representing an amount of days.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.days.parameter.amount"></a>

- *Type:* java.lang.Number

the amount of Days the `Duration` will represent.

---

##### `hours` <a name="hours" id="cdk8s.Duration.hours"></a>

```java
import org.cdk8s.Duration;

Duration.hours(java.lang.Number amount)
```

Create a Duration representing an amount of hours.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.hours.parameter.amount"></a>

- *Type:* java.lang.Number

the amount of Hours the `Duration` will represent.

---

##### `millis` <a name="millis" id="cdk8s.Duration.millis"></a>

```java
import org.cdk8s.Duration;

Duration.millis(java.lang.Number amount)
```

Create a Duration representing an amount of milliseconds.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.millis.parameter.amount"></a>

- *Type:* java.lang.Number

the amount of Milliseconds the `Duration` will represent.

---

##### `minutes` <a name="minutes" id="cdk8s.Duration.minutes"></a>

```java
import org.cdk8s.Duration;

Duration.minutes(java.lang.Number amount)
```

Create a Duration representing an amount of minutes.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.minutes.parameter.amount"></a>

- *Type:* java.lang.Number

the amount of Minutes the `Duration` will represent.

---

##### `parse` <a name="parse" id="cdk8s.Duration.parse"></a>

```java
import org.cdk8s.Duration;

Duration.parse(java.lang.String duration)
```

Parse a period formatted according to the ISO 8601 standard.

> [https://www.iso.org/fr/standard/70907.html](https://www.iso.org/fr/standard/70907.html)

###### `duration`<sup>Required</sup> <a name="duration" id="cdk8s.Duration.parse.parameter.duration"></a>

- *Type:* java.lang.String

an ISO-formtted duration to be parsed.

---

##### `seconds` <a name="seconds" id="cdk8s.Duration.seconds"></a>

```java
import org.cdk8s.Duration;

Duration.seconds(java.lang.Number amount)
```

Create a Duration representing an amount of seconds.

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Duration.seconds.parameter.amount"></a>

- *Type:* java.lang.Number

the amount of Seconds the `Duration` will represent.

---



### ImplicitTokenResolver <a name="ImplicitTokenResolver" id="cdk8s.ImplicitTokenResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolves implicit tokens.

#### Initializers <a name="Initializers" id="cdk8s.ImplicitTokenResolver.Initializer"></a>

```java
import org.cdk8s.ImplicitTokenResolver;

new ImplicitTokenResolver();
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

```java
public void resolve(ResolutionContext context)
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

```java
// Example automatically generated from non-compiling source. May contain errors.
Object output = JsonPatch.apply(input, JsonPatch.replace("/world/hi/there", "goodbye"), JsonPatch.add("/world/foo/", "boom"), JsonPatch.remove("/hello"));
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

```java
import org.cdk8s.JsonPatch;

JsonPatch.add(java.lang.String path, java.lang.Object value)
```

Adds a value to an object or inserts it into an array.

In the case of an
array, the value is inserted before the given index. The - character can be
used instead of an index to insert at the end of an array.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
JsonPatch.add("/biscuits/1", Map.of("name", "Ginger Nut"));
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.add.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.add.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `apply` <a name="apply" id="cdk8s.JsonPatch.apply"></a>

```java
import org.cdk8s.JsonPatch;

JsonPatch.apply(java.lang.Object document, JsonPatch... ops)
```

Applies a set of JSON-Patch (RFC-6902) operations to `document` and returns the result.

###### `document`<sup>Required</sup> <a name="document" id="cdk8s.JsonPatch.apply.parameter.document"></a>

- *Type:* java.lang.Object

The document to patch.

---

###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s.JsonPatch.apply.parameter.ops"></a>

- *Type:* <a href="#cdk8s.JsonPatch">JsonPatch</a>...

The operations to apply.

---

##### `copy` <a name="copy" id="cdk8s.JsonPatch.copy"></a>

```java
import org.cdk8s.JsonPatch;

JsonPatch.copy(java.lang.String from, java.lang.String path)
```

Copies a value from one location to another within the JSON document.

Both
from and path are JSON Pointers.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
JsonPatch.copy("/biscuits/0", "/best_biscuit");
```


###### `from`<sup>Required</sup> <a name="from" id="cdk8s.JsonPatch.copy.parameter.from"></a>

- *Type:* java.lang.String

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.copy.parameter.path"></a>

- *Type:* java.lang.String

---

##### `move` <a name="move" id="cdk8s.JsonPatch.move"></a>

```java
import org.cdk8s.JsonPatch;

JsonPatch.move(java.lang.String from, java.lang.String path)
```

Moves a value from one location to the other.

Both from and path are JSON Pointers.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
JsonPatch.move("/biscuits", "/cookies");
```


###### `from`<sup>Required</sup> <a name="from" id="cdk8s.JsonPatch.move.parameter.from"></a>

- *Type:* java.lang.String

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.move.parameter.path"></a>

- *Type:* java.lang.String

---

##### `remove` <a name="remove" id="cdk8s.JsonPatch.remove"></a>

```java
import org.cdk8s.JsonPatch;

JsonPatch.remove(java.lang.String path)
```

Removes a value from an object or array.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
JsonPatch.remove("/biscuits/0");
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.remove.parameter.path"></a>

- *Type:* java.lang.String

---

##### `replace` <a name="replace" id="cdk8s.JsonPatch.replace"></a>

```java
import org.cdk8s.JsonPatch;

JsonPatch.replace(java.lang.String path, java.lang.Object value)
```

Replaces a value.

Equivalent to a “remove” followed by an “add”.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
JsonPatch.replace("/biscuits/0/name", "Chocolate Digestive");
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.replace.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.replace.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `test` <a name="test" id="cdk8s.JsonPatch.test"></a>

```java
import org.cdk8s.JsonPatch;

JsonPatch.test(java.lang.String path, java.lang.Object value)
```

Tests that the specified value is set in the document.

If the test fails,
then the patch as a whole should not apply.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
JsonPatch.test("/best_biscuit/name", "Choco Leibniz");
```


###### `path`<sup>Required</sup> <a name="path" id="cdk8s.JsonPatch.test.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="cdk8s.JsonPatch.test.parameter.value"></a>

- *Type:* java.lang.Object

---



### Lazy <a name="Lazy" id="cdk8s.Lazy"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Lazy.produce">produce</a></code> | *No description.* |

---

##### `produce` <a name="produce" id="cdk8s.Lazy.produce"></a>

```java
public java.lang.Object produce()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.Lazy.any">any</a></code> | *No description.* |

---

##### `any` <a name="any" id="cdk8s.Lazy.any"></a>

```java
import org.cdk8s.Lazy;

Lazy.any(IAnyProducer producer)
```

###### `producer`<sup>Required</sup> <a name="producer" id="cdk8s.Lazy.any.parameter.producer"></a>

- *Type:* <a href="#cdk8s.IAnyProducer">IAnyProducer</a>

---



### LazyResolver <a name="LazyResolver" id="cdk8s.LazyResolver"></a>

- *Implements:* <a href="#cdk8s.IResolver">IResolver</a>

Resolvers instanecs of `Lazy`.

#### Initializers <a name="Initializers" id="cdk8s.LazyResolver.Initializer"></a>

```java
import org.cdk8s.LazyResolver;

new LazyResolver();
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

```java
public void resolve(ResolutionContext context)
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

```java
import org.cdk8s.Names;

Names.toDnsLabel(Construct scope),Names.toDnsLabel(Construct scope, NameOptions options)
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

- *Type:* software.constructs.Construct

The construct for which to render the DNS label.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk8s.Names.toDnsLabel.parameter.options"></a>

- *Type:* <a href="#cdk8s.NameOptions">NameOptions</a>

Name options.

---

##### `toLabelValue` <a name="toLabelValue" id="cdk8s.Names.toLabelValue"></a>

```java
import org.cdk8s.Names;

Names.toLabelValue(Construct scope),Names.toLabelValue(Construct scope, NameOptions options)
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

- *Type:* software.constructs.Construct

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

```java
import org.cdk8s.NumberStringUnionResolver;

new NumberStringUnionResolver();
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

```java
public void resolve(ResolutionContext context)
```

This function is invoked on every property during cdk8s synthesis.

To replace a value, implementations must invoke `context.replaceValue`.

###### `context`<sup>Required</sup> <a name="context" id="cdk8s.NumberStringUnionResolver.resolve.parameter.context"></a>

- *Type:* <a href="#cdk8s.ResolutionContext">ResolutionContext</a>

---




### ResolutionContext <a name="ResolutionContext" id="cdk8s.ResolutionContext"></a>

Context object for a specific resolution process.

#### Initializers <a name="Initializers" id="cdk8s.ResolutionContext.Initializer"></a>

```java
import org.cdk8s.ResolutionContext;

new ResolutionContext(ApiObject obj, java.util.List<java.lang.String> key, java.lang.Object value);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.obj">obj</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.key">key</a></code> | <code>java.util.List<java.lang.String></code> | Which key is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.Initializer.parameter.value">value</a></code> | <code>java.lang.Object</code> | The value associated to the key currently being resolved. |

---

##### `obj`<sup>Required</sup> <a name="obj" id="cdk8s.ResolutionContext.Initializer.parameter.obj"></a>

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject is currently being resolved.

---

##### `key`<sup>Required</sup> <a name="key" id="cdk8s.ResolutionContext.Initializer.parameter.key"></a>

- *Type:* java.util.List<java.lang.String>

Which key is currently being resolved.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s.ResolutionContext.Initializer.parameter.value"></a>

- *Type:* java.lang.Object

The value associated to the key currently being resolved.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s.ResolutionContext.replaceValue">replaceValue</a></code> | Replaces the original value in this resolution context with a new value. |

---

##### `replaceValue` <a name="replaceValue" id="cdk8s.ResolutionContext.replaceValue"></a>

```java
public void replaceValue(java.lang.Object newValue)
```

Replaces the original value in this resolution context with a new value.

The new value is what will end up in the manifest.

###### `newValue`<sup>Required</sup> <a name="newValue" id="cdk8s.ResolutionContext.replaceValue.parameter.newValue"></a>

- *Type:* java.lang.Object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s.ResolutionContext.property.key">key</a></code> | <code>java.util.List<java.lang.String></code> | Which key is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.obj">obj</a></code> | <code><a href="#cdk8s.ApiObject">ApiObject</a></code> | Which ApiObject is currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.value">value</a></code> | <code>java.lang.Object</code> | The value associated to the key currently being resolved. |
| <code><a href="#cdk8s.ResolutionContext.property.replaced">replaced</a></code> | <code>java.lang.Boolean</code> | Whether or not the value was replaced by invoking the `replaceValue` method. |
| <code><a href="#cdk8s.ResolutionContext.property.replacedValue">replacedValue</a></code> | <code>java.lang.Object</code> | The replaced value that was set via the `replaceValue` method. |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk8s.ResolutionContext.property.key"></a>

```java
public java.util.List<java.lang.String> getKey();
```

- *Type:* java.util.List<java.lang.String>

Which key is currently being resolved.

---

##### `obj`<sup>Required</sup> <a name="obj" id="cdk8s.ResolutionContext.property.obj"></a>

```java
public ApiObject getObj();
```

- *Type:* <a href="#cdk8s.ApiObject">ApiObject</a>

Which ApiObject is currently being resolved.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s.ResolutionContext.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Object

The value associated to the key currently being resolved.

---

##### `replaced`<sup>Required</sup> <a name="replaced" id="cdk8s.ResolutionContext.property.replaced"></a>

```java
public java.lang.Boolean getReplaced();
```

- *Type:* java.lang.Boolean

Whether or not the value was replaced by invoking the `replaceValue` method.

---

##### `replacedValue`<sup>Required</sup> <a name="replacedValue" id="cdk8s.ResolutionContext.property.replacedValue"></a>

```java
public java.lang.Object getReplacedValue();
```

- *Type:* java.lang.Object

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

```java
public java.lang.String asString()
```

Returns amount with abbreviated storage unit.

##### `toGibibytes` <a name="toGibibytes" id="cdk8s.Size.toGibibytes"></a>

```java
public java.lang.Number toGibibytes()
public java.lang.Number toGibibytes(SizeConversionOptions opts)
```

Return this storage as a total number of gibibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toGibibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toKibibytes` <a name="toKibibytes" id="cdk8s.Size.toKibibytes"></a>

```java
public java.lang.Number toKibibytes()
public java.lang.Number toKibibytes(SizeConversionOptions opts)
```

Return this storage as a total number of kibibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toKibibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toMebibytes` <a name="toMebibytes" id="cdk8s.Size.toMebibytes"></a>

```java
public java.lang.Number toMebibytes()
public java.lang.Number toMebibytes(SizeConversionOptions opts)
```

Return this storage as a total number of mebibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toMebibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toPebibytes` <a name="toPebibytes" id="cdk8s.Size.toPebibytes"></a>

```java
public java.lang.Number toPebibytes()
public java.lang.Number toPebibytes(SizeConversionOptions opts)
```

Return this storage as a total number of pebibytes.

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk8s.Size.toPebibytes.parameter.opts"></a>

- *Type:* <a href="#cdk8s.SizeConversionOptions">SizeConversionOptions</a>

---

##### `toTebibytes` <a name="toTebibytes" id="cdk8s.Size.toTebibytes"></a>

```java
public java.lang.Number toTebibytes()
public java.lang.Number toTebibytes(SizeConversionOptions opts)
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

```java
import org.cdk8s.Size;

Size.gibibytes(java.lang.Number amount)
```

Create a Storage representing an amount gibibytes.

1 GiB = 1024 MiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.gibibytes.parameter.amount"></a>

- *Type:* java.lang.Number

---

##### `kibibytes` <a name="kibibytes" id="cdk8s.Size.kibibytes"></a>

```java
import org.cdk8s.Size;

Size.kibibytes(java.lang.Number amount)
```

Create a Storage representing an amount kibibytes.

1 KiB = 1024 bytes

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.kibibytes.parameter.amount"></a>

- *Type:* java.lang.Number

---

##### `mebibytes` <a name="mebibytes" id="cdk8s.Size.mebibytes"></a>

```java
import org.cdk8s.Size;

Size.mebibytes(java.lang.Number amount)
```

Create a Storage representing an amount mebibytes.

1 MiB = 1024 KiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.mebibytes.parameter.amount"></a>

- *Type:* java.lang.Number

---

##### `pebibyte` <a name="pebibyte" id="cdk8s.Size.pebibyte"></a>

```java
import org.cdk8s.Size;

Size.pebibyte(java.lang.Number amount)
```

Create a Storage representing an amount pebibytes.

1 PiB = 1024 TiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.pebibyte.parameter.amount"></a>

- *Type:* java.lang.Number

---

##### `tebibytes` <a name="tebibytes" id="cdk8s.Size.tebibytes"></a>

```java
import org.cdk8s.Size;

Size.tebibytes(java.lang.Number amount)
```

Create a Storage representing an amount tebibytes.

1 TiB = 1024 GiB

###### `amount`<sup>Required</sup> <a name="amount" id="cdk8s.Size.tebibytes.parameter.amount"></a>

- *Type:* java.lang.Number

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

```java
import org.cdk8s.Testing;

Testing.app(),Testing.app(AppProps props)
```

Returns an app for testing with the following properties: - Output directory is a temp dir.

###### `props`<sup>Optional</sup> <a name="props" id="cdk8s.Testing.app.parameter.props"></a>

- *Type:* <a href="#cdk8s.AppProps">AppProps</a>

---

##### `chart` <a name="chart" id="cdk8s.Testing.chart"></a>

```java
import org.cdk8s.Testing;

Testing.chart()
```

##### `synth` <a name="synth" id="cdk8s.Testing.synth"></a>

```java
import org.cdk8s.Testing;

Testing.synth(Chart chart)
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

```java
import org.cdk8s.Yaml;

Yaml.formatObjects(java.util.List<java.lang.Object> docs)
```

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.formatObjects.parameter.docs"></a>

- *Type:* java.util.List<java.lang.Object>

---

##### `load` <a name="load" id="cdk8s.Yaml.load"></a>

```java
import org.cdk8s.Yaml;

Yaml.load(java.lang.String urlOrFile)
```

Downloads a set of YAML documents (k8s manifest for example) from a URL or a file and returns them as javascript objects.

Empty documents are filtered out.

###### `urlOrFile`<sup>Required</sup> <a name="urlOrFile" id="cdk8s.Yaml.load.parameter.urlOrFile"></a>

- *Type:* java.lang.String

a URL of a file path to load from.

---

##### `save` <a name="save" id="cdk8s.Yaml.save"></a>

```java
import org.cdk8s.Yaml;

Yaml.save(java.lang.String filePath, java.util.List<java.lang.Object> docs)
```

Saves a set of objects as a multi-document YAML file.

###### `filePath`<sup>Required</sup> <a name="filePath" id="cdk8s.Yaml.save.parameter.filePath"></a>

- *Type:* java.lang.String

The output path.

---

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.save.parameter.docs"></a>

- *Type:* java.util.List<java.lang.Object>

The set of objects.

---

##### `stringify` <a name="stringify" id="cdk8s.Yaml.stringify"></a>

```java
import org.cdk8s.Yaml;

Yaml.stringify(java.lang.Object... docs)
```

Stringify a document (or multiple documents) into YAML.

We convert undefined values to null, but ignore any documents that are
undefined.

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.stringify.parameter.docs"></a>

- *Type:* java.lang.Object...

A set of objects to convert to YAML.

---

##### `tmp` <a name="tmp" id="cdk8s.Yaml.tmp"></a>

```java
import org.cdk8s.Yaml;

Yaml.tmp(java.util.List<java.lang.Object> docs)
```

Saves a set of YAML documents into a temp file (in /tmp).

###### `docs`<sup>Required</sup> <a name="docs" id="cdk8s.Yaml.tmp.parameter.docs"></a>

- *Type:* java.util.List<java.lang.Object>

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

```java
public java.lang.Object produce()
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

```java
public void resolve(ResolutionContext context)
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

