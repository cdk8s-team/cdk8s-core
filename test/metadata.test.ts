import {
  ApiObject,
  ApiObjectMetadataDefinition,
  Lazy,
  OwnerReference,
  Testing,
} from '../src';

test('Can add a label', () => {
  const meta = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
  });

  meta.addLabel('key', 'value');

  const actual: any = meta.toJson();

  expect(actual.labels).toEqual({
    key: 'value',
  });
});

test('Can add an annotation', () => {
  const meta = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
  });

  meta.addAnnotation('key', 'value');

  const actual = meta.toJson();

  expect(actual.annotations).toEqual({
    key: 'value',
  });
});

test('Can add a finalizer', () => {
  const meta = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
  });

  meta.addFinalizers('my-finalizer');

  const actual = meta.toJson();

  expect(actual.finalizers).toEqual(['my-finalizer']);
});

test('Can add an owner reference', () => {
  const meta = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
  });

  meta.addOwnerReference({
    apiVersion: 'v1',
    kind: 'Pod',
    name: 'mypod',
    uid: 'abcdef12-3456-7890-abcd-ef1234567890',
  });

  const actual = meta.toJson();

  expect(actual.ownerReferences).toEqual([
    {
      apiVersion: 'v1',
      kind: 'Pod',
      name: 'mypod',
      uid: 'abcdef12-3456-7890-abcd-ef1234567890',
    },
  ]);
});

test('Instantiation properties are all respected', () => {
  const meta = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    labels: { key: 'value' },
    annotations: { key: 'value' },
    name: 'name',
    namespace: 'namespace',
  });

  const actual = meta.toJson();

  const expected = {
    name: 'name',
    namespace: 'namespace',
    annotations: {
      key: 'value',
    },
    labels: {
      key: 'value',
    },
  };

  expect(actual).toStrictEqual(expected);
});

test('ensure Lazy properties are resolved', () => {
  const meta = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    labels: { key: 'value' },
    annotations: {
      key: 'value',
      lazy: Lazy.any({
        produce: () => {
          return { uiMeta: 'is good' };
        },
      }),
    },
    name: 'name',
    namespace: 'namespace',
  });

  const actual = meta.toJson();

  const expected = {
    name: 'name',
    namespace: 'namespace',
    annotations: {
      key: 'value',
      lazy: {
        uiMeta: 'is good',
      },
    },
    labels: {
      key: 'value',
    },
  };

  expect(actual).toStrictEqual(expected);
});

test('Can include arbirary key/value options', () => {
  const meta = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    foo: 123,
    bar: {
      helloL: 'world',
    },
  });

  meta.add('bar', 'baz');

  expect(meta.toJson()).toStrictEqual({
    bar: 'baz',
    foo: 123,
  });
});

test('labels are cloned', () => {
  const shared = { foo: 'bar' };
  const met1 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    labels: shared,
  });

  met1.addLabel('bar', 'baz');

  const met2 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    labels: shared,
  });

  expect(met2.toJson()).toMatchInlineSnapshot(`
    Object {
      "labels": Object {
        "foo": "bar",
      },
    }
  `);
});

test('annotations are cloned', () => {
  const shared = { foo: 'bar' };
  const met1 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    annotations: shared,
  });

  met1.addAnnotation('bar', 'baz');

  const met2 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    annotations: shared,
  });

  expect(met2.toJson()).toMatchInlineSnapshot(`
    Object {
      "annotations": Object {
        "foo": "bar",
      },
    }
  `);
});

test('finalizers are cloned', () => {
  const shared = ['foo'];
  const met1 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    finalizers: shared,
  });

  met1.addFinalizers('bar', 'baz');

  const met2 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    finalizers: shared,
  });

  expect(met2.toJson()).toMatchInlineSnapshot(`
    Object {
      "finalizers": Array [
        "foo",
      ],
    }
  `);
});

test('ownerReferences are cloned', () => {
  const shared: OwnerReference[] = [
    { apiVersion: 'v1', kind: 'Kind', name: 'name1', uid: 'uid1' },
  ];
  const met1 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    ownerReferences: shared,
  });

  met1.addOwnerReference({
    apiVersion: 'v1',
    kind: 'Kind',
    name: 'name2',
    uid: 'uid2',
  });

  const met2 = new ApiObjectMetadataDefinition({
    apiObject: createApiObject(),
    ownerReferences: shared,
  });

  expect(met2.toJson()).toMatchInlineSnapshot(`
    Object {
      "ownerReferences": Array [
        Object {
          "apiVersion": "v1",
          "kind": "Kind",
          "name": "name1",
          "uid": "uid1",
        },
      ],
    }
  `);
});

function createApiObject(): ApiObject {
  const chart = Testing.chart();
  return new ApiObject(chart, 'ApiObject', {
    apiVersion: 'v1',
    kind: 'Service',
  });
}
