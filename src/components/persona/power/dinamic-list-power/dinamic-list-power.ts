import { ModalController } from 'ionic-angular';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';

import { Power } from '../../../../interfaces';
import { PowersList } from './../powersList';
import { ModalPowerComponent } from '../modal-power/modal-power';
import { ModalPowerDetailsComponent } from './../modal-power-details/modal-power-details';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DinamicListPowerComponent),
  multi: true
};

@Component({
  selector: 'dinamic-list-power',
  templateUrl: 'dinamic-list-power.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DinamicListPowerComponent implements ControlValueAccessor {

  @Input() bonus: any[];
  private onChange;
  private powersList: Power[];

  constructor(public modalCtrl: ModalController) {
    console.log('Hello DinamicListPowerComponent Component');
    this.powersList = new PowersList().items;
  }

  change() {
    this.onChange(this.powers);
  }

  get powers() {
    let powers = this.powersList.filter((power: Power) => {
      return power.checked;
    });
    return powers;
  }

  presentModalPowerDetails(power: number) {
    let modal = this.modalCtrl.create(
      ModalPowerDetailsComponent, 
      { power: power, callback: () => this.change() }
    );
    modal.present();
  }

  presentModalPower() {
    let modal = this.modalCtrl.create(
      ModalPowerComponent, 
      {powersList: this.powersList, callback: () => this.change() }
    );
    modal.present();
  }

  writeValue(powers: Power[]): void { 
    if (powers) { 
      powers.forEach((power: Power) => {
        let powerList = this.powersList.find((powerList: Power) => {
          return powerList.poder_id == power.poder_id;
        });
        
        if (powerList) {
          powerList.checked = true;
          powerList.graduacao = power.graduacao;
          powerList.custo = power.custo;
          powerList.extras = power.extras;
          powerList.falhas = power.falhas;
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
