import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Token } from './../../interfaces/token';
import { HelperProvider } from './../helper/helper';
import { PasswordClient } from './password-client';

@Injectable()
export class AuthProvider {

  private baseUrl: string;
  public authUser: BehaviorSubject<Token>; 
  public readonly seeAuthUser: Observable<Token>; 

  constructor(  public http: HttpClient,
                private helperProvider: HelperProvider) {
    console.log('AuthProvider');
    this.baseUrl = this.helperProvider.baseUrl;
    this.authUser = new BehaviorSubject(null);
    this.seeAuthUser = this.authUser.asObservable();
  }

  authenticate(username, password) {
    return this.http.post<Token>(`${this.baseUrl}/oauth/token`, new PasswordClient(username, password));
  }

  getUser(token: Token): Observable<any> {
    let headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Authorization' : `${token.token_type} ${token.access_token}`,
    });
    return this.http.get(`${this.baseUrl}/api/user`, {headers: headers});
  }

}
