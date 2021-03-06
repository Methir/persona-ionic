import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef } from '@angular/core';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NpPersonaComponent),
  multi: true
};

@Component({
  selector: 'np-persona',
  templateUrl: 'np-persona.html',
  providers:[CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class NpPersonaComponent {

  valueOptions: number[] = [];
  private onChange;
  private value: number;

  constructor() {
    console.log('Hello NpPersonaComponent Component');
    for(let i: number = 1; i<=20; i++) {
      this.valueOptions.push(i);
    }
  }

  get npValue(): number {
    return this.value;
  }

  set npValue(value) {
    this.value = value;
    this.onChange(value);
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

}
