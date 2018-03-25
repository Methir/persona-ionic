import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Key, Persona, TotalPoints } from './../../interfaces';
import { PersonaProvider, KeysProvider, HelperProvider, AuthProvider } from '../../providers';

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
  abilityKeys: Key[];
  combatKeys: Key[];
  savingKeys: Key[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private authProvider: AuthProvider,
              private helperProvider: HelperProvider,
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
    this.persona = this.navParams.data;
    this.totalPoints = this.personaProvider.getTotalPoints(this.persona);
    this.bonusPoints = this.personaProvider.getBonusPoints(this.persona);
    this.forms = this.formBuilder.group({
      id : [this.persona.id],
      nome : [ this.persona.nome,
        [ Validators.required,
          Validators.min(4),
          Validators.max(20)] ],
      np : [this.persona.np, Validators.required],
      forca : [ this.persona.forca, Validators.required],
      destreza : [this.persona.destreza, Validators.required],
      constituicao : [this.persona.constituicao, Validators.required],
      inteligencia : [this.persona.inteligencia, Validators.required],
      sabedoria : [this.persona.sabedoria, Validators.required],
      carisma : [this.persona.carisma, Validators.required],
      dano : [this.persona.dano, Validators.required],
      ataque : [this.persona.ataque, Validators.required],
      defesa : [this.persona.defesa, Validators.required],
      vida : [this.persona.vida, Validators.required],
      iniciativa : [this.persona.iniciativa, Validators.required],
      resistencia : [this.persona.resistencia, Validators.required],
      reflexo : [this.persona.reflexo, Validators.required],
      fortitude : [this.persona.fortitude, Validators.required],
      vontade : [this.persona.vontade, Validators.required],
    });
    this.forms.valueChanges.subscribe(
      (persona) => {
        this.totalPoints = this.personaProvider.getTotalPoints(persona);
        this.bonusPoints = this.personaProvider.getBonusPoints(persona);
      } 
    );
  }

  savePersona() {
    if (this.forms.invalid) {
      this.helperProvider.persistAlert('Formulário invalido! Tente novamente ßou refaça.');
    } else {
      this.personaProvider.savePersona(this.forms.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.helperProvider.timeAlert('Salvo com sucesso!');
          this.authProvider.authUser.next(this.authProvider.authUser.getValue());
          this.navCtrl.pop();
        },
        (erro) => {
          console.log(erro);
          console.log(erro.error.message);
          //this.authProvider.authUser.next(null);
          this.helperProvider.persistAlert('Erro ao tentar salvar! Algo de errado não está certo.');
      });
    }
  }

  deletePersona() {
    if (this.persona.id) {
      this.personaProvider.deletePersona(this.persona.id)
      .subscribe(
        (data) => {
          console.log(data);
          this.helperProvider.timeAlert('Salvo com sucesso!');
          this.authProvider.authUser.next(this.authProvider.authUser.getValue());
          this.navCtrl.pop();
        },
        (erro) => {
          console.log(erro);
          console.log(erro.error.message);
          //this.authProvider.authUser.next(null);
          this.helperProvider.persistAlert('Erro ao tentar deletar! Algo de errado não está certo.');
      });
    }else{
      this.navCtrl.pop();
    }
  }
  
}
