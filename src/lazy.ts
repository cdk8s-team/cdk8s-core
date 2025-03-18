const LAZY_SYMBOL = Symbol.for("cdk8s.Lazy");

export class Lazy {
  public static any(producer: IAnyProducer): any {
    return new Lazy(producer) as unknown as any;
  }

  /**
   * Checks if an object is a Lazy instance
   * @param obj The object to check
   */
  static isLazy(obj: any): boolean {
    return obj !== null && typeof obj === "object" && LAZY_SYMBOL in obj;
  }

  /**
   * Implements `instanceof Lazy` using the more reliable `Lazy.isLazy` static method
   *
   * @param obj The object to check
   * @internal
   */
  public static [Symbol.hasInstance](obj: any): boolean {
    return Lazy.isLazy(obj);
  }

  private constructor(private readonly producer: IAnyProducer) {
    Object.defineProperty(this, LAZY_SYMBOL, { value: true });
  }

  public produce(): any {
    return this.producer.produce();
  }
}

export interface IAnyProducer {
  produce(): any;
}
