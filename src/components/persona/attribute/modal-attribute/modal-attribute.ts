import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Item } from './../../../../interfaces/item';

@Component({
  selector: 'modal-attribute',
  templateUrl: 'modal-attribute.html'
})
export class ModalAttributeComponent {

  onChange: any;
  items: Item[];

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.initializeItems();
    this.onChange = this.navParams.data['callback'];
  }

  change() {
    this.navParams.data['callback']();
  }

  initializeItems() {
    this.items = this.navParams.data['itemsList'];
  }

  getItems(event: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = event.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  close() {
    this.viewCtrl.dismiss(null);
  }
}
