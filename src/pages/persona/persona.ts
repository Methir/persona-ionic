import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Key, Persona, Item, TotalPoints, HttpSuccessResponse } from './../../interfaces';
import { PersonaProvider, KeysProvider, HelperProvider, AuthProvider } from '../../providers';
import { ModalPersonaComponent } from '../../components/persona/modal-persona/modal-persona';

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
  feitoItems: Item[];
  periciaItems: Item[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public modalCtrl: ModalController,
              private authProvider: AuthProvider,
              private helperProvider: HelperProvider,
              private keysProvider: KeysProvider,
              private personaProvider: PersonaProvider ) {
    this.abilityKeys = this.keysProvider.abilityKeys;
    this.combatKeys = this.keysProvider.combatKeys;
    this.savingKeys = this.keysProvider.savingKeys;
    this.feitoItems = this.keysProvider.feitoItems;
    this.periciaItems = this.keysProvider.periciaItems;
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
          Validators.minLength(1),
          Validators.maxLength(25)] ],
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
      feitos : [this.persona.feitos],
      pericias : [this.persona.pericias],
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
          if (!res.errors) {
            this.forms.controls['id'].setValue(res.data['id']);
          }
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
    if (this.forms.value['id']) {
      let loading = this.helperProvider.createLoad();
      loading.present();
      this.personaProvider.deletePersona(this.forms.value['id'])
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

  presentModalPersona() {
    let modal = this.modalCtrl.create(
      ModalPersonaComponent, 
      {persona: this.forms.value, bonus: this.bonusPoints, total: this.totalPoints}
    );
    modal.present();
  }
  
}
