import { Component } from '@angular/core';

/**
 * Generated class for the AttackPersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'attack-persona',
  templateUrl: 'attack-persona.html'
})
export class AttackPersonaComponent {

  text: string;

  constructor() {
    console.log('Hello AttackPersonaComponent Component');
    this.text = 'Hello World';
  }

}
