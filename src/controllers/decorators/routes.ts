import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

// interface RouteHandlerDesc extends PropertyDecorator {
//   value?: RequestHandler;
// }

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const patch = routeBinder(Methods.patch);
export const del = routeBinder(Methods.del);
export const put = routeBinder(Methods.put);
