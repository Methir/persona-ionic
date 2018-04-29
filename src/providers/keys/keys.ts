import { Injectable } from '@angular/core';

import { Item, Key } from '../../interfaces';
import { Effect } from './new-effect-keys';
import { Skill } from './new-skill-keys';

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

  get skillItems(): Item[] {
    return (new Skill).items; 
  }

  get effectItems(): Item[] {
    return (new Effect).items; 
  }

}
