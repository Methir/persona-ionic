import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Token, Persona, HttpSuccessResponse } from './../../interfaces';
import { AuthProvider, HelperProvider, PersonaProvider } from './../../providers';
import { PersonaPage } from './../persona/persona';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  personaPage: any = PersonaPage;
  newPersona: Persona;
  personas: Persona[];

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                private authProvider: AuthProvider,
                private helperProvider: HelperProvider,
                private personaProvider: PersonaProvider ) {
    
    this.newPersona = this.personaProvider.getNewPersona();
  }

  ngOnInit() {
    console.log('pagina home carregada...');
    this.authProvider.seeAuthUser.subscribe( 
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

}
