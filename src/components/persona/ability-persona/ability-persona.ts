import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AbilityPersonaComponent),
  multi: true
};

@Component({
  selector: 'ability-persona',
  templateUrl: 'ability-persona.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AbilityPersonaComponent implements ControlValueAccessor {

  @Input() label: string;
  valueOptions: number[] = [];
  private onChange;
  private value: number;

  constructor() {
    console.log('Hello AbilityPersonaComponent Component');
    for(let i: number = 0; i<=50; i++) {
      this.valueOptions.push(i);
    }
  }

  get abilityValue(): number {
    return this.value;
  }

  set abilityValue(value) {
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
