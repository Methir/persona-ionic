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
  bonusPoints: any;
  abilityKeys: any[];
  combatKeys: any[];
  savingKeys: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private keysProvider: KeysProvider,
              private personaProvider: PersonaProvider ) {
    this.abilityKeys = this.keysProvider.abilityKeys;
    this.combatKeys = this.keysProvider.combatKeys;
    this.savingKeys = this.keysProvider.savingKeys;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }

  ngOnInit() {
    this.persona = this.personaProvider.getPersona();
    this.totalPoints = this.personaProvider.getTotalPoints(this.persona);
    this.bonusPoints = this.personaProvider.getBonusPoints(this.persona);
    this.forms = this.formBuilder.group({
      name : [this.persona.name],
      np : [this.persona.np],
      forca : [this.persona.forca],
      destreza : [this.persona.destreza],
      constituicao : [this.persona.constituicao],
      inteligencia : [this.persona.inteligencia],
      sabedoria : [this.persona.sabedoria],
      carisma : [this.persona.carisma],
      dano : [this.persona.dano],
      ataque : [this.persona.ataque],
      defesa : [this.persona.defesa],
      vida : [this.persona.vida],
      iniciativa : [this.persona.iniciativa],
      resistencia : [this.persona.resistencia],
      reflexo : [this.persona.reflexo],
      fortitude : [this.persona.fortitude],
      vontade : [this.persona.vontade],
    });
    this.forms.valueChanges.subscribe(
      (persona) => {
        this.totalPoints = this.personaProvider.getTotalPoints(persona);
        this.bonusPoints = this.personaProvider.getBonusPoints(persona);
      } 
    );
  }

  isHidden(element){
    console.log(element);
  }

}
