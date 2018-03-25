import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
                private formBuilder: FormBuilder,
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
        Validators.maxLength(8),
      ] ],
    });
  }

  onSubmit() {
    let loading = this.helperProvider.createLoad();
    loading.present();
    if (this.forms.invalid) {
      this.helperProvider.persistAlert('O email e senha são campos necessários. Verifique se foram preenchidos corretamente.');
    } else {
      this.authenticate(this.forms.value['username'], this.forms.value['password']);
    }
    loading.dismiss();
  }
  
  authenticate(username, password) {
    this.authProvider.authenticate(username, password)
    .subscribe(
      (token: Token) => {
        console.log(token);
          this.authProvider.authUser.next(token);
          this.navCtrl.pop();
      },
      (erro) => {
        console.log(erro);
        this.helperProvider.persistAlert('Erro ao tentar acessar o sistema. Veja se errou sua senha, se não deu muito ruim. xD')
    });
  }

  

}
