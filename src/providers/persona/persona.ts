import { TotalPoints } from './../../interfaces/total-points';
import { KeysProvider } from './../keys/keys';
import { Injectable } from '@angular/core';
import { Persona } from '../../interfaces/persona';

@Injectable()
export class PersonaProvider {

  private persona: Persona = {
    name : 'noob',
    np : 0,
    for : 10, 
    des : 10,
    con : 10,
    int : 10,
    sab : 10,
    car : 10,
    damage : 0,
    attack : 0,
    defense : 0,
    life : 0,
    haste : 0,
    resist : 0,
    reflex : 0,
    fort : 0,
    will : 0,
  };

  constructor( private keysProvider: KeysProvider ) {
    console.log('PersonaProvider');
  }

  getPersona() {
    return this.persona;
  }

  getTotalPoints(persona: Persona): TotalPoints {
    let total: TotalPoints = {ability:0, combat:0, all:0};
    
    for(let key of this.keysProvider.abilityKeys) {
      total.ability += persona[key.name];
    }
    total.ability -= 60;

    for(let key of this.keysProvider.combatKeys) {
      total.combat += persona[key.name];
    }

    total.all = total.ability + total.combat;
    return total;
  }

  getBonusPoints(persona: Persona) {
    let bonus = {damage:0, attack:0, defense:0, life:0, haste:0};

    bonus.damage = (persona.damage+(persona.for-10))/2;
    bonus.attack = persona.attack/2;
    bonus.defense = 10 + (persona.defense/2);
    bonus.life = persona.con + (persona.con-10)/2 + persona.life + persona.np;
    bonus.haste = persona.haste + (persona.des-10)/2;

    return bonus;
  }

}
