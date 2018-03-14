import { Component } from '@angular/core';

/**
 * Generated class for the DamagePersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'damage-persona',
  templateUrl: 'damage-persona.html'
})
export class DamagePersonaComponent {

  text: string;

  constructor() {
    console.log('Hello DamagePersonaComponent Component');
    this.text = 'Hello World';
  }

}
