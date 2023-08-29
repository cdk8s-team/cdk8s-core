import { ApiObject } from './api-object';
import { App } from './app';
import { Lazy } from './lazy';

/**
 * Context object for a specific resolution process.
 */
export class ResolutionContext {

  /**
   * The final value of the resolution process. If the resolver invoked
   * `replaceValue`, this will be the replaced value, otherwise, it is the original
   * value.
   */
  public value: any;

  constructor(
    /**
     * Which ApiObject is currently being resolved.
     */
    public readonly obj: ApiObject,
    /**
     * Which key is currently being resolved.
     */
    public readonly key: string[],
    /**
     * The value associated to the key currently being resolved.
     */
    public readonly originalValue: any) {
    this.value = originalValue;
  }

  /**
   * Replaces the original value in this resolution context
   * with a new value. The new value is what will end up in the manifest.
   */
  public replaceValue(newValue: any) {
    this.value = newValue;
  }

}

/**
 * Contract for resolver objects.
 */
export interface IResolver {

  /**
   * This function is invoked on every property during cdk8s synthesis.
   * To replace a value, implementations must invoke `context.replaceValue`.
   */
  resolve(context: ResolutionContext): void;
}

/**
 * Resolvers instanecs of `Lazy`.
 */
export class LazyResolver implements IResolver {

  public resolve(context: ResolutionContext): void {
    if (context.value instanceof Lazy) {
      const resolved = context.value.produce();
      context.replaceValue(resolved);
    }
  }
}

/**
 * Resolves implicit tokens.
 */
export class ImplicitTokenResolver implements IResolver {

  public resolve(context: ResolutionContext): void {

    if (typeof (context.value.resolve) === 'function') {
      const resolved = context.value.resolve();
      context.replaceValue(resolved);
    }

  }

}

/**
 * Resolves any value attached to a specific ApiObject.
 */
export function resolve(key: string[], value: any, apiObject: ApiObject): any {

  const resolvers = App.of(apiObject).resolvers;

  if (value == null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((x, i) => resolve([...key, `${i}`], x, apiObject));
  }

  if (value.constructor == Object && Object.entries(value).length > 0) {
    const result: any = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = resolve([...key, k], v, apiObject);
    }
    return result;
  }

  const context = new ResolutionContext(apiObject, key, value);
  for (const resolver of resolvers) {
    resolver.resolve(context);
    if (context.value !== value) return resolve(key, context.value, apiObject);
  }

  return value;

}
