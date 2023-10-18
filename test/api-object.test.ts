import { Construct } from 'constructs';
import {
  ApiObject,
  Chart,
  GroupVersionKind,
  IResolver,
  JsonPatch,
  Lazy,
  ResolutionContext,
  Size,
  Testing,
} from '../src';

test('minimal configuration', () => {
  const app = Testing.app();
  const stack = new Chart(app, 'test');

  new ApiObject(stack, 'my-resource', {
    apiVersion: 'v1',
    kind: 'MyResource',
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('printed yaml is alphabetical', () => {
  const app = Testing.app();
  const stack = new Chart(app, 'test');

  // Object keys in random order
  new ApiObject(stack, 'my-resource', {
    kind: 'MyResource',
    spec: {
      secondProperty: {
        innerThirdProperty: '!',
        beforeThirdProperty: 'world',
      },
      firstProperty: 'hello',
    },
    metadata: {
      meta: {
        zzz: 'hello',
        aaa: 123,
      },
    },
    apiVersion: 'v1',
  });

  // Should match alphabetically-ordered snapshot (we snapshot the string
  // because jest snapshots treat dictionaries as unordered)
  expect(JSON.stringify(Testing.synth(stack), undefined, 2)).toMatchSnapshot();
});

test('the CDK8S_DISABLE_SORT environment variable can be used to disable key sorting', () => {
  const obj = new ApiObject(Testing.chart(), 'my-api-object', {
    apiVersion: 'v1',
    kind: 'Dummy',
    hello: {
      zzz: 123,
      aaa: 333,
      nested: {
        yyy: 'hello',
        bbb: 123,
      },
    },
  });

  // default behavior - sorted
  expect(JSON.stringify(obj.toJson())).toStrictEqual(
    '{"apiVersion":"v1","kind":"Dummy","metadata":{"name":"test-my-api-object-c8e6fbed"},"hello":{"aaa":333,"nested":{"bbb":123,"yyy":"hello"},"zzz":123}}',
  );

  // with CDK8S_DISABLE_SORT set at the chart level
  process.env.CDK8S_DISABLE_SORT = '1';
  try {
    expect(JSON.stringify(obj.toJson())).toStrictEqual(
      '{"apiVersion":"v1","kind":"Dummy","metadata":{"name":"test-my-api-object-c8e6fbed"},"hello":{"zzz":123,"aaa":333,"nested":{"yyy":"hello","bbb":123}}}',
    );
  } finally {
    delete process.env.CDK8S_DISABLE_SORT;
  }
});

test('addDependency', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'chart1');

  const obj1 = new ApiObject(chart, 'obj1', {
    apiVersion: 'v1',
    kind: 'Kind1',
  });
  const obj2 = new ApiObject(chart, 'obj2', {
    apiVersion: 'v1',
    kind: 'Kind2',
  });
  const obj3 = new ApiObject(chart, 'obj3', {
    apiVersion: 'v1',
    kind: 'Kind3',
  });

  obj1.addDependency(obj2, obj3);

  const dependencies = obj1.node.dependencies;

  expect(dependencies).toEqual([obj2, obj3]);
});

test('synthesized resource name is based on path', () => {
  // GIVEN
  const app = Testing.app();
  const stack = new Chart(app, 'test');
  new ApiObject(stack, 'my-resource', {
    apiVersion: 'v1',
    kind: 'MyResource',
  });

  // WHEN
  // now create another resource with the same namespace but within a sub-scope
  const scope = new Construct(stack, 'scope');
  new ApiObject(scope, 'my-resource', {
    apiVersion: 'v1',
    kind: 'MyResource',
  });

  // THEN
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('if name is explicitly specified it will be respected', () => {
  // GIVEN
  const app = Testing.app();
  const stack = new Chart(app, 'test');

  // WHEN
  new ApiObject(stack, 'my-resource', {
    kind: 'MyResource',
    apiVersion: 'v1',
    metadata: {
      name: 'boom',
    },
  });

  // THEN
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('"spec" is synthesized as-is', () => {
  // GIVEN
  const app = Testing.app();
  const stack = new Chart(app, 'test');

  // WHEN
  new ApiObject(stack, 'resource', {
    kind: 'ResourceType',
    apiVersion: 'v1',
    spec: {
      prop1: 'hello',
      prop2: {
        world: 123,
      },
    },
  });

  // THEN
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('"data" can be used to specify resource data', () => {
  // GIVEN
  const app = Testing.app();
  const stack = new Chart(app, 'test');

  // WHEN
  new ApiObject(stack, 'resource', {
    kind: 'ResourceType',
    apiVersion: 'v1',
    data: {
      boom: 123,
    },
  });

  // THEN
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('object naming logic can be overridden at the chart level', () => {
  class MyChart extends Chart {
    generateObjectName() {
      return 'fixed!';
    }
  }

  // GIVEN
  const app = Testing.app();
  const chart = new MyChart(app, 'my-chart');

  // WHEN
  const object = new ApiObject(chart, 'my-object', {
    apiVersion: 'v1',
    kind: 'MyKind',
  });

  // THEN
  expect(object.name).toEqual('fixed!');
  expect(Testing.synth(chart)).toStrictEqual([
    {
      apiVersion: 'v1',
      kind: 'MyKind',
      metadata: { name: 'fixed!' },
    },
  ]);
});

test('default namespace can be defined at the chart level', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'chart', { namespace: 'ns1' });
  const group1 = new Construct(chart, 'group1');

  // WHEN
  new ApiObject(group1, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
  new ApiObject(group1, 'obj2', {
    apiVersion: 'v2',
    kind: 'Kind2',
    metadata: { namespace: 'foobar' },
  });

  // THEN
  expect(Testing.synth(chart)).toStrictEqual([
    {
      apiVersion: 'v1',
      kind: 'Kind1',
      metadata: {
        name: 'chart-group1-obj1-c885aeec',
        namespace: 'ns1',
      },
    },
    {
      apiVersion: 'v2',
      kind: 'Kind2',
      metadata: {
        name: 'chart-group1-obj2-c81931d8',
        namespace: 'foobar',
      },
    },
  ]);
});

test('chart labels are applied to all api objects in the chart', () => {
  // GIVEN
  const app = Testing.app();

  // WHEN
  const chart = new Chart(app, 'my-chart', {
    labels: {
      foo: 'ffffffffff',
      bar: 'bbbbbb',
    },
  });

  new ApiObject(chart, 'obj1', { kind: 'Obj1', apiVersion: 'v1' });
  const group = new Construct(chart, 'group');
  new ApiObject(group, 'obj2', {
    kind: 'Obj2',
    apiVersion: 'v2',
    metadata: {
      labels: {
        foo: 'override by object',
        zoo: 'zoo1',
      },
    },
  });

  // THEN
  expect(Testing.synth(chart)).toEqual([
    {
      apiVersion: 'v1',
      kind: 'Obj1',
      metadata: {
        labels: {
          bar: 'bbbbbb',
          foo: 'ffffffffff',
        },
        name: 'my-chart-obj1-c880bc50',
      },
    },
    {
      apiVersion: 'v2',
      kind: 'Obj2',
      metadata: {
        labels: {
          bar: 'bbbbbb',
          foo: 'override by object',
          zoo: 'zoo1',
        },
        name: 'my-chart-group-obj2-c824cfcd',
      },
    },
  ]);
});

describe('ApiObject.of()', () => {
  test('fails if there is no default child', () => {
    // GIVEN
    const chart = Testing.chart();

    // THEN
    expect(() => ApiObject.of(new Construct(chart, 'hello'))).toThrow(
      /cannot find a \(direct or indirect\) child of type ApiObject/,
    );
  });

  test('returns the object if it is an API object', () => {
    // GIVEN
    const chart = Testing.chart();
    const obj = new ApiObject(chart, 'my-obj', {
      apiVersion: 'v1',
      kind: 'Foo',
    });

    // THEN
    expect(ApiObject.of(obj)).toBe(obj);
  });

  test('returns a direct child', () => {
    // GIVEN
    const chart = Testing.chart();
    const parent = new Construct(chart, 'l2');

    // WHEN
    const obj = new ApiObject(parent, 'Default', {
      apiVersion: 'v1',
      kind: 'Foo',
    });

    // THEN
    expect(ApiObject.of(parent)).toBe(obj);
  });

  test('returns an indirect child', () => {
    // GIVEN
    const chart = Testing.chart();
    const parent1 = new Construct(chart, 'l3');

    // WHEN
    const parent2 = new Construct(parent1, 'Default');
    const obj = new ApiObject(parent2, 'Default', {
      apiVersion: 'v1',
      kind: 'Foo',
    });

    // THEN
    expect(ApiObject.of(parent1)).toBe(obj);
  });
});

describe('addJsonPatch()', () => {
  test('applied after the object has been synthesized', () => {
    // GIVEN
    const chart = Testing.chart();
    const obj = new ApiObject(chart, 'obj', {
      kind: 'Obj',
      apiVersion: 'v1',
      spec: {
        foo: 1234,
        bar: {
          baz: [1, 2, 3],
        },
      },
    });

    // WHEN
    obj.addJsonPatch(JsonPatch.add('/spec/bar/baz/3', 4));
    obj.addJsonPatch(JsonPatch.remove('/spec/foo'));
    obj.addJsonPatch(JsonPatch.copy('/apiVersion', '/spec/apiVersion'));

    // THEN
    expect(Testing.synth(chart)).toStrictEqual([
      {
        apiVersion: 'v1',
        kind: 'Obj',
        metadata: {
          name: 'test-obj-c8686f96',
        },
        spec: {
          apiVersion: 'v1',
          bar: {
            baz: [1, 2, 3, 4],
          },
        },
      },
    ]);
  });
});

test('compound resolution', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  const apiObject = new ApiObject(chart, 'resource1', {
    kind: 'Resource1',
    apiVersion: 'v1',
    spec: {
      foo: Lazy.any({ produce: () => createImplictToken(123) }),
    },
  });

  expect(apiObject.toJson()).toMatchInlineSnapshot(`
    Object {
      "apiVersion": "v1",
      "kind": "Resource1",
      "metadata": Object {
        "name": "test-resource1-c85cb0fc",
      },
      "spec": Object {
        "foo": 123,
      },
    }
  `);
});

function createImplictToken(value: any) {
  const implicit = {};
  Object.defineProperty(implicit, 'resolve', { value: () => value });
  return implicit;
}

test('custom resolver', () => {
  class Resolver implements IResolver {
    public resolve(context: ResolutionContext) {
      if (typeof context.value === 'string' && context.value !== 'newValue') {
        context.replaceValue('newValue');
      }
    }
  }

  const resolver = new Resolver();
  const app = Testing.app({ resolvers: [resolver] });
  const chart = new Chart(app, 'Chart');

  const apiObject = new ApiObject(chart, 'ApiObject', {
    kind: 'Service',
    apiVersion: 'v1',
    metadata: {
      foo: 'bar',
    },
    spec: {
      type: 'LoadBalancer',
      someArray: [1, 2],
    },
  });

  expect(apiObject.toJson()).toMatchInlineSnapshot(`
    Object {
      "apiVersion": "newValue",
      "kind": "newValue",
      "metadata": Object {
        "foo": "newValue",
        "name": "newValue",
      },
      "spec": Object {
        "someArray": Array [
          1,
          2,
        ],
        "type": "newValue",
      },
    }
  `);
});

test('multiple custom resolvers', () => {
  class Resolver1 implements IResolver {
    public resolve(context: ResolutionContext) {
      if (context.key.includes('type') && context.value !== 'newValue1') {
        context.replaceValue('newValue1');
      }
    }
  }

  class Resolver2 implements IResolver {
    public resolve(context: ResolutionContext) {
      if (context.key.includes('someArray') && context.value !== 'newValue2') {
        context.replaceValue('newValue2');
      }
    }
  }

  const app = Testing.app({ resolvers: [new Resolver1(), new Resolver2()] });
  const chart = new Chart(app, 'Chart');

  const apiObject = new ApiObject(chart, 'ApiObject', {
    kind: 'Service',
    apiVersion: 'v1',
    metadata: {
      foo: 'bar',
    },
    spec: {
      type: 'LoadBalancer',
      someArray: [1, 2],
    },
  });

  expect(apiObject.toJson()).toMatchInlineSnapshot(`
    Object {
      "apiVersion": "v1",
      "kind": "Service",
      "metadata": Object {
        "foo": "bar",
        "name": "chart-apiobject-c830d7bd",
      },
      "spec": Object {
        "someArray": "newValue2",
        "type": "newValue1",
      },
    }
  `);
});

test('annonymous object custom resolver', () => {
  class Resolver implements IResolver {
    public resolve(context: ResolutionContext) {
      if (typeof context.value.resolver === 'function') {
        context.replaceValue(context.value.resolver());
      }
    }
  }

  const resolvable = {
    resolver() {
      return 'blah';
    },
  };

  const resolver = new Resolver();
  const app = Testing.app({ resolvers: [resolver] });
  const chart = new Chart(app, 'Chart');

  const apiObject = new ApiObject(chart, 'ApiObject', {
    kind: 'Service',
    apiVersion: 'v1',
    metadata: {
      foo: 'bar',
    },
    spec: {
      type: resolvable,
    },
  });

  expect(apiObject.toJson()).toMatchInlineSnapshot(`
    Object {
      "apiVersion": "v1",
      "kind": "Service",
      "metadata": Object {
        "foo": "bar",
        "name": "chart-apiobject-c830d7bd",
      },
      "spec": Object {
        "type": "blah",
      },
    }
  `);
});

test('can resolve L1', () => {
  class IntOrString {
    public static fromString(value: string): IntOrString {
      return new IntOrString(value);
    }
    public static fromNumber(value: number): IntOrString {
      return new IntOrString(value);
    }
    private constructor(public readonly value: string | number) {}
  }

  interface L1Props {
    readonly surge: IntOrString;
  }

  // simulates an L1 as generated via the CLI
  class L1 extends ApiObject {
    static readonly GVK: GroupVersionKind = {
      apiVersion: 'v1',
      kind: 'Kind',
    };

    constructor(scope: Construct, id: string, props: L1Props) {
      super(scope, id, {
        ...L1.GVK,
        spec: {
          surge: props.surge,
        },
      });
    }

    public toJson(): any {
      const resolved = super.toJson();

      return {
        ...L1.GVK,
        metadata: this.metadata.toJson(),
        spec: {
          surge: resolved.spec.surge.value,
        },
      };
    }
  }

  const chart = Testing.chart();

  const apiObject = new L1(chart, 'L1', {
    surge: IntOrString.fromNumber(500),
  });

  expect(apiObject.toJson()).toMatchInlineSnapshot(`
    Object {
      "apiVersion": "v1",
      "kind": "Kind",
      "metadata": Object {
        "name": "test-l1-c8c430b5",
      },
      "spec": Object {
        "surge": 500,
      },
    }
  `);
});

test('toJson error message', () => {

  const chart = Testing.chart();

  const obj = new ApiObject(chart, 'ConfigMap', {
    kind: 'ConfigMap',
    apiVersion: 'v1',
    data: {
      size: Size.gibibytes(5),
    },
  });

  expect(() => obj.toJson()).toThrowError(`Failed serializing construct at path '${obj.node.path}' with name '${obj.name}': Error: can't render non-simple object of type 'Size'`);

});
