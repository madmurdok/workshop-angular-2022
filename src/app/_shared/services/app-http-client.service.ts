import { Injectable } from '@angular/core';
import { RequestOptionsInterface } from '../interfaces/request-options.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dictionary } from '../interfaces/app-types.interface';
import { shareReplay } from 'rxjs/operators';
import { GetResponseModel } from '../models/get-response.model';


const timeStep = 60000; // minute for cache
const CACHE_SIZE = 1; // get last 1 result

@Injectable({
  providedIn: 'root',
})
export class AppHttpClientService {
  private storage: Dictionary<GetResponseModel<any>> = {};

  constructor(public http: HttpClient) {}

  /**
   * GET request
   * @param  endPoint it doesn't need / in front of the end point
   * @param  options options of the request like headers, body, etc.
   */
  public Get<T>(
    endPoint: string,
    options?: RequestOptionsInterface
  ): Observable<T> {
    return this.get<T>(endPoint, options);
  }

  private get<T>(
    resultUrl: string,
    options?: RequestOptionsInterface
  ): Observable<T> {
    let cache = this.storage[resultUrl];
    // we suppose that options don't make any significant changes to the endpoint result
    if (!cache || this.isExpired(cache.createdAt)) {
      cache = cache || new GetResponseModel<T>();
      cache.response$ = this.http
        .get<T>(resultUrl, options)
        .pipe(shareReplay(CACHE_SIZE));
      cache.createdAt = new Date().getTime();
      this.storage[resultUrl] = cache;
    }

    return cache.response$;
  }

  /**
   * POST request
   * @param  endPoint end point of the apiLocalUrl
   * @param  params body of the request.
   * @param  options options of the request like headers, body, etc.
   */
  public Post<T>(
    endPoint: string,
    params: object,
    options?: RequestOptionsInterface
  ): Observable<T> {
    return this.http.post<T>(endPoint + endPoint, params, options);
  }

  /**
   * PUT request
   * @param endPoint end point of the apiLocalUrl
   * @param params body of the request.
   * @param options options of the request like headers, body, etc.
   */
  public Put<T>(
    endPoint: string,
    params: object,
    options?: RequestOptionsInterface
  ): Observable<T> {
    return this.http.put<T>(endPoint + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param endPoint end point of the apiLocalUrl
   * @param  options options of the request like headers, body, etc.
   */
  public Delete<T>(
    endPoint: string,
    options?: RequestOptionsInterface
  ): Observable<T> {
    return this.http.delete<T>(endPoint + endPoint, options);
  }

  // noinspection JSMethodCanBeStatic
  private isExpired(createdAt: number): boolean {
    const time = new Date().getTime();
    return time - createdAt > timeStep; // todo check edge conditions
  }
}

