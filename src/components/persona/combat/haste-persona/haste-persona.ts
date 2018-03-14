import { Component } from '@angular/core';

/**
 * Generated class for the HastePersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'haste-persona',
  templateUrl: 'haste-persona.html'
})
export class HastePersonaComponent {

  text: string;

  constructor() {
    console.log('Hello HastePersonaComponent Component');
    this.text = 'Hello World';
  }

}
