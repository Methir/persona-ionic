import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { Token } from './../../interfaces';
import { HelperProvider, AuthProvider } from './../../providers';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  forms: FormGroup;

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public menuCtrl: MenuController,  
                private formBuilder: FormBuilder,
                private storage: Storage,
                private helperProvider: HelperProvider,
                private authProvider: AuthProvider ) { }

  ngOnInit(){
    console.log('pagina login carregada...');
    this.forms = this.formBuilder.group({
      username: [ null, [
        Validators.required,
        Validators.email,
      ] ],
      password: [ null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
      ] ],
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  onSubmit() {
    if (this.forms.invalid) {
      this.helperProvider.persistAlert('O email e senha são campos necessários. Verifique se foram preenchidos corretamente.');
    } else {
      this.authenticate(this.forms.value['username'], this.forms.value['password']);
    }
  }
  
  authenticate(username, password) {
    let loading = this.helperProvider.createLoad();
    loading.present();
    this.authProvider.authenticate(username, password)
    .subscribe(
      (token: Token) => {
        this.storage.set('persona_token', token).then(() => {
          this.authProvider.authUser.next(token);
          this.navCtrl.popToRoot();
        }).catch(() => {
          this.authProvider.authUser.next(token);
          this.navCtrl.popToRoot();
        });
        loading.dismiss();
      },
      (error: HttpErrorResponse) => {
        loading.dismiss();
        this.helperProvider.persistAlert('Erro ao tentar acessar o sistema. Veja se errou sua senha, se não deu muito ruim. xD');
      }
    );
  }

  

}
