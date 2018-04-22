import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthProvider } from './../providers/auth/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor (public injector: Injector) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).do(
        (res) => {
            if (res instanceof HttpResponse) {
                console.log('---> interceptor res:', res);
                console.log('---> interceptor req:', req);
            }
        },
        (error: HttpErrorResponse) => {
            console.log('---> interceptor erro:', error);
            if (error instanceof HttpErrorResponse) {
                if (error.status >= 400 && error.status <= 403) {
                    const authProvider = this.injector.get(AuthProvider);
                    authProvider.logout();
                }
            }
        });
    }
}