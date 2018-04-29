import { Component, Input, forwardRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { AttributePopoverComponent } from '../attribute-popover/attribute-popover';
import { Item } from '../../../../interfaces';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DinamicListPersonaComponent),
  multi: true
};

@Component({
  selector: 'dinamic-list-persona',
  templateUrl: 'dinamic-list-persona.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DinamicListPersonaComponent implements ControlValueAccessor {

  @Input() itemsList: Item[];
  private onChange;

  constructor(public popoverCtrl: PopoverController) {
    console.log('Hello DinamicListPersonaComponent Component');
  }

  getItems() {
    let items = this.itemsList.filter((item) => {
      return item.checked;
    });

    this.onChange(items);
    return items;
  }

  presentAttrbutePopover(event) {
    let popover = this.popoverCtrl.create(AttributePopoverComponent, this.itemsList);
    popover.present({
      ev: event
    });
  }

  writeValue(items: Item[]): void {
    items.forEach((item) => {
      let index = this.itemsList.findIndex((itemList) => {
        return itemList.id == item.id;
      });
      
      if (index >= 0) {
        this.itemsList[index].checked = true;
        this.itemsList[index].points = item.points;
      }
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

}
