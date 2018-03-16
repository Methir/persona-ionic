import { Injectable } from '@angular/core';

@Injectable()
export class KeysProvider {

  get abilityKeys(): any[] {
    return [
      { label : "Força", name : "forca" },
      { label : "Destreza", name : "destreza" }, 
      { label : "Constituição", name : "constituicao" }, 
      { label : "Inteligência", name : "inteligencia" }, 
      { label : "Sabedoria", name : "sabedoria" }, 
      { label : "Carisma", name : "carisma" }
    ];
  }

  get combatKeys(): any[] {
    return [
      { label : "Dano", name : "dano" },
      { label : "Ataque", name : "ataque" },
      { label : "Defesa", name : "defesa" },
      { label : "Vida", name : "vida" },
      { label : "Iniciativa", name : "iniciativa" },
    ];
  }

  get savingKeys(): any[] {
    return [
      { label : "Resistência", name : "resistencia"},
      { label : "Reflexo", name : "reflexo"},
      { label : "Fortitude", name : "fortitude"},
      { label : "Vontade", name : "vontade"},
    ];
  }

}
