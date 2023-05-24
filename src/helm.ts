import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Construct } from 'constructs';
import { _child_process } from './_child_process';
import { Include } from './include';
import { Names } from './names';
import { Yaml } from './yaml';

const MAX_HELM_BUFFER = 10 * 1024 * 1024;

/**
 * Options for `Helm`.
 */
export interface HelmProps {
  /**
   * The chart name to use. It can be a chart from a helm repository or a local directory.
   *
   * This name is passed to `helm template` and has all the relevant semantics.
   *
   * @example "./mysql"
   * @example "bitnami/redis"
   */
  readonly chart: string;

  /**
   * Chart repository url where to locate the requested chart
   */
  readonly repo?: string;

  /**
   * Version constraint for the chart version to use.
   * This constraint can be a specific tag (e.g. 1.1.1)
   * or it may reference a valid range (e.g. ^2.0.0).
   * If this is not specified, the latest version is used
   *
   * This name is passed to `helm template --version` and has all the relevant semantics.
   *
   * @example "1.1.1"
   * @example "^2.0.0"
   */
  readonly version?: string;

  /**
   * Scope all resources in to a given namespace.
   */
  readonly namespace?: string;

  /**
   * The release name.
   *
   * @see https://helm.sh/docs/intro/using_helm/#three-big-concepts
   * @default - if unspecified, a name will be allocated based on the construct path
   */
  readonly releaseName?: string;

  /**
   * Values to pass to the chart.
   *
   * @default - If no values are specified, chart will use the defaults.
   */
  readonly values?: { [key: string]: any };

  /**
   * The local helm executable to use in order to create the manifest the chart.
   *
   * @default "helm"
   */
  readonly helmExecutable?: string;

  /**
   * Additional flags to add to the `helm` execution.
   *
   * @default []
   */
  readonly helmFlags?: string[];
}

/**
 * Represents a Helm deployment.
 *
 * Use this construct to import an existing Helm chart and incorporate it into your constructs.
 */
export class Helm extends Include {
  /**
   * The helm release name.
   */
  public readonly releaseName: string;

  constructor(scope: Construct, id: string, props: HelmProps) {
    const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdk8s-helm-'));

    const args = new Array<string>();
    args.push('template');

    // values
    if (props.values && Object.keys(props.values).length > 0) {
      const valuesPath = path.join(workdir, 'overrides.yaml');
      fs.writeFileSync(valuesPath, Yaml.stringify(props.values));
      args.push('-f', valuesPath);
    }

    if (props.repo) {
      args.push('--repo', props.repo);
    }

    if (props.version) {
      args.push('--version', props.version);
    }

    if (props.namespace) {
      args.push('--namespace', props.namespace);
    }

    // custom flags
    if (props.helmFlags) {
      args.push(...props.helmFlags);
    }

    // release name
    // constraints: https://github.com/helm/helm/issues/6006
    const releaseName = props.releaseName ?? Names.toDnsLabel(scope, { maxLen: 53, extra: [id] });
    args.push(releaseName);

    // chart
    args.push(props.chart);

    const prog = props.helmExecutable ?? 'helm';
    const outputFile = renderTemplate(workdir, prog, args);

    super(scope, id, { url: outputFile });

    this.releaseName = releaseName;
  }
}

function renderTemplate(workdir: string, prog: string, args: string[]) {
  const helm = _child_process.spawnSync(prog, args, {
    maxBuffer: MAX_HELM_BUFFER,
  });

  if (helm.error) {
    const err = helm.error.message;
    if (err.includes('ENOENT')) {
      throw new Error(`unable to execute '${prog}' to render Helm chart. Is it installed on your system?`);
    }

    throw new Error(`error while rendering a helm chart: ${err}`);
  }

  if (helm.status !== 0) {
    throw new Error(helm.stderr.toString());
  }

  const outputFile = path.join(workdir, 'chart.yaml');
  const stdout = helm.stdout;
  fs.writeFileSync(outputFile, stdout);
  return outputFile;
}
