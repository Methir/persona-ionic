import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { MenuPage } from './../menu/menu';

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
                private toastCtrl: ToastController ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      email: [ null, [
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
    if (this.forms.invalid) {
      this.alertToast('O email e senha são campos necessários. Verifique se foram preenchidos corretamente.');
    } else {
      this.navCtrl.push(MenuPage);
    }
  }

  alertToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      closeButtonText: 'Ok!',
      showCloseButton: true
    });
    toast.present();
  }

}
