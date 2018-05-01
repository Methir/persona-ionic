import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Item } from '../../../../interfaces';

@Component({
  selector: 'attribute-popover',
  templateUrl: 'attribute-popover.html'
})
export class AttributePopoverComponent {

  onChange: any;
  items: Item[];

  constructor(public navParams: NavParams) {
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
        return (item.label.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}