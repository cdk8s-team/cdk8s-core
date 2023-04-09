import { ApiObject } from './api-object';

export class ResolutionContext {

  public readonly scope: ApiObject;
  public readonly key: string[];

}

export interface ITokenResolver {

  resolve(context: ResolutionContext, value: any): any;
}