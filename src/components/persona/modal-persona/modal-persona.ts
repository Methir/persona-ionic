import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Persona, Key, TotalPoints } from '../../../interfaces';
import { KeysProvider } from '../../../providers';

@Component({
  selector: 'modal-persona',
  templateUrl: 'modal-persona.html'
})
export class ModalPersonaComponent {

  total: TotalPoints;
  bonus: Persona;
  persona: Persona;
  abilityKeys: Key[];
  combatKeys: Key[];
  savingKeys: Key[];

  constructor(public navParams: NavParams, 
              private keysProvider: KeysProvider,
              public viewCtrl: ViewController ) {
    console.log('Hello ModalPersonaComponent Component');
    this.abilityKeys = this.keysProvider.abilityKeys;
    this.combatKeys = this.keysProvider.combatKeys;
    this.savingKeys = this.keysProvider.savingKeys;
    this.persona = this.navParams.data['persona'];
    this.bonus = this.navParams.data['bonus'];
    this.total = this.navParams.data['total'];
  }

  close() {
    this.viewCtrl.dismiss(null);
  }

}
