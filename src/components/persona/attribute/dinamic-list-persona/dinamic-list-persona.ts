import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { AttributePopoverComponent } from '../attribute-popover/attribute-popover';

/**
 * Generated class for the DinamicListPersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dinamic-list-persona',
  templateUrl: 'dinamic-list-persona.html'
})
export class DinamicListPersonaComponent {

  items: any[];

  constructor(public popoverCtrl: PopoverController) {
    console.log('Hello DinamicListPersonaComponent Component');
    this.items = [  {id: 1, name: "peidão", show: true, max: 1},
                    {id: 2, name: "flatulencia", show: true, max: 4},
                    {id: 3, name: "pum", show: true, max: 0},
                    {id: 4, name: "chubilabes", show: true, max: 3},
                    {id: 5, name: "pentagonastico", show: false, max: 0} ];
  }

  getItems() {
    return this.items.filter((item) => {
      return item.show;
    });
  }

  presentAttrbutePopover(event) {
    let popover = this.popoverCtrl.create(AttributePopoverComponent, this.items);
    popover.present({
      ev: event
    });
  }

}
