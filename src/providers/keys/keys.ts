import { Injectable } from '@angular/core';

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

  get combatKeys(): any[] {
    return [
      { label : "Damage", name : "damage" },
      { label : "Attack", name : "attack" },
      { label : "Defense", name : "defense" },
      { label : "Life", name : "life" },
      { label : "Initiative", name : "haste" },
    ];
  }

  get savingPoints(): any[] {
    return [
      { label : "Resistance", name : "resist"},
      { label : "Reflex", name : "reflex"},
      { label : "Fortitude", name : "fort"},
      { label : "Will", name : "will"},
    ];
  }

}
