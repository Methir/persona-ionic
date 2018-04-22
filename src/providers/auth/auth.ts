import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';

import { Token } from './../../interfaces/token';
import { HelperProvider } from './../helper/helper';
import { PasswordClient } from './password-client';

@Injectable()
export class AuthProvider {

  private baseUrl: string;
  public authUser: BehaviorSubject<Token>; 
  public seeAuthUser: Observable<Token>; 

  constructor(  public http: HttpClient,
                private storage: Storage,
                private helperProvider: HelperProvider  ) {
    console.log('AuthProvider');
    this.baseUrl = this.helperProvider.baseUrl;
  }

  authenticate(username, password): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/oauth/token`, new PasswordClient(username, password));
  }

  logout() {
    this.storage.remove('persona_token').then(() => {
      this.authUser.next(null);
    }).catch(() => {
      this.authUser.next(null);
    });
  }

  getUser(token: Token): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/user`);
  }

}
