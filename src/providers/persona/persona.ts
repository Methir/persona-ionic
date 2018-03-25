import { AuthProvider } from './../auth/auth';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Persona, httpSuccessResponse, TotalPoints, Token} from '../../interfaces';
import { KeysProvider, HelperProvider } from './../';
import { NewPersona } from './new-persona';

@Injectable()
export class PersonaProvider {

  private baseUrl: string;

  constructor(  public http: HttpClient,
                private authProvider: AuthProvider,
                private helperProvider: HelperProvider, 
                private keysProvider: KeysProvider ) {
    console.log('PersonaProvider');
    this.baseUrl = this.helperProvider.baseUrl;
  }

  getNewPersona(): Persona {
    return new NewPersona();
  }

  savePersona(persona: Persona): Observable<any> {
    let token = this.authProvider.authUser.getValue();
    let headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Authorization' : `${token.token_type} ${token.access_token}`,
    });
    if(persona.id){
      return this.http.put(`${this.baseUrl}/api/personas/${persona.id}`, persona,{headers: headers});
    }else{
      return this.http.post(`${this.baseUrl}/api/personas`, persona, {headers: headers});
    }
  }

  deletePersona(id: number): Observable<any> {
    let token = this.authProvider.authUser.getValue();
    let headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Authorization' : `${token.token_type} ${token.access_token}`,
    });
    return this.http.delete(`${this.baseUrl}/api/personas/${id}`, {headers: headers});
  }

  syncPersona(token: Token): Observable<httpSuccessResponse> {
    let headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Authorization' : `${token.token_type} ${token.access_token}`,
    });
    console.log(headers);
    return this.http.get<httpSuccessResponse>(`${this.baseUrl}/api/personas`, {headers: headers});
  }

  getTotalPoints(persona: Persona): TotalPoints {
    let total: TotalPoints = {ability:0, combat:0, saving:0, all:0};
    
    total.ability = this.helperProvider.sumKeys(persona, this.keysProvider.abilityKeys);
    total.ability -= 60;
    total.combat = this.helperProvider.sumKeys(persona, this.keysProvider.combatKeys);
    total.saving = this.helperProvider.sumKeys(persona, this.keysProvider.savingKeys);
    total.all = total.ability + total.combat + total.saving;
    return total;
  }

  getBonusPoints(persona: Persona) {
    let bonus = { dano:0, ataque:0, defesa:0, vida:0, iniciativa:0, 
                  resistencia:0, reflexo:0, fortitude:0, vontade:0 };

    bonus.dano = (persona.dano+(persona.forca-10))/2;
    bonus.ataque = persona.ataque/2;
    bonus.defesa = 10 + (persona.defesa/2);
    bonus.vida = persona.constituicao + (persona.constituicao-10)/2 + persona.vida + persona.np;
    bonus.iniciativa = persona.iniciativa + (persona.destreza-10)/2;

    bonus.resistencia = persona.resistencia + (persona.constituicao-10)/2;
    bonus.reflexo = persona.reflexo + (persona.destreza-10)/2;
    bonus.fortitude = persona.fortitude + (persona.constituicao-10)/2;
    bonus.vontade = persona.vontade + (persona.sabedoria-10)/2;

    return bonus;
  }

}
