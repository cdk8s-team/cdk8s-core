const { cdk, JsonFile, github } = require('projen');
const { JobPermission } = require('projen/lib/github/workflows-model');

const project = new cdk.JsiiProject({
  name: 'cdk8s',
  description: 'This is the core library of Cloud Development Kit (CDK) for Kubernetes (cdk8s). cdk8s apps synthesize into standard Kubernetes manifests which can be applied to any Kubernetes cluster.',
  repositoryUrl: 'https://github.com/cdk8s-team/cdk8s-core.git',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',

  peerDeps: [
    'constructs@^10',
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

  minNodeVersion: '14.17.0',

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
    gitBranch: '2.x',
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

// run backport in clean directories every time.
const backportHome = '/tmp/.backport/';
const backportDir = `${backportHome}/repositories/cdk8s-team/cdk8s-core`;
const backportConfig = new JsonFile(project, '.backportrc.json', {
  // see https://github.com/sqren/backport/blob/main/docs/config-file-options.md
  obj: {
    repoOwner: 'cdk8s-team',
    repoName: 'cdk8s-core',
    signoff: true,
    branchLabelMapping: {
      '^backport-to-(.+)$': '$1',
    },
    prTitle: '{commitMessages}',
    fork: false,
    publishStatusCommentOnFailure: true,
    publishStatusCommentOnSuccess: true,
    publishStatusCommentOnAbort: true,
    targetPRLabels: [project.autoApprove.label],
    dir: backportDir,
  },
});

// backport task to branches based on pr labels
const backportTask = createBackportTask();

// backport tasks to the explicit release branches
for (const branch of project.release.branches) {
  createBackportTask(branch);
}

const backportWorkflow = project.github.addWorkflow('backport');
backportWorkflow.on({ pullRequestTarget: { types: ['closed'] } });
backportWorkflow.addJob('backport', {
  runsOn: ['ubuntu-18.04'],
  permissions: {
    contents: github.workflows.JobPermission.WRITE,
  },
  steps: [
    // needed in order to run the projen task as well
    // as use the backport configuration in the repo.
    {
      name: 'checkout',
      uses: 'actions/checkout@v3',
      with: {
        // required because we need the full history
        // for proper backports.
        'fetch-depth': 0,
      },
    },
    {
      name: 'Set Git Identity',
      run: 'git config --global user.name "github-actions" && git config --global user.email "github-actions@github.com"',
    },
    {
      name: 'backport',
      if: 'github.event.pull_request.merged == true',
      run: `npx projen ${backportTask.name}`,
      env: {
        GITHUB_TOKEN: '${{ secrets.PROJEN_GITHUB_TOKEN }}',
        BACKPORT_PR_NUMBER: '${{ github.event.pull_request.number }}',
      },
    },
  ],
});

function createBackportTask(branch) {
  const name = branch ? `backport:${branch}` : 'backport';
  const task = project.addTask(name, { requiredEnv: ['BACKPORT_PR_NUMBER', 'GITHUB_TOKEN'] });
  task.exec(`rm -rf ${backportHome}`);
  task.exec(`mkdir -p ${backportHome}`);
  task.exec(`cp ${backportConfig.path} ${backportHome}`);

  const command = ['npx', 'backport', '--accesstoken', '${GITHUB_TOKEN}', '--pr', '${BACKPORT_PR_NUMBER}'];
  if (branch) {
    command.push(...['--branch', branch]);
  } else {
    command.push('--non-interactive');
  }
  task.exec(command.join(' '), { cwd: backportHome });
  return task;
}

const debugDotnet = project.github.addWorkflow('debug-dotnet');
debugDotnet.on({ push: { branches: ['epolon/debugging-dotnet-versions'] } });
debugDotnet.addJob('debug', {
  runsOn: ['ubuntu-latest'],
  permissions: JobPermission.NONE,
  steps: [{
    uses: 'actions/setup-dotnet@v2',
    with: {
      'dotnet-version': '3.x',
    },
  }],
});

project.synth();
