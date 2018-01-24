import { RouteReuseStrategy } from '@angular/router';
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import Infos from './Infos';
// This impl. bases upon one that can be found in the router's test cases.
export class CustomReuseStrategy implements RouteReuseStrategy {


  handlers: { [key: string]: DetachedRouteHandle } = {};

  /**
     * Determines if this route (and its subtree) should be detached to be reused later.
     * Fired when shouldReuseRoute returns false
     * If it returns true, the method store will be fired.
     * @param route current route
     */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // console.debug('CustomReuseStrategy:shouldDetach', route);
    return true;
  }

  /**
   * Determines the action we want to do when storing a route.
   * Fired when shouldDeatch returns true.
   * @param route : current route
   * @param handle : identifies the stored component
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // console.debug('CustomReuseStrategy:store', route, handle);

    this.handlers[route.routeConfig.path] = handle;
  }

  /**
   * Determines if the current route should be reused from the stored components or not.
   * Fired when shouldReuseRoute returns false
   * @param route current route
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig.path === Infos['killUrl']) {
      Infos['killUrl'] = '';
      return false;
    }
    return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
  }

  /**
    * Determines which route we want to retrieve if shouldAttach returns true.
    * Fired when shouldAttache returns true
    * @param route current route
    */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return this.handlers[route.routeConfig.path];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
    return future.routeConfig === curr.routeConfig;
  }
}
