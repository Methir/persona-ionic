import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';

@Injectable()
export class HelperProvider {

  constructor(  public http: HttpClient,
                private toastCtrl: ToastController ) {
    console.log('Hello HelperProvider Provider');
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
