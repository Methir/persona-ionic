import { Component } from '@angular/core';

/**
 * Generated class for the NpPersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'np-persona',
  templateUrl: 'np-persona.html'
})
export class NpPersonaComponent {

  text: string;

  constructor() {
    console.log('Hello NpPersonaComponent Component');
    this.text = 'Hello World';
  }

}
