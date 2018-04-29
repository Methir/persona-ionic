import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Persona, HttpSuccessResponse, TotalPoints} from '../../interfaces';
import { KeysProvider, HelperProvider } from './../';
import { NewPersona } from './new-persona';

@Injectable()
export class PersonaProvider {

  private baseUrl: string;

  constructor(  public http: HttpClient,
                private helperProvider: HelperProvider, 
                private keysProvider: KeysProvider ) {
    console.log('PersonaProvider');
    this.baseUrl = this.helperProvider.baseUrl;
  }

  getNewPersona(): Persona {
    return new NewPersona();
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

  getTotalPoints(persona: Persona): TotalPoints {
    let total: TotalPoints = {ability: 0, combat: 0, saving: 0, effect: 0, skill: 0, all: 0};

    total.ability = this.helperProvider.sumKeys(persona, this.keysProvider.abilityKeys);
    total.ability -= 60;
    total.combat = this.helperProvider.sumKeys(persona, this.keysProvider.combatKeys);
    total.saving = this.helperProvider.sumKeys(persona, this.keysProvider.savingKeys);
    total.effect = persona.feitos.reduce((total, feito) => total + feito.points, 0);
    total.skill = Math.ceil((persona.pericias.reduce((total, pericia) => total + pericia.points, 0))/4);

    total.all = total.ability + total.combat + total.saving + total.effect + total.skill;
    return total;
  }

  getBonusPoints(persona: Persona) {
    let bonus = new NewPersona();

    bonus.forca = Math.floor((persona.forca-10)/2);
    bonus.destreza = Math.floor((persona.destreza-10)/2);
    bonus.constituicao = Math.floor((persona.constituicao-10)/2);
    bonus.inteligencia = Math.floor((persona.inteligencia-10)/2);
    bonus.sabedoria = Math.floor((persona.sabedoria-10)/2);
    bonus.carisma = Math.floor((persona.carisma-10)/2);

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
