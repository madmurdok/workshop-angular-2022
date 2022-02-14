import { Observable, of} from 'rxjs';

export class GetResponseModel<T> {
  private _createdAt: number;
  private _response$: Observable<T | null>;

  constructor() {
    this._createdAt = new Date().getTime();
    this._response$ = of(null);
  }

  public get createdAt() {
    return this._createdAt;
  }
  public set createdAt(createdAt: number) {
    this._createdAt = createdAt;
  }

  public get response$() {
    return this._response$;
  }

  public set response$(response: Observable<T | null>) {
    this._response$ = response;
  }
}


