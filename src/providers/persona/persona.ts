import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../../interfaces/persona';

/*
  Generated class for the PersonaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
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
  };

  constructor() {
    console.log('PersonaProvider');
  }

  getPersona() {
    return this.persona;
  }

}
