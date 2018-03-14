import { Component } from '@angular/core';

/**
 * Generated class for the LifePersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'life-persona',
  templateUrl: 'life-persona.html'
})
export class LifePersonaComponent {

  text: string;

  constructor() {
    console.log('Hello LifePersonaComponent Component');
    this.text = 'Hello World';
  }

}
