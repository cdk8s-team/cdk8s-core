/**
 * Helper functions to allow compatibility with both constructs v3 and v10
 */

import { Construct, IConstruct, Node } from 'constructs';
//
// Interfaces from constructs v3 that do not exist in constructs v10
//

export interface Dependency {
  source: IConstruct;
  target: IConstruct;
};

export interface ValidationError {
  readonly source: Construct;
  readonly message: string;
}

/**
 * Determine whether v10 of `constructs` is being used as a dependency.
 */
function isConstructsV10(node: Node): boolean {
  return typeof((node as any).uniqueId) !== 'string';
}

export function getDependencies(node: Node): Dependency[] {
  if (!isConstructsV10(node)) {
    return node.dependencies as any;
  }

  return node.findAll().map(n => (n as any).node.dependencies.map((ndep: any) => {
    return {
      source: n,
      target: ndep,
    };
  })).flat();
}

export function getValidationErrors(node: Node): string[] {
  if (isConstructsV10(node)) {
    return node.findAll().map((n) => (n as any).node.validate()).flat();
  }

  const errors = node.validate() as any as ValidationError[];
  return errors.map(e => `[${Node.of(e.source).path}] ${e.message}`);
}
