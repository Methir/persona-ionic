import { Component } from '@angular/core';

/**
 * Generated class for the PpPersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pp-persona',
  templateUrl: 'pp-persona.html'
})
export class PpPersonaComponent {

  text: string;

  constructor() {
    console.log('Hello PpPersonaComponent Component');
    this.text = 'Hello World';
  }

}
