import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Persona } from '../../../interfaces';

@Component({
  selector: 'modal-persona',
  templateUrl: 'modal-persona.html'
})
export class ModalPersonaComponent {

  persona: Persona;

  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController ) {
    console.log('Hello ModalPersonaComponent Component');
    this.persona = new Persona(this.navParams.data['persona']);
  }

  close() {
    this.viewCtrl.dismiss(null);
  }

}
