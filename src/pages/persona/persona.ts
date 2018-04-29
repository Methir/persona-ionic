import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Key, Persona, Item, TotalPoints, HttpSuccessResponse } from './../../interfaces';
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
  effectItems: Item[];
  skillItems: Item[];

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
    this.effectItems = this.keysProvider.effectItems;
    this.skillItems = this.keysProvider.skillItems;
    console.log('pagina persona carregada...');
  }

  ngOnInit() {
    this.persona = this.navParams.data;
    this.totalPoints = this.personaProvider.getTotalPoints(this.persona);
    this.bonusPoints = this.personaProvider.getBonusPoints(this.persona);
    this.forms = this.formBuilder.group({
      id : [this.persona.id],
      nome : [ this.persona.nome,
        [ Validators.required,
          Validators.min(1),
          Validators.max(25)] ],
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
      pericias : [this.persona.pericias],
      feitos : [this.persona.feitos],
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
      this.helperProvider.persistAlert('Formulário invalido! Verifique se o nome tem entre 1 e 25 caracteres.');
    } else {
      let loading = this.helperProvider.createLoad();
      loading.present();
      this.personaProvider.savePersona(this.forms.value)
      .subscribe(
        (res: HttpSuccessResponse) => {
          this.authProvider.authUser.next(this.authProvider.authUser.getValue());
          loading.dismiss();
          this.helperProvider.timeAlert('Salvo com sucesso!');
        },
        (error: HttpErrorResponse) => {
          loading.dismiss();
          this.helperProvider.persistAlert('Erro ao tentar salvar! Algo de errado não está certo.');
        }
      );
    }
  }

  deletePersona() {
    if (this.persona.id) {
      let loading = this.helperProvider.createLoad();
      loading.present();
      this.personaProvider.deletePersona(this.persona.id)
      .subscribe(
        (res: HttpSuccessResponse) => {
          this.authProvider.authUser.next(this.authProvider.authUser.getValue());
          this.navCtrl.popToRoot();
          loading.dismiss();
          this.helperProvider.timeAlert('Deletado com sucesso!');
        },
        (error: HttpErrorResponse) => {
          loading.dismiss();
          this.helperProvider.persistAlert('Erro ao tentar deletar! Algo de errado não está certo.');
        }
      );
    }else{
      this.navCtrl.popToRoot();
    }
  }
  
}
