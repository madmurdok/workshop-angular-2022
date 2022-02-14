import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  NavigationStart,
  Params,
  Router,
  RouterEvent,
} from '@angular/router';
import { Subject } from 'rxjs';
import { Dictionary } from '../interfaces/app-types.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivatedRouteWrapperService {
  private routerParams: Params = {};
  public snapshot: { params: Params; queryParams: Params };
  private params$ = new Subject<Params>();
  private route$ = new Subject<void>();
  private newRouterStable = true;

  public get params(): Params {
    return this.routerParams;
  }

  public get url() {
    return this.router.url;
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.snapshot = {
      params: {},
      get queryParams(): Params {
        return route.snapshot.queryParams;
      },
    };
    router.events.subscribe(value =>
      this.handleRouteChange(value as RouterEvent)
    );
  }

  public getStateParams(route?: ActivatedRoute): Params {
    const params: Params = {};
    this.getParams(route || this.route.root.snapshot, params);
    return params;
  }

  private getParams(
    route: ActivatedRoute | ActivatedRouteSnapshot,
    params: Dictionary<string>
  ) {
    if (route.children.length) {
      route.children.forEach((r: any) =>
        this.getParams(r as ActivatedRoute, params)
      );
    }
    if (Object.keys(route.params).length) {
      Object.assign(params, route.params);
    }
    if (Object.keys(route.queryParams).length) {
      Object.assign(params, route.queryParams);
    }
    if (Object.keys(route.data).length) {
      Object.assign(params, route.data);
    }
  }

  private handleRouteChange(value: RouterEvent) {
    if (value instanceof NavigationStart) {
      this.newRouterStable = false;
    }
    if (!(value instanceof NavigationEnd)) {
      return;
    }
    this.newRouterStable = true;

    const newParams = this.getStateParams();
    const haveParamsChanged = this.checkChanges(this.params, newParams);
    if (
      haveParamsChanged &&
      !this.route.root.snapshot.children.some(
        i => i.routeConfig && i.routeConfig.path === '**'
      )
    ) {
      this.routerParams = newParams;
      this.params$.next(this.params);
    } else {
      this.route$.next();
    }
  }

  private checkChanges(
    oldParams: Dictionary<string>,
    newParams: Dictionary<string>
  ): boolean {
    const oldKeys = new Set(Object.keys(oldParams));
    const newKeys = new Set(Object.keys(newParams));
    const sameNames =
      Array.from(oldKeys).every(key => newKeys.has(key)) &&
      oldKeys.size === newKeys.size;
    const sameValues = Array.from(oldKeys).every(
      key => oldParams[key] === newParams[key]
    );
    return !(sameNames && sameValues);
  }
}
