import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AttributePersonaComponent),
  multi: true
};

@Component({
  selector: 'attribute-persona',
  templateUrl: 'attribute-persona.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AttributePersonaComponent implements ControlValueAccessor {

  @Input() label: string;
  private onChange;
  public value: number;

  constructor() {
    console.log('Hello AttributePersonaComponent Component');
  }

  increment(points: number): void {
    this.value++;
    this.onChange(this.value);
  }

  decrement(points: number): void {
    this.value--;
    if (this.value < 0) {
      this.value = 0;
    }
    this.onChange(this.value);
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
