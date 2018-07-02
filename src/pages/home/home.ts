import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Token, Persona, HttpSuccessResponse } from './../../interfaces';
import { AuthProvider, HelperProvider, PersonaProvider } from './../../providers';
import { PersonaPage } from './../persona/persona';
import { LoginPage } from '../login/login';
import { ModalPersonaComponent } from '../../components/persona/modal-persona/modal-persona';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  personaPage: any = PersonaPage;
  seeAuthUser: Subscription;
  newPersona: Persona;
  personas: Persona[];

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public modalCtrl: ModalController,
                private authProvider: AuthProvider,
                private helperProvider: HelperProvider,
                private personaProvider: PersonaProvider ) {
    
    this.newPersona = this.personaProvider.getNewPersona();
  }

  ngOnInit() {
    console.log('pagina home carregada...');
    this.seeAuthUser = this.authProvider.seeAuthUser.subscribe( 
      (token: Token) => {
        if(!token){
          if(!(this.navCtrl.getActive().instance instanceof LoginPage)) {
            this.navCtrl.push(LoginPage);
          }
        }else{
          let loading = this.helperProvider.createLoad();
          loading.present();
          this.personaProvider.getAllPersonas().subscribe( 
            (res: HttpSuccessResponse) => {
              console.log('sincronizado com sucesso');
              if(!res.errors){
                this.personas = res.data;
              }
              loading.dismiss();
            },
            (error: HttpErrorResponse) => {
              loading.dismiss();             
            }
          );
        }
    });
  }

  ngOnDestroy() {
    this.seeAuthUser.unsubscribe();
  }

  presentPersonaModal(persona: Persona) {
    let modal = this.modalCtrl.create(
      ModalPersonaComponent, 
      { persona: persona, 
        total: this.personaProvider.getTotalPoints(persona)
      }
    );
    modal.present();
  }

  deletePersona(persona: Persona) {
    if (persona.id) {
      let loading = this.helperProvider.createLoad();
      loading.present();
      this.personaProvider.deletePersona(persona.id)
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
