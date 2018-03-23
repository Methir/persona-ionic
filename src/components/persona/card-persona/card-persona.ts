import { Component, Input } from '@angular/core';

/**
 * Generated class for the CardPersonaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-persona',
  templateUrl: 'card-persona.html'
})
export class CardPersonaComponent {

  @Input() label;
  @Input() points;

  constructor() {
    console.log('Hello CardPersonaComponent Component');
  }

}
