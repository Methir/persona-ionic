import { Component, Input } from '@angular/core';
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

  @Input() items: any[];

  constructor(public popoverCtrl: PopoverController) {
    console.log('Hello DinamicListPersonaComponent Component');
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
