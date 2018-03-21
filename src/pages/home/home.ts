import { PersonaPage } from './../persona/persona';
import { HelperProvider } from './../../providers/helper/helper';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PersonaProvider } from './../../providers/persona/persona';
import { Persona } from './../../interfaces/persona';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  personaPage: any = PersonaPage;
  personas: Persona[];

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                private helperProvider: HelperProvider,
                private PersonaProvider: PersonaProvider ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ngOnInit() {
    this.PersonaProvider.syncAccount()
    .subscribe(
      (data) => {
        console.log('sincronizado com sucesso');
        this.personas = JSON.parse(data['data']);
      },
      (erro) => {
        console.log(erro);
        this.helperProvider.alertToast('Você foi desconectado!');
        this.navCtrl.push(LoginPage);
      }
    );
  }

}
