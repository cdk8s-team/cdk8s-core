import { ApiObject } from './api-object';

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

export interface IValueResolver {

  resolve(context: ResolutionContext): void;
}