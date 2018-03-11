import { Component } from '@angular/core';

/**
 * Generated class for the InfoDebugComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-debug',
  templateUrl: 'info-debug.html'
})
export class InfoDebugComponent {

  text: string;

  constructor() {
    console.log('Hello InfoDebugComponent Component');
    this.text = 'Hello World';
  }

}
