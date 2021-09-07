const { JsiiProject, DependenciesUpgradeMechanism } = require('projen');

const project = new JsiiProject({
  name: 'cdk8s',
  description: 'Cloud Development Kit for Kubernetes',
  repositoryUrl: 'https://github.com/cdk8s-team/cdk8s-core.git',
  prerelease: 'beta',
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
  ],

  defaultReleaseBranch: 'main',
  minNodeVersion: '12.13.0',

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

  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    exclude: ['yaml'],
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve'],
      secret: 'PROJEN_GITHUB_TOKEN',
      container: {
        image: 'jsii/superchain',
      },
    },
  }),
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

project.synth();
