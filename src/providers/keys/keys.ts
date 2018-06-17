import { Injectable } from '@angular/core';

import { Item, Key } from '../../interfaces';
import { Pericia } from './pericia-keys';
import { Feito } from './feito-keys';

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

  get periciaItems(): Item[] {
    return (new Pericia).items; 
  }

  get feitoItems(): Item[] {
    return (new Feito).items; 
  }

}
