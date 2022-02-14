import { HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestOptionsInterface } from '../interfaces/request-options.interface';

export class RequestOptionsModel implements  RequestOptionsInterface {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;

  constructor (options: Partial<RequestOptionsInterface>){
    Object.assign(this, options)
  }
}
