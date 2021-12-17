const { cdk } = require('projen');

const project = new cdk.JsiiProject({
  name: 'cdk8s',
  description: 'This is the core library of Cloud Development Kit (CDK) for Kubernetes (cdk8s). cdk8s apps synthesize into standard Kubernetes manifests which can be applied to any Kubernetes cluster.',
  repositoryUrl: 'https://github.com/cdk8s-team/cdk8s-core.git',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',

  peerDeps: [
    'constructs',
  ],

  bundledDeps: [
    'yaml@2.0.0-7',
    'follow-redirects',
    'fast-json-patch',
  ],
  devDeps: [
    'constructs',
    '@types/follow-redirects',
    'json-schema-to-typescript',
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
  releaseBranches: {
    '1.x': {
      majorVersion: 1,
      npmDistTag: 'latest-1',
    },
  },

  minNodeVersion: '12.13.0',
  workflowNodeVersion: '12.22.0',

  // jsii configuration
  publishToMaven: {
    javaPackage: 'org.cdk8s',
    mavenGroupId: 'org.cdk8s',
    mavenArtifactId: 'cdk8s',
  },
  publishToPypi: {
    distName: 'cdk8s',
    module: 'cdk8s',
  },
  publishToNuget: {
    dotNetNamespace: 'Org.Cdk8s',
    packageId: 'Org.Cdk8s',
  },
  publishToGo: {
    gitUserName: 'cdk8s-automation',
    gitUserEmail: 'cdk8s-team@amazon.com',
    moduleName: 'github.com/cdk8s-team/cdk8s-core-go',
  },
  autoApproveOptions: {
    allowedUsernames: ['cdk8s-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,

  releaseFailureIssue: true,

  depsUpgradeOptions: {
    exclude: ['yaml'],
  },
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

project.synth();
