import { Component } from '@angular/core';

/**
 * Generated class for the DefensePersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'defense-persona',
  templateUrl: 'defense-persona.html'
})
export class DefensePersonaComponent {

  text: string;

  constructor() {
    console.log('Hello DefensePersonaComponent Component');
    this.text = 'Hello World';
  }

}
