import { Component, Input, forwardRef } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Item } from '../../../../interfaces';
import { ModalAttributeComponent } from '../modal-attribute/modal-attribute';
import { Pericia } from '../periciasList';
import { Feito } from './../feitosList';

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

  @Input() itemsType: string;
  itemsList: Item[];
  @Input() bonus: any[];
  private onChange;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello DinamicListPersonaComponent Component');
  }

  ngOnInit(): void {
    this.itemsType = this.itemsType.toLocaleLowerCase();
    if (this.itemsType === 'feitos') {
      this.itemsList = new Feito().items;
    }else if (this.itemsType === 'pericias') {
      this.itemsList = new Pericia().items;
    }
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

  presentModalAttribute() {
    let modal = this.modalCtrl.create(
      ModalAttributeComponent, 
      {itemsList: this.itemsList, callback: () => this.change() }
    );
    modal.present();
  }

  writeValue(items: Item[]): void {
    if (items) { 
      items.forEach((item: Item) => {
        let index = this.itemsList.findIndex((itemList: Item) => {
          return itemList.id == item.id;
        });
        
        if (index >= 0) {
          this.itemsList[index].checked = true;
          this.itemsList[index].graduacao = item.graduacao;
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
