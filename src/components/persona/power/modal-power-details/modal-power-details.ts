import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

import { ExtrasList } from '../extrasList';
import { FalhasList } from './../falhasList';
import { Power } from '../../../../interfaces';

@Component({
  selector: 'modal-power-details',
  templateUrl: 'modal-power-details.html'
})
export class ModalPowerDetailsComponent {

  public power: Power;
  public extrasList;
  public falhasList; 
  public graduacaoOptions: number[] = [];
  public custoOptions: number[] = [];

  constructor(  public navParams: NavParams,
                public viewCtrl: ViewController) {
    console.log('Hello ModalPowerDetailsComponent Component');
    this.initializeItems();
    for(let i: number = 1; i<=20; i++) {
      this.graduacaoOptions.push(i);
    }
    for(let i: number = this.power.custo_min; i<=this.power.custo_max; i++) {
      this.custoOptions.push(i);
    }
  }

  get extras() {
    return this.extrasList.filter((extraList) => {
      return extraList.checked;
    }); 
  }

  get falhas() {
    return this.falhasList.filter((falhaList) => {
      return falhaList.checked;
    }); 
  }

  change() {
    this.power.extras = this.extras;
    this.power.falhas = this.falhas;
    this.navParams.data['callback']();
  }

  initializeItems() {
    this.extrasList = new ExtrasList().items;
    this.falhasList = new FalhasList().items;
    this.power = this.navParams.data['power'];
    
    this.power.extras.forEach((extra) => {
      let extraList = this.extrasList.find((extraList) => {
        return extraList.id == extra.id;
      });

      if (extraList) {
        extraList.checked = true;
        extraList.modificador = extra.modificador;
      }
    });

    this.power.falhas.forEach((falha) => {
      let falhaList = this.falhasList.find((falhaList) => {
        return falhaList.id == falha.id;
      });

      if (falhaList) {
        falhaList.checked = true;
        falhaList.modificador = falha.modificador;
      }
    });
  }

  close() {
    this.viewCtrl.dismiss(null);
  }

}
