import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Power } from '../../../../interfaces';

@Component({
  selector: 'modal-power',
  templateUrl: 'modal-power.html'
})
export class ModalPowerComponent {

  powers: Power[];

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.initializeItems();
  }

  change() {
    this.navParams.data['callback']();
  }

  initializeItems() {
    this.powers = this.navParams.data['powersList'];
  }

  getItems(event: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = event.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.powers = this.powers.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  close() {
    this.viewCtrl.dismiss(null);
  }

}
