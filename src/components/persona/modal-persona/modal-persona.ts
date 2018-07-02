import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Persona, Key, TotalPoints } from '../../../interfaces';

@Component({
  selector: 'modal-persona',
  templateUrl: 'modal-persona.html'
})
export class ModalPersonaComponent {

  total: TotalPoints;
  bonus: any;
  persona: Persona;
  abilityKeys: Key[];
  combatKeys: Key[];
  savingKeys: Key[];

  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController ) {
    console.log('Hello ModalPersonaComponent Component');
    this.persona = new Persona(this.navParams.data['persona']);
    this.abilityKeys = this.persona.abilityKeys;
    this.combatKeys = this.persona.combatKeys;
    this.savingKeys = this.persona.savingKeys;
    this.bonus = this.persona.bonusPoints;
    this.total = this.navParams.data['total'];
  }

  close() {
    this.viewCtrl.dismiss(null);
  }

}
