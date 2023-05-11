import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Construct } from 'constructs';
import * as YAML from 'yaml';
import { Testing, Chart, App, ApiObject, YamlOutputType } from '../src';

test('synthYaml considers dependencies', () => {

  const app = Testing.app();

  const chart = new Chart(app, 'Chart');

  const c1 = new Construct(chart, 'C1');
  const c2 = new Construct(chart, 'C2');

  new ApiObject(c1, 'ApiObject1', { kind: 'Kind1', apiVersion: 'v1' });
  new ApiObject(c2, 'ApiObject2', { kind: 'Kind2', apiVersion: 'v1' });

  c1.node.addDependency(c2);

  expect(app.synthYaml()).toMatchSnapshot();

});

test('can hook into chart synthesis with during synthYaml', () => {

  const app = Testing.app();

  class MyChart extends Chart {

    constructor(scope: Construct, id: string) {
      super(scope, id);

      new ApiObject(this, 'ApiObject1', { kind: 'Kind1', apiVersion: 'v1' });
      new ApiObject(this, 'ApiObject2', { kind: 'Kind2', apiVersion: 'v1' });

    }

    public toJson(): any[] {
      this.node.tryRemoveChild('ApiObject1');
      return super.toJson();
    }
  }

  new MyChart(app, 'Chart');
  const manifest = YAML.parseAllDocuments(app.synthYaml(), {
    version: '1.1',
  });
  expect(manifest.length).toEqual(1);
  expect(manifest[0].get('kind')).toEqual('Kind2');

});

test('can hook into chart synthesis with during synth', () => {

  const app = Testing.app();

  class MyChart extends Chart {

    constructor(scope: Construct, id: string) {
      super(scope, id);

      new ApiObject(this, 'ApiObject1', { kind: 'Kind1', apiVersion: 'v1' });
      new ApiObject(this, 'ApiObject2', { kind: 'Kind2', apiVersion: 'v1' });

    }

    public toJson(): any[] {
      this.node.tryRemoveChild('ApiObject1');
      return super.toJson();
    }
  }

  new MyChart(app, 'Chart');

  app.synth();

  expect(fs.readdirSync(app.outdir)).toEqual([
    'chart-c86185a7.k8s.yaml',
  ]);
  expect(fs.readFileSync(path.join(app.outdir, 'chart-c86185a7.k8s.yaml'), 'utf8')).toMatchSnapshot();

});

test('empty app emits no files', () => {
  // GIVEN
  const app = Testing.app();

  // WHEN
  app.synth();

  // THEN
  expect(fs.readdirSync(app.outdir)).toHaveLength(0);
});

test('app with two charts', () => {
  // GIVEN
  const app = Testing.app();

  // WHEN
  new Chart(app, 'chart1');
  new Chart(app, 'chart2');
  app.synth();

  // THEN
  expect(fs.readdirSync(app.outdir)).toEqual([
    'chart1.k8s.yaml',
    'chart2.k8s.yaml',
  ]);
});

test('app with charts directly dependant', () => {

  // GIVEN
  const app = Testing.app();

  // WHEN
  const chart1 = new Chart(app, 'chart1');
  const chart2 = new Chart(app, 'chart2');
  const chart3 = new Chart(app, 'chart3');

  chart1.node.addDependency(chart2);
  chart2.node.addDependency(chart3);

  app.synth();

  // THEN
  expect(fs.readdirSync(app.outdir)).toEqual([
    '0000-chart3.k8s.yaml',
    '0001-chart2.k8s.yaml',
    '0002-chart1.k8s.yaml',
  ]);

});

test('app with charts indirectly dependant', () => {

  // GIVEN
  const app = Testing.app();

  // WHEN
  const chart1 = new Chart(app, 'chart1');
  const chart2 = new Chart(app, 'chart2');
  const chart3 = new Chart(app, 'chart3');

  const obj1 = new ApiObject(chart1, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
  const obj2 = new ApiObject(chart2, 'obj2', { apiVersion: 'v1', kind: 'Kind2' });
  const obj3 = new ApiObject(chart3, 'obj3', { apiVersion: 'v1', kind: 'Kind3' });

  obj1.node.addDependency(obj2);
  obj2.node.addDependency(obj3);

  app.synth();

  // THEN
  expect(fs.readdirSync(app.outdir)).toEqual([
    '0000-chart3.k8s.yaml',
    '0001-chart2.k8s.yaml',
    '0002-chart1.k8s.yaml',
  ]);

});

test('default output directory is "dist"', () => {
  // GIVEN
  const prev = process.cwd();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdk8s-'));

  try {
    process.chdir(workdir);

    // WHEN
    const app = new App();
    new Chart(app, 'chart1');
    app.synth();

    // THEN
    expect(app.outdir).toEqual('dist');
    expect(fs.existsSync('./dist')).toBeTruthy();
    expect(fs.statSync('./dist').isDirectory());
    expect(fs.existsSync('./dist/chart1.k8s.yaml')).toBeTruthy();
  } finally {
    process.chdir(prev);
    // fs.rmdirSync(workdir, { recursive: true });
  }
});

test('app with dependent and independent charts', () => {

  // GIVEN
  const app = Testing.app();

  // WHEN
  const chart1 = new Chart(app, 'chart1');
  new Chart(app, 'chart2');
  const chart3 = new Chart(app, 'chart3');
  new Chart(app, 'chart4');

  chart1.node.addDependency(chart3);

  app.synth();

  // THEN
  expect(fs.readdirSync(app.outdir)).toEqual([
    '0000-chart3.k8s.yaml',
    '0001-chart1.k8s.yaml',
    '0002-chart2.k8s.yaml',
    '0003-chart4.k8s.yaml',
  ]);

});

test('app with chart dependencies via custom constructs', () => {

  class CustomConstruct extends Construct {

    public obj: ApiObject;

    constructor(scope: Construct, id: string) {
      super(scope, id);

      this.obj = new ApiObject(this, `${id}obj`, { apiVersion: 'v1', kind: 'CustomConstruct' });
    }
  }

  const app = Testing.app();
  const chart1 = new Chart(app, 'chart1');
  const chart2 = new Chart(app, 'chart2');

  const microService = new CustomConstruct(chart1, 'MicroService');
  const dataBase = new CustomConstruct(chart2, 'DataBase');

  microService.node.addDependency(dataBase);

  app.synth();

  expect(fs.readdirSync(app.outdir)).toEqual([
    '0000-chart2.k8s.yaml',
    '0001-chart1.k8s.yaml',
  ]);

});

test('app with nested charts will deduplicate api objects', () => {

  class CustomConstruct extends Construct {

    public obj: ApiObject;

    constructor(scope: Construct, id: string) {
      super(scope, id);

      this.obj = new ApiObject(this, `${id}obj`, { apiVersion: 'v1', kind: 'CustomConstruct' });
    }
  }

  const app = Testing.app();
  const chart = new Chart(app, 'chart1');
  const childChart = new Chart(chart, 'chart2');
  new CustomConstruct(chart, 'child1');
  new CustomConstruct(childChart, 'child2');

  app.synth();

  expect(fs.readdirSync(app.outdir)).toEqual([
    '0000-chart1-chart2-c883b207.k8s.yaml',
    '0001-chart1.k8s.yaml',
  ]);
  expect(fs.readFileSync(path.join(app.outdir, '0000-chart1-chart2-c883b207.k8s.yaml'), 'utf8')).toMatchSnapshot();
  expect(fs.readFileSync(path.join(app.outdir, '0001-chart1.k8s.yaml'), 'utf8')).toMatchSnapshot();

});

test('app with nested charts will deduplicate api objects (using custom classes)', () => {

  class ChildChart1 extends Chart {
    constructor(scope: Construct, name: string) {
      super(scope, name);
      new ApiObject(this, 'namespace1', { apiVersion: 'v1', kind: 'Namespace' });
    }
  }

  class ChildChart2 extends Chart {
    constructor(scope: Construct, name: string) {
      super(scope, name);
      new ApiObject(this, 'namespace2', { apiVersion: 'v1', kind: 'Namespace' });
    }
  }

  class ParentChart extends Chart {
    constructor(scope: Construct, name: string) {
      super(scope, name);
      new ChildChart1(this, 'child1');
      new ChildChart2(this, 'child2');
      new ApiObject(this, 'namespace3', { apiVersion: 'v1', kind: 'Namespace' });
    }
  }

  const app = Testing.app();
  new ParentChart(app, 'parent');

  app.synth();

  expect(fs.readdirSync(app.outdir)).toEqual([
    '0000-parent-child1-c8e38b2d.k8s.yaml',
    '0001-parent-child2-c882caae.k8s.yaml',
    '0002-parent.k8s.yaml',
  ]);
  expect(fs.readFileSync(path.join(app.outdir, '0000-parent-child1-c8e38b2d.k8s.yaml'), 'utf8')).toMatchSnapshot();
  expect(fs.readFileSync(path.join(app.outdir, '0001-parent-child2-c882caae.k8s.yaml'), 'utf8')).toMatchSnapshot();
  expect(fs.readFileSync(path.join(app.outdir, '0002-parent.k8s.yaml'), 'utf8')).toMatchSnapshot();

});

test('synth calls validate', () => {

  class ValidatingConstruct extends Construct {

    public validateInvoked = false;

    constructor(scope: Construct, id: string) {
      super(scope, id);
      this.node.addValidation({
        validate: (): string[] => { this.validateInvoked = true; return []; },
      });
    }

  }

  const app = new App();

  const construct = new ValidatingConstruct(app, 'ValidatingConstruct');

  app.synth();

  expect(construct.validateInvoked).toBeTruthy();

});

test('apps with varying yamlOutputTypes; two charts, no objects', () => {
  const testSpecs = [
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_CHART },
      result: ['chart1.k8s.yaml', 'chart2.k8s.yaml'],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_APP },
      result: ['app.k8s.yaml'],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_RESOURCE },
      result: [],
    },
    {
      props: { yamlOutputType: YamlOutputType.FOLDER_PER_CHART_FILE_PER_RESOURCE },
      result: ['chart1', 'chart2'],
    },
  ];
  for (const testSpec of testSpecs) {
    // GIVEN
    const app = Testing.app(testSpec.props);

    // WHEN
    new Chart(app, 'chart1');
    new Chart(app, 'chart2');
    app.synth();

    // THEN
    expect(fs.readdirSync(app.outdir)).toEqual(testSpec.result);
  }
});

test('return app as yaml string', () => {
  // GIVEN
  const app = Testing.app();

  // WHEN
  const chart = new Chart(app, 'chart1');
  new ApiObject(chart, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
  new ApiObject(chart, 'obj2', { apiVersion: 'v1', kind: 'Kind2' });

  new Chart(app, 'chart2');

  const chart3 = new Chart(app, 'chart3');
  new ApiObject(chart3, 'obj3', { apiVersion: 'v1', kind: 'Kind3' });
  new ApiObject(chart3, 'obj4', { apiVersion: 'v1', kind: 'Kind4' });

  const a = app.synthYaml();

  // THEN
  expect(a).toMatchSnapshot();
},
);

test('apps with varying yamlOutputTypes; charts indirectly dependant, multiple objects', () => {
  const testSpecs = [
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_CHART },
      result: [
        '0000-chart3.k8s.yaml',
        '0001-chart2.k8s.yaml',
        '0002-chart1.k8s.yaml',
      ],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_APP },
      result: ['app.k8s.yaml'],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_RESOURCE },
      result: [
        'Kind1.chart1-obj1-c818e77f.k8s.yaml',
        'Kind2.chart2-obj2-c8636f20.k8s.yaml',
        'Kind3.chart3-obj3-c8abbfb5.k8s.yaml',
      ],
    },
    {
      props: { yamlOutputType: YamlOutputType.FOLDER_PER_CHART_FILE_PER_RESOURCE },
      result: [
        '0000-chart3/Kind3.chart3-obj3-c8abbfb5.k8s.yaml',
        '0001-chart2/Kind2.chart2-obj2-c8636f20.k8s.yaml',
        '0002-chart1/Kind1.chart1-obj1-c818e77f.k8s.yaml',
      ],
    },
  ];

  for (const testSpec of testSpecs) {
    // GIVEN
    const app = Testing.app(testSpec.props);

    // WHEN
    const chart1 = new Chart(app, 'chart1');
    const chart2 = new Chart(app, 'chart2');
    const chart3 = new Chart(app, 'chart3');

    const obj1 = new ApiObject(chart1, 'obj1', { apiVersion: 'v1', kind: 'Kind1' });
    const obj2 = new ApiObject(chart2, 'obj2', { apiVersion: 'v1', kind: 'Kind2' });
    const obj3 = new ApiObject(chart3, 'obj3', { apiVersion: 'v1', kind: 'Kind3' });

    obj1.node.addDependency(obj2);
    obj2.node.addDependency(obj3);

    app.synth();

    // THEN
    expect(getFilesAndFolders(app.outdir)).toEqual(testSpec.result);
  }
});

test('apps with varying yamlOutputTypes; chart dependencies via custom constructs', () => {

  class CustomConstruct extends Construct {

    public obj: ApiObject;

    constructor(scope: Construct, id: string) {
      super(scope, id);

      this.obj = new ApiObject(this, `${id}obj`, { apiVersion: 'v1', kind: 'CustomConstruct' });
    }
  }

  const testSpecs = [
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_CHART },
      result: ['0000-chart2.k8s.yaml', '0001-chart1.k8s.yaml'],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_APP },
      result: ['app.k8s.yaml'],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_RESOURCE },
      result: [
        'CustomConstruct.chart1-microservice-microserviceobj-c8e1164f.k8s.yaml',
        'CustomConstruct.chart2-database-databaseobj-c8b5eba3.k8s.yaml',
      ],
    },
    {
      props: { yamlOutputType: YamlOutputType.FOLDER_PER_CHART_FILE_PER_RESOURCE },
      result: [
        '0000-chart2/CustomConstruct.chart2-database-databaseobj-c8b5eba3.k8s.yaml',
        '0001-chart1/CustomConstruct.chart1-microservice-microserviceobj-c8e1164f.k8s.yaml',
      ],
    },
  ];

  for (const testSpec of testSpecs) {
    const app = Testing.app(testSpec.props);
    const chart1 = new Chart(app, 'chart1');
    const chart2 = new Chart(app, 'chart2');

    const microService = new CustomConstruct(chart1, 'MicroService');
    const dataBase = new CustomConstruct(chart2, 'DataBase');

    microService.node.addDependency(dataBase);

    app.synth();

    expect(getFilesAndFolders(app.outdir)).toEqual(testSpec.result);
  }
});

test('Modified file extensions with varying output types; two charts, no objects', () => {
  const testSpecs = [
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_CHART, outputFileExtension: '.yaml' },
      result: ['chart1.yaml', 'chart2.yaml'],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_APP, outputFileExtension: '.yaml' },
      result: ['app.yaml'],
    },
    {
      props: { yamlOutputType: YamlOutputType.FILE_PER_RESOURCE, outputFileExtension: '.yaml' },
      result: [],
    },
    {
      props: { yamlOutputType: YamlOutputType.FOLDER_PER_CHART_FILE_PER_RESOURCE, outputFileExtension: '.yaml' },
      result: ['chart1', 'chart2'],
    },
  ];
  for (const testSpec of testSpecs) {
    // GIVEN
    const app = Testing.app(testSpec.props);

    // WHEN
    new Chart(app, 'chart1');
    new Chart(app, 'chart2');
    app.synth();

    // THEN
    expect(fs.readdirSync(app.outdir)).toEqual(testSpec.result);
  }
});


/**
 * Get the list of files and folders in the source folder and sub folders (one level deep)
 * @param sourceDir Folder in which to search for files and folders
 */
function getFilesAndFolders(sourceDir: string) {
  let result: string[] = [];
  let items = fs.readdirSync(sourceDir);
  for (const item of items) {
    if (fs.lstatSync(path.join(sourceDir, item)).isDirectory()) {
      let subFoldersContents = fs.readdirSync(path.join(sourceDir, item));
      if (subFoldersContents.length > 0) {
        result.push( ...subFoldersContents.map(file => item + '/' + file));
      }
    } else {
      result.push(item);
    }
  }
  return result;
}