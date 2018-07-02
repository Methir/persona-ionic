import { Platform } from 'ionic-angular';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('content') content: ElementRef; 

  constructor(public platform: Platform) {
    console.log('Hello CardPersonaComponent Component');
  }

  ngOnInit(): void {
    if (this.platform.is('mobile')) {
      this.content.nativeElement.hidden = true;
    }    
  }

}
