import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { PersonaPage } from '../persona/persona';
import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
  pages: Array<{title: string, component: any}>;

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams ) {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Persona', component: PersonaPage },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
