import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef } from '@angular/core';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NamePersonaComponent),
  multi: true
};

@Component({
  selector: 'name-persona',
  templateUrl: 'name-persona.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class NamePersonaComponent implements ControlValueAccessor{

  private onChange;
  private value: string;

  constructor() {
    console.log('Hello NamePersonaComponent Component');
  }

  get nameValue(): string {
    return this.value;
  }

  set nameValue(value) {
    this.value = value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}
