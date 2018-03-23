import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HelperProvider } from './../../providers/helper/helper';
import { AuthProvider } from './../../providers/auth/auth';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      email: [ null, [
        Validators.required,
        Validators.email,
      ] ],
      senha: [ null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ] ],
    });
  }

  onSubmit() {
    if (this.forms.invalid) {
      this.helperProvider.persistAlert('O email e senha são campos necessários. Verifique se foram preenchidos corretamente.');
    } else {
      this.authProvider.authenticate(this.forms)
      .subscribe(
        (data) => {
          console.log(data);
          this.navCtrl.pop();
        },
        (erro) => {
          console.log(erro);
          this.helperProvider.persistAlert('Erro ao tentar acessar o sistema. Nem tente mais, que deu ruim. xD')
        }
      );
    }
  }

}
