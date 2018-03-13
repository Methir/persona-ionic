import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the FormDebugComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-debug',
  templateUrl: 'form-debug.html'
})
export class FormDebugComponent {

  @Input() form: FormControl;

  constructor() {
    console.log('Hello FormDebugComponent Component');
  }

}
