import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello FormDebugComponent Component');
    this.text = 'Hello World';
  }

}
