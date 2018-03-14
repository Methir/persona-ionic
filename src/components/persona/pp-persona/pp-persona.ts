import { Component, Input } from '@angular/core';

@Component({
  selector: 'pp-persona',
  templateUrl: 'pp-persona.html',
})
export class PpPersonaComponent {

  @Input() ppTotal;

  constructor() {
    console.log('Hello PpPersonaComponent Component');
  }

}
