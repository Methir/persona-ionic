import { Component } from '@angular/core';

/**
 * Generated class for the NamePersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'name-persona',
  templateUrl: 'name-persona.html'
})
export class NamePersonaComponent {

  text: string;

  constructor() {
    console.log('Hello NamePersonaComponent Component');
    this.text = 'Hello World';
  }

}
