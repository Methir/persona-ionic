import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class HelperProvider {

  public readonly baseUrl: string = 'http://alika-persona.esy.es/painel';
  //public readonly baseUrl: string = 'http://localhost:8000/';

  constructor(  public http: HttpClient,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController ) {
    console.log('HelperProvider');
  }

  createLoad()  {
    return this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Carregando...'
    });
  }

  persistAlert(message) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      closeButtonText: 'Ok!',
      showCloseButton: true,
      duration: 5000, 
    });
    toast.present();
  }

  timeAlert(message) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }
}
