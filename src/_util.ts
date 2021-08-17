export interface SanitizeOptions {
  /**
   * Do not include empty objects (no keys).
   * @default false
   */
  readonly filterEmptyObjects?: boolean;

  /**
   * Do not include arrays with no items.
   * @default false
   */
  readonly filterEmptyArrays?: boolean;

  /**
   * Sort dictionary keys.
   * @default true
   */
  readonly sortKeys?: boolean;
}

export function sanitizeValue(obj: any, options: SanitizeOptions = { }): any {
  if (obj == null) {
    return undefined;
  }

  if (typeof(obj) !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {

    if (options.filterEmptyArrays && obj.length === 0) {
      return undefined;
    }

    return obj.map(x => sanitizeValue(x, options));
  }

  if (obj.constructor.name !== 'Object') {
    throw new Error(`can't render non-simple object of type '${obj.constructor.name}'`);
  }

  const newObj: { [key: string]: any } = { };

  const sortKeys = options.sortKeys ?? true;
  const keys = sortKeys ? Object.keys(obj).sort() : Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    const newValue = sanitizeValue(value, options);
    if (newValue != null) {
      newObj[key] = newValue;
    }
  }

  if (options.filterEmptyObjects && Object.keys(newObj).length === 0) {
    return undefined;
  }

  return newObj;
}

/**
 * Type of a map mapping strings to some arbitrary type
 */
export type Obj<T> = { [key: string]: T };

/**
  * Return whether the given value is an object
  *
  * Even though arrays and instances of classes technically are objects, we
  * usually want to treat them differently, so we return false in those cases.
  */
export function isObject(x: any): x is Obj<any> {
  return x !== null && typeof x === 'object' && !Array.isArray(x)
       && x.constructor.name === 'Object';
}

/**
 * Recursively merge objects together
 *
 * The leftmost object is mutated and returned. Arrays are not merged
 * but overwritten just like scalars.
 *
 * If an object is merged into a non-object, the non-object is lost.
 */
export function deepMerge(...objects: Array<Obj<any> | undefined>) {
  function mergeOne(target: Obj<any>, source: Obj<any>) {
    for (const key of Object.keys(source)) {
      const value = source[key];

      if (isObject(value)) {
        // if the value at the target is not an object, override it with an
        // object so we can continue the recursion
        if (!isObject(target[key])) {
          target[key] = value;
        }
        mergeOne(target[key], value);
      } else if (typeof value !== 'undefined') {
        target[key] = value;
      }
    }
  }

  const others = objects.filter(x => x != null) as Array<Obj<any>>;

  if (others.length === 0) { return {}; }
  const into = others.splice(0, 1)[0];

  others.forEach(other => mergeOne(into, other));
  return into;
}
