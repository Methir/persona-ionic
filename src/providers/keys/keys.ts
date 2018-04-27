import { Injectable } from '@angular/core';

import { Key } from './../../interfaces/key';
import { newEffect } from './new-effect-keys';

@Injectable()
export class KeysProvider {

  constructor() {
    console.log('KeysProvider')
  }

  get abilityKeys(): Key[] {
    return [
      { label : "Força", name : "forca" },
      { label : "Destreza", name : "destreza" }, 
      { label : "Constituição", name : "constituicao" }, 
      { label : "Inteligência", name : "inteligencia" }, 
      { label : "Sabedoria", name : "sabedoria" }, 
      { label : "Carisma", name : "carisma" }
    ];
  }

  get combatKeys(): Key[] {
    return [
      { label : "Dano", name : "dano" },
      { label : "Ataque", name : "ataque" },
      { label : "Defesa", name : "defesa" },
      { label : "Vida", name : "vida" },
      { label : "Iniciativa", name : "iniciativa" },
    ];
  }

  get savingKeys(): Key[] {
    return [
      { label : "Resistência", name : "resistencia"},
      { label : "Reflexo", name : "reflexo"},
      { label : "Fortitude", name : "fortitude"},
      { label : "Vontade", name : "vontade"},
    ];
  }

  get effectItems(): any[] {
    return (new newEffect).items; 
  }

}
