import { Component } from '@angular/core';

/**
 * Generated class for the AbilityPersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ability-persona',
  templateUrl: 'ability-persona.html'
})
export class AbilityPersonaComponent {

  text: string;

  constructor() {
    console.log('Hello AbilityPersonaComponent Component');
    this.text = 'Hello World';
  }

}
