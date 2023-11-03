import * as fs from 'fs';
import * as path from 'path';
import { Construct } from 'constructs';
import { Chart, ApiObject, Testing } from '../src';
import { Lazy } from '../src/lazy';

test('empty stack', () => {
  // GIVEN
  const app = Testing.app();

  // WHEN
  const chart = new Chart(app, 'empty');

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('disabling resource name hashes at chart level', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test', {
    disableResourceNameHashes: true,
  });

  // WHEN
  const ob1 = new ApiObject(chart, 'resource1', { kind: 'Resource1', apiVersion: 'v1' });
  const ob2 = new ApiObject(chart, 'resource2', { kind: 'Resource3', apiVersion: 'v1' });

  // THEN
  expect(ob1.name).toEqual('test-resource1');
  expect(ob2.name).toEqual('test-resource2');
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('resource name hashes work by default', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  const ob1 = new ApiObject(chart, 'resource1', { kind: 'Resource1', apiVersion: 'v1' });
  const ob2 = new ApiObject(chart, 'resource2', { kind: 'Resource3', apiVersion: 'v1' });

  // THEN
  expect(ob1.name).toEqual('test-resource1-c85cb0fc');
  expect(ob2.name).toEqual('test-resource2-c8c6bd27');
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('output includes all synthesized resources', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  new ApiObject(chart, 'resource1', { kind: 'Resource1', apiVersion: 'v1' });
  new ApiObject(chart, 'resource2', { kind: 'Resource2', apiVersion: 'v1' });
  new ApiObject(chart, 'resource3', { kind: 'Resource3', apiVersion: 'v1' });

  // also, subscopes
  const scope = new Construct(chart, 'scope');
  new ApiObject(scope, 'resource1', { kind: 'Resource1', apiVersion: 'v1' });
  new ApiObject(scope, 'resource2', { kind: 'Resource2', apiVersion: 'v1' });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('CronJob names are at most 52 characters', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  const ob1 = new ApiObject(chart, 'cj1', { kind: 'CronJob', apiVersion: 'v1' });
  const ob2 = new ApiObject(chart, 'resourceNameThatIsLongerThan52Charactersssssssssssss', { kind: 'CronJob', apiVersion: 'v1' });

  // THEN
  expect(ob1.name.length).toBeLessThanOrEqual(52);
  expect(ob2.name.length).toBeLessThanOrEqual(52);
});

test('tokens are resolved during synth', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  new ApiObject(chart, 'resource1', {
    kind: 'Resource1',
    apiVersion: 'v1',
    spec: {
      foo: Lazy.any({ produce: () => 123 }),
      implicitToken: createImplictToken({ foo: 'bar' }),
    },
  });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
});

test('Chart.of(node) returns the first chart in which a node is defined', () => {
  // GIVEN
  const app = Testing.app();

  // WHEN
  const chart = new Chart(app, 'MyFirst');
  const direct = new Construct(chart, 'Direct');
  const indirect = new Construct(direct, 'Indirect');

  const childChart = new Chart(indirect, 'ChildChart');
  const childChild = new Construct(childChart, 'ChildChild');

  expect(Chart.of(chart)).toEqual(chart);
  expect(Chart.of(direct)).toEqual(chart);
  expect(Chart.of(indirect)).toEqual(chart);
  expect(Chart.of(childChart)).toEqual(childChart);
  expect(Chart.of(childChild)).toEqual(childChart);
});

test('Chart.of(node) fails when there is no chart in the tree', () => {
  // GIVEN
  const app = Testing.app();
  const child = new Construct(app, 'MyConstruct');

  // WHEN
  expect(() => Chart.of(child)).toThrow(/cannot find a parent chart \(directly or indirectly\)/);
});

test('synthesizeManifest() can be used to synthesize a specific chart', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'chart');
  new ApiObject(chart, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
  new ApiObject(chart, 'obj2', { apiVersion: 'v1', kind: 'Kind2' });

  // WHEN
  const manifest = chart.toJson();

  // THEN
  expect(manifest).toMatchSnapshot();
});

test('addDependency', () => {

  const app = Testing.app();
  const chart1 = new Chart(app, 'chart1');
  const chart2 = new Chart(app, 'chart2');
  const chart3 = new Chart(app, 'chart3');

  chart1.addDependency(chart2, chart3);

  const dependencies = chart1.node.dependencies;

  expect(dependencies).toEqual([
    chart2,
    chart3,
  ]);

});

test('isChart distinguishes charts from non-charts', () => {
  // GIVEN
  const app = Testing.app();

  class MyChart extends Chart {
    constructor(scope: Construct, id: string, props?: any) {
      super(scope, id, props);
    }
  }

  // WHEN
  const chart = new Chart(app, 'chart');
  const childChart = new MyChart(app, 'my-chart');
  const obj = new ApiObject(chart, 'api-object', {
    apiVersion: 'v1',
    kind: 'Foo',
  });

  // THEN
  expect(Chart.isChart(chart)).toEqual(true);
  expect(Chart.isChart(childChart)).toEqual(true);
  expect(Chart.isChart(obj)).toEqual(false);
  expect(Chart.isChart(app)).toEqual(false);
});

describe('toJson', () => {

  test('validates the chart', () => {
    class ValidatingConstruct extends Construct {

      public validateInvoked = false;

      constructor(scope: Construct, id: string) {
        super(scope, id);

        this.node.addValidation({
          validate: (): string[] => { this.validateInvoked = true; return []; },
        });
      }
    }

    const app = Testing.app();
    const chart = new Chart(app, 'chart');

    const construct = new ValidatingConstruct(chart, 'ValidatingConstruct');

    chart.toJson();

    expect(construct.validateInvoked).toBeTruthy();

  });

  test('returns an ordered list', () => {

    const app = Testing.app();
    const chart1 = new Chart(app, 'chart1');

    const obj1 = new ApiObject(chart1, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
    const obj2 = new ApiObject(chart1, 'obj2', { apiVersion: 'v1', kind: 'Kind2' });
    const obj3 = new ApiObject(chart1, 'obj3', { apiVersion: 'v1', kind: 'Kind3' });

    obj1.addDependency(obj2);
    obj2.addDependency(obj3);

    expect(chart1.toJson()).toEqual([
      obj3.toJson(),
      obj2.toJson(),
      obj1.toJson(),
    ]);

  });

  test('ignores objects belonging to a different chart', () => {

    const app = Testing.app();
    const chart1 = new Chart(app, 'chart1');
    const chart2 = new Chart(app, 'chart2');

    const obj1 = new ApiObject(chart1, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
    const obj2 = new ApiObject(chart2, 'obj2', { apiVersion: 'v1', kind: 'Kind2' });

    obj1.addDependency(obj2);

    expect(chart1.toJson()).toEqual([
      obj1.toJson(),
    ]);

  });

  test('ignores chart objects', () => {

    const app = Testing.app();
    const chart1 = new Chart(app, 'chart1');
    const chart2 = new Chart(app, 'chart2');

    const obj1 = new ApiObject(chart1, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
    const obj2 = new ApiObject(chart2, 'obj2', { apiVersion: 'v1', kind: 'Kind2' });

    obj1.addDependency(obj2);
    chart1.addDependency(chart2);

    expect(chart1.toJson()).toEqual([
      obj1.toJson(),
    ]);

  });

  test('orders custom constructs', () => {

    const app = Testing.app();
    const chart = new Chart(app, 'chart');

    const microService = new CustomConstruct(chart, 'MicroService');
    const dataBase = new CustomConstruct(chart, 'Database');

    microService.node.addDependency(dataBase);

    expect(chart.toJson()).toEqual([
      dataBase.obj.toJson(),
      microService.obj.toJson(),
    ]);

  });

  test('orders transitive custom constructs', () => {

    const app = Testing.app();
    const chart = new Chart(app, 'chart');

    const microService = new CustomConstruct(chart, 'MicroService');
    const dataBase = new CustomNestedConstruct(chart, 'Database');

    microService.node.addDependency(dataBase);

    expect(chart.toJson()).toEqual([
      dataBase.obj.obj.toJson(),
      microService.obj.toJson(),
    ]);

  });

  test('api object depends on custom construct', () => {

    const app = Testing.app();
    const chart = new Chart(app, 'chart');

    const microService = new ApiObject(chart, 'MicroService', { apiVersion: 'v1', kind: 'MicroService' });
    const dataBase = new CustomConstruct(chart, 'Database');

    microService.addDependency(dataBase);

    expect(chart.toJson()).toEqual([
      dataBase.obj.toJson(),
      microService.toJson(),
    ]);

  });

  test('construct depends on api object', () => {

    const app = Testing.app();
    const chart = new Chart(app, 'chart');

    const database = new ApiObject(chart, 'MicroService', { apiVersion: 'v1', kind: 'MicroService' });
    const microService = new CustomConstruct(chart, 'Database');

    microService.node.addDependency(database);

    expect(chart.toJson()).toEqual([
      database.toJson(),
      microService.obj.toJson(),
    ]);

  });

  test('parent chart does not include objects of children charts', () => {

    const app = Testing.app();
    const chart = new Chart(app, 'chart1');
    const childChart = new Chart(chart, 'chart2');
    new CustomConstruct(chart, 'child1');
    new CustomConstruct(childChart, 'child2');

    expect(chart.toJson()).toMatchObject([
      { apiVersion: 'v1', kind: 'CustomConstruct', metadata: { name: 'chart1-child1-child1obj-c868628e' } },
    ]);
    expect(childChart.toJson()).toMatchObject([
      { apiVersion: 'v1', kind: 'CustomConstruct', metadata: { name: 'chart1-chart2-child2-child2obj-c828dca6' } },
    ]);

  });

});

test('construct metadata is recorded when requested by api', () => {

  const app = Testing.app({ recordConstructMetadata: true });
  const chart = new Chart(app, 'chart1');

  new ApiObject(chart, 'obj1', {
    kind: 'Deployment',
    apiVersion: 'v1',
  });

  app.synth();

  const constructMetadata = JSON.parse(fs.readFileSync(path.join(app.outdir, 'construct-metadata.json'), { encoding: 'utf-8' }));
  expect(constructMetadata).toEqual({
    version: '1.0.0',
    resources: {
      'chart1-obj1-c818e77f': {
        path: 'chart1/obj1',
      },
    },
  });


});

test('construct metadata is recoreded when requested by env variable', () => {

  try {
    process.env.CDK8S_RECORD_CONSTRUCT_METADATA = 'true';
    const app = Testing.app();
    const chart = new Chart(app, 'chart1');

    new ApiObject(chart, 'obj1', {
      kind: 'Deployment',
      apiVersion: 'v1',
    });

    app.synth();

    const constructMetadata = JSON.parse(fs.readFileSync(path.join(app.outdir, 'construct-metadata.json'), { encoding: 'utf-8' }));
    expect(constructMetadata).toEqual({
      version: '1.0.0',
      resources: {
        'chart1-obj1-c818e77f': {
          path: 'chart1/obj1',
        },
      },
    });
  } finally {
    delete process.env.CDK8S_RECORD_CONSTRUCT_METADATA;
  }

});

test('construct metadata is not recorded when not requested', () => {

  const app = Testing.app();
  const chart = new Chart(app, 'chart1');

  new ApiObject(chart, 'obj1', {
    kind: 'Deployment',
    apiVersion: 'v1',
  });

  app.synth();

  expect(fs.existsSync(path.join(app.outdir, 'construct-metadata.json'))).toBeFalsy();

});

function createImplictToken(value: any) {
  const implicit = {};
  Object.defineProperty(implicit, 'resolve', { value: () => value });
  return implicit;
}

class CustomConstruct extends Construct {

  public obj: ApiObject;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.obj = new ApiObject(this, `${id}obj`, { apiVersion: 'v1', kind: 'CustomConstruct' });
  }
}

class CustomNestedConstruct extends Construct {

  public obj: CustomConstruct;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.obj = new CustomConstruct(this, 'nested');
  }
}

test('apiObjects returns all the API objects', () => {
  // GIVEN
  const chart = Testing.chart();

  // WHEN

  new ApiObject(chart, 'obj1', {
    kind: 'Deployment',
    apiVersion: 'v1',
  });
  new ApiObject(chart, 'obj2', {
    apiVersion: 'v1',
    kind: 'Foo',
    metadata: {
      name: 'resource1',
    },
  });
  new ApiObject(chart, 'obj3', {
    apiVersion: 'v1',
    kind: 'Bar',
    metadata: {
      name: 'resource1',
    },
  });
  expect(chart.apiObjects.map((x) => x.kind).sort()).toEqual(['Bar', 'Deployment', 'Foo']);
});
