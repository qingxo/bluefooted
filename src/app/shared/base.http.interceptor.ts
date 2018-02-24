import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const flag = req.headers.get('customer-type');
    let authReq = req.clone();
    if (undefined === flag || 'true' !== flag) {
      authReq = req.clone({ headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded') });
    }
    return next.handle(authReq);
  }
}
