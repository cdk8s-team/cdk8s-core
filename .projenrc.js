const { Cdk8sTeamJsiiProject } = require('@cdk8s/projen-common');
const { JsonFile, github } = require('projen');

const project = new Cdk8sTeamJsiiProject({
  name: 'cdk8s',
  repoName: 'cdk8s-core',
  description: 'This is the core library of Cloud Development Kit (CDK) for Kubernetes (cdk8s). cdk8s apps synthesize into standard Kubernetes manifests which can be applied to any Kubernetes cluster.',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  peerDeps: [
    'constructs@^10',
  ],

  bundledDeps: [
    'yaml',
    'follow-redirects',
    'fast-json-patch',
  ],
  devDeps: [
    'constructs',
    '@types/follow-redirects',
    'json-schema-to-typescript',
    '@cdk8s/projen-common',
  ],

  keywords: [
    'cdk',
    'kubernetes',
    'k8s',
    'constructs',
    'containers',
    'configuration',
    'microservices',
  ],

  defaultReleaseBranch: '2.x',
  majorVersion: 2,
  golangBranch: '2.x',
  jsiiVersion: '^5',
});

// _loadurl.js is written in javascript so we need to commit it and also copy it
// after compilation to the `lib/` directory.
project.gitignore.include('/src/_loadurl.js');
project.compileTask.exec('cp src/_loadurl.js lib/');

const installHelm = project.addTask('install-helm', {
  exec: 'curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash',
  description: 'Install helm3',

  // will exit with non-zero if helm is not installed or has the wrong version
  condition: '! (helm version | grep "v3.")',
});

project.testTask.prependSpawn(installHelm);

const docgenTask = project.tasks.tryFind('docgen');
docgenTask.reset();
docgenTask.exec('jsii-docgen -l typescript -o docs/typescript.md');
docgenTask.exec('jsii-docgen -l python -o docs/python.md');
docgenTask.exec('jsii-docgen -l java -o docs/java.md');

// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/64924
project.package.addPackageResolutions('@types/lodash@4.14.192');

// not sure why this is needed, but some dependencies have a transient dependency
// on wrap-ansi@8 which is an ESM module. When performing `yarn upgrade npm-check-updates`
// yarn gets confused somehow and uses the @8 one which causes things to break
project.package.addPackageResolutions('wrap-ansi@7.0.0');

project.synth();
