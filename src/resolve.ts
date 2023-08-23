import { ApiObject } from './api-object';
import { App } from './app';
import { Lazy } from './lazy';

export class ResolutionContext {

  private _newValue: any;

  constructor(
    public readonly obj: ApiObject,
    public readonly key: string[],
    public readonly value: any) {
    this._newValue = value;
  }

  public replaceValue(newValue: any) {
    this._newValue = newValue;
  }

  public get newValue(): any {
    return this._newValue;
  }

}

export interface IResolver {

  resolve(context: ResolutionContext): void;
}

export class LazyResolver implements IResolver {

  public resolve(context: ResolutionContext): void {
    if (context.value instanceof Lazy) {
      const resolved = context.value.produce();
      context.replaceValue(resolved);
    }
  }
}

export class ImplicitTokenResolver implements IResolver {

  public resolve(context: ResolutionContext): void {

    if (typeof (context.value.resolve) === 'function') {
      const resolved = context.value.resolve();
      context.replaceValue(resolved);
    }

  }

}

export function resolve(key: string[], value: any, apiObject: ApiObject): any {

  const resolvers = App.of(apiObject).resolvers;

  if (value == null) {
    return value;
  }

  const context = new ResolutionContext(apiObject, key, value);
  for (const resolver of resolvers) {
    resolver.resolve(context);
    if (context.newValue !== value) return resolve(key, context.newValue, apiObject);
  }

  if (typeof(value) !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((x, i) => resolve([...key, `${i}`], x, apiObject));
  }

  const result: any = {};
  for (const [k, v] of Object.entries(value)) {
    result[k] = resolve([...key, k], v, apiObject);
  }
  return result;

}
