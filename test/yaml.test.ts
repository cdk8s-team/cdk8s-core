import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Yaml } from '../src/yaml';

describe('load', () => {
  test('from file', () => {
    expect(Yaml.load(`${__dirname}/fixtures/sample.yaml`)).toMatchSnapshot();
  });

  test('from url', () => {
    expect(Yaml.load('https://raw.githubusercontent.com/kubernetes/examples/33dfad21f4f4364c9eb7d48741b954915552ca0a/guestbook/all-in-one/guestbook-all-in-one.yaml')).toMatchSnapshot();
  });

  test('empty documents are filtered out', () => {
    const file = Yaml.tmp([
      { doc: 1 },
      null, // filtered
      'str_doc', // not filtered
      { }, // filtered
      '', // not filtered
      undefined, // filtered
      0, // not filtered
      [], // filtered
      { doc: 2 },
    ]);

    expect(Yaml.load(file)).toMatchSnapshot();
  });
});

describe('save', () => {
  test('single document', () => {
    const outputFile = Yaml.tmp([{ foo: 'bar', hello: [1, 2, 3] }]);
    expect(fs.readFileSync(outputFile, 'utf-8')).toMatchSnapshot();
  });

  test('multiple documents', () => {
    const outputFile = Yaml.tmp([
      { foo: 'bar', hello: [1, 2, 3] },
      { number: 2 },
    ]);

    expect(fs.readFileSync(outputFile, 'utf-8')).toMatchSnapshot();
  });

  test('empty values are preserved', () => {
    const temp = Yaml.tmp([
      {
        i_am_undefined: undefined, // converted to "null"
        i_am_null: null,
        empty_array: [],
        empty_object: {},
      },
    ]);

    expect(fs.readFileSync(temp, 'utf-8')).toMatchSnapshot();
  });

  test('empty documents are respected', () => {
    const outputFile = Yaml.tmp([
      {},
      {},
      undefined,
      { empty: true },
      {},
    ]);

    expect(fs.readFileSync(outputFile, 'utf-8')).toMatchSnapshot();
  });

  test('strings are quoted', () => {
    const outputFile = Yaml.tmp([{
      foo: 'on',
      bar: 'this has a "big quote"',
      not_a_string: true,
    }]);

    expect(fs.readFileSync(outputFile, 'utf-8')).toMatchSnapshot();
  });

  test('escaped character does not divided by cross line boundaries', () => {
    const longStringList = [
      '^(((\d*(\.\d*)?h)|(\d*(\.\d*)?m)|(\d*(\.\d*)?s)|' +
      '(\d*(\.\d*)?ms)|(\d*(\.\d*)?us)|(\d*(\.\d*)?µs)|' +
      '(\d*(\.\d*)?ns))+|infinity|infinite)$',
    ];
    const dumpPath = Yaml.tmp(longStringList);
    expect(fs.readFileSync(dumpPath, 'utf8').trimEnd()).not.toContain('\n');
  });
});

test('yaml 1.1 octal numbers are parsed correctly', () => {
  const tmpdir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdk8s-'));
  const filePath = path.join(tmpdir, 'temp.yaml');
  fs.writeFileSync(filePath, 'foo: 0755');

  expect(Yaml.load(filePath)).toEqual([{ foo: 493 }]);
});

test('multi-line text block with long line keep line break', () => {
  const yamlString = {
    foo: `[section]
    abc: s
    def: 012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789`,
    bar: 'something',
  };
  expect(Yaml.stringify(yamlString)).toMatchSnapshot();
});

test('stringify() accepts multiple documents', () => {
  const actual = Yaml.stringify({ foo: 123 }, { bar: ['hi', 'there'], jam: 12 });
  expect(actual).toStrictEqual([
    'foo: 123',
    '---',
    'bar:',
    '  - hi',
    '  - there',
    'jam: 12',
    '',
  ].join('\n'));
});

test("strings don't become booleans", () => {
  const actual = Yaml.stringify({ a_yes: 'yes', a_no: 'no', a_true: 'true', a_false: 'false' });
  expect(actual).toStrictEqual([
    'a_yes: "yes"',
    'a_no: "no"',
    'a_true: "true"',
    'a_false: "false"',
    '',
  ].join('\n'));
});
