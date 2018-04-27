import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the AttributePopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'attribute-popover',
  templateUrl: 'attribute-popover.html'
})
export class AttributePopoverComponent {

  items: any[];

  constructor(public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = this.navParams.data;
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
