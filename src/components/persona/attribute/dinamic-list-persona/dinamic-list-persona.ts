import { Component, Input, forwardRef } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Item } from '../../../../interfaces';
import { ModalAttributeComponent } from '../modal-attribute/modal-attribute';

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
  @Input() bonus: any[];
  private onChange;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello DinamicListPersonaComponent Component');
  }

  change() {
    this.onChange(this.items);
  }

  get items() {
    let items = this.itemsList.filter((item) => {
      return item.checked;
    });
    return items;
  }

  presentModalAttribute(event) {
    let modal = this.modalCtrl.create(
      ModalAttributeComponent, 
      {itemsList: this.itemsList, callback: () => this.change() }
    );
    modal.present();
  }

  writeValue(items: Item[]): void {
    if (items) { 
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
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

}
