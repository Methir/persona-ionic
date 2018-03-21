import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private baseUrl: string = 'https://httpbin.org'; 

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  authenticate(data: FormGroup) {
    return this.http.post(`${this.baseUrl}/post`, JSON.stringify(data.value))
  }

}
