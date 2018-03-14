import { TotalPoints } from './../../interfaces/total-points';
import { KeysProvider } from './../../providers/keys/keys';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Persona } from './../../interfaces/persona';
import { PersonaProvider } from '../../providers/persona/persona';

@IonicPage()
@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {

  forms: FormGroup;
  persona: Persona;
  totalPoints: TotalPoints;
  abilityKeys: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private keysProvider: KeysProvider,
              private personaProvider: PersonaProvider ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }

  ngOnInit() {
    this.abilityKeys = this.keysProvider.abilityKeys;
    this.persona = this.personaProvider.getPersona();
    this.totalPoints = this.personaProvider.getTotalPoints(this.persona);
    this.forms = this.formBuilder.group({
      name : [this.persona.name],
      np : [this.persona.np],
      for : [this.persona.for],
      des : [this.persona.des],
      con : [this.persona.con],
      int : [this.persona.int],
      sab : [this.persona.sab],
      car : [this.persona.car],
    });
    this.forms.valueChanges.subscribe(
      (persona) => {
        this.totalPoints = this.personaProvider.getTotalPoints(persona);
      } 
    );
  }

}
