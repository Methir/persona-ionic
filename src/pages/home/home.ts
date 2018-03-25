import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Token, Persona, httpSuccessResponse } from './../../interfaces';
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
                private personaProvider: PersonaProvider ) { }

  ionViewDidLoad() {
    console.log('pagina home carregada...');
    this.newPersona = this.personaProvider.getNewPersona();
    this.authProvider.seeAuthUser.subscribe( 
      (token: Token) => {
        let loading = this.helperProvider.createLoad();
        loading.present();
        if(!token){
          this.navCtrl.push(LoginPage);
        }else{
          this.personaProvider.syncPersona(token).subscribe( 
            (res: httpSuccessResponse) => {
              console.log(res);
              console.log('sincronizado com sucesso');
              if(!res.erros){
                this.personas = res.data;
              }
            },
            (erro) => {
              console.log(erro);
          });
        }
        loading.dismiss();
    });
  }

}
