import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the KeysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KeysProvider {

  get abilityKeys(): any[] {
    return [
      { label : "Força", name : "for" },
      { label : "Destreza", name : "des" }, 
      { label : "Constituição", name : "con" }, 
      { label : "Inteligencia", name : "int" }, 
      { label : "Sabedoria", name : "sab" }, 
      { label : "Carisma", name : "car" }
    ];
  }

  constructor(public http: HttpClient) {
    console.log('Hello KeysProvider Provider');
  }

}
