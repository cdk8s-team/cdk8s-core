import { ApiObject } from './api-object';
import { App } from './app';
import { Lazy } from './lazy';

/**
 * Context object for a specific resolution process.
 */
export class ResolutionContext {

  /**
   * The replaced value that was set via the `replaceValue` method.
   */
  public replacedValue: any;

  /**
   * Whether or not the value was replaced by invoking the `replaceValue` method.
   */
  public replaced: boolean = false;

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
    public readonly value: any) {
  }

  /**
   * Replaces the original value in this resolution context
   * with a new value. The new value is what will end up in the manifest.
   */
  public replaceValue(newValue: any) {
    this.replacedValue = newValue;
    this.replaced = true;
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

  // give dibs to the resolvers as they are more specific
  const context = new ResolutionContext(apiObject, key, value);
  for (const resolver of resolvers) {
    resolver.resolve(context);
    if (context.replaced) {
      // stop when the first resolver replaces the value.
      return resolve(key, context.replacedValue, apiObject);
    }
  }

  // array - resolve each element
  if (Array.isArray(value)) {
    return value.map((x, i) => resolve([...key, `${i}`], x, apiObject));
  }

  // dictionrary - resolve leafs
  if (value.constructor == Object) {
    const result: any = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = resolve([...key, k], v, apiObject);
    }
    return result;
  }

  return value;

}
