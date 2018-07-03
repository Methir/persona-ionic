import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Persona, HttpSuccessResponse} from '../../interfaces';
import { HelperProvider } from './../';

@Injectable()
export class PersonaProvider {

  private baseUrl: string;

  constructor(  public http: HttpClient,
                private helperProvider: HelperProvider ) {
    console.log('PersonaProvider');
    this.baseUrl = this.helperProvider.baseUrl;
  }

  getNewPersona(): Persona {
    return new Persona();
  }

  savePersona(persona: Persona): Observable<HttpSuccessResponse> {
    if(persona.id){
      return this.http.put<HttpSuccessResponse>(`${this.baseUrl}/api/personas/${persona.id}`, persona);
    }else{
      return this.http.post<HttpSuccessResponse>(`${this.baseUrl}/api/personas`, persona);
    }
  }

  deletePersona(id: number): Observable<HttpSuccessResponse> {
    return this.http.delete<HttpSuccessResponse>(`${this.baseUrl}/api/personas/${id}`);
  }

  getAllPersonas(): Observable<HttpSuccessResponse> {
    return this.http.get<HttpSuccessResponse>(`${this.baseUrl}/api/personas`);
  }
}
