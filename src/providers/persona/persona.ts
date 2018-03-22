import { HelperProvider } from './../helper/helper';
import { HttpClient } from '@angular/common/http';
import { TotalPoints } from './../../interfaces/total-points';
import { KeysProvider } from './../keys/keys';
import { Injectable } from '@angular/core';
import { Persona } from '../../interfaces/persona';

@Injectable()
export class PersonaProvider {

  baseUrl: string = 'https://httpbin.org';

  private newPersona: Persona = {
    name : 'noob',
    np : 0,
    forca : 10, 
    destreza : 10,
    constituicao : 10,
    inteligencia : 10,
    sabedoria : 10,
    carisma : 10,
    dano : 0,
    ataque : 0,
    defesa : 0,
    vida : 0,
    iniciativa : 0,
    resistencia : 0,
    reflexo : 0,
    fortitude : 0,
    vontade : 0,
  };
  
  private personas: Persona[] = [{
    id: 1,
    name : 'Ninja',
    np : 3,
    forca : 12, 
    destreza : 18,
    constituicao : 14,
    inteligencia : 12,
    sabedoria : 14,
    carisma : 10,
    dano : 2,
    ataque : 8,
    defesa : 12,
    vida : 0,
    iniciativa : 1,
    resistencia : 0,
    reflexo : 2,
    fortitude : 0,
    vontade : 0,
  },
  {
    id: 2,
    name : 'Warrior',
    np : 3,
    forca : 18, 
    destreza : 14,
    constituicao : 18,
    inteligencia : 10,
    sabedoria : 12,
    carisma : 12,
    dano : 0,
    ataque : 8,
    defesa : 8,
    vida : 0,
    iniciativa : 0,
    resistencia : 1,
    reflexo : 0,
    fortitude : 1,
    vontade : 3,
  }]; 

  constructor(  public http: HttpClient,
                private helperProvider: HelperProvider, 
                private keysProvider: KeysProvider ) {
    console.log('PersonaProvider');
  }

  getNewPersona() {
    return this.newPersona;
  }

  savePersona(persona: Persona) {
    if(persona.id){
      this.personas = this.personas.map((p) => {
        if (p.id == persona.id){
          return persona;
        } else {
          return p
        }
      });
    }else{
      let id: number = this.personas.slice(-1)[0].id;
      persona.id = ++id;
      console.log(persona);
      this.personas.push(persona); 
      console.log(this.personas);
    }
    return this.http.put(`${this.baseUrl}/put`, persona);
  }

  syncAccount() {
    return this.http.post(`${this.baseUrl}/post`, JSON.stringify(this.personas));
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
