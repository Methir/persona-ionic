import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthProvider } from '../providers';
import { Token } from '../interfaces';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor (public injector: Injector) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        const authProvider: AuthProvider = this.injector.get(AuthProvider);
        let token: Token = authProvider.authUser.getValue();
        if(token){
            req = req.clone({
                setHeaders: {
                    'Accept' : 'application/json',
                    'Authorization' : `${token.token_type} ${token.access_token}`
                }
            });
        }
        return next.handle(req);
    }
}