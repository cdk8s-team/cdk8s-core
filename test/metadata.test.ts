import { ApiObjectMetadataDefinition, Lazy } from '../src';

test('Can add a label', () => {

  const meta = new ApiObjectMetadataDefinition();

  meta.addLabel('key', 'value');

  const actual: any = meta.toJson();

  expect(actual.labels).toEqual({
    key: 'value',
  });

});

test('Can add an annotation', () => {

  const meta = new ApiObjectMetadataDefinition();

  meta.addAnnotation('key', 'value');

  const actual = meta.toJson();

  expect(actual.annotations).toEqual({
    key: 'value',
  });

});

test('Can add a finalizer', () => {

  const meta = new ApiObjectMetadataDefinition();

  meta.addFinalizers('my-finalizer');

  const actual = meta.toJson();

  expect(actual.finalizers).toEqual(['my-finalizer']);

});

test('Can add an owner reference', () => {

  const meta = new ApiObjectMetadataDefinition();

  meta.addOwnerReference({
    apiVersion: 'v1',
    kind: 'Pod',
    name: 'mypod',
    uid: 'abcdef12-3456-7890-abcd-ef1234567890',
  });

  const actual = meta.toJson();

  expect(actual.ownerReferences).toEqual([{
    apiVersion: 'v1',
    kind: 'Pod',
    name: 'mypod',
    uid: 'abcdef12-3456-7890-abcd-ef1234567890',
  }]);

});

test('Instantiation properties are all respected', () => {

  const meta = new ApiObjectMetadataDefinition({
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
    labels: { key: 'value' },
    annotations: {
      key: 'value',
      lazy: Lazy.any({ produce: () => { return { uiMeta: 'is good' }; } }),
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