import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BehaviorSubject } from 'rxjs';

import { Token } from './../interfaces/token';
import { AuthProvider } from './../providers';
import { HomePage } from './../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  
  pages: Array<{title: string, component: any}>;

  constructor(  public platform: Platform, 
                public statusBar: StatusBar, 
                public splashScreen: SplashScreen,
                private storage: Storage,
                private authProvider: AuthProvider ) {
    console.log('Navegador principal carregado...');
    this.pages = [
      { title: 'Home', component: HomePage },
    ];
      this.storage.get('persona_token').then((token: Token) => {
        console.log(token);
        this.authProvider.authUser = new BehaviorSubject(token);
        this.authProvider.seeAuthUser = this.authProvider.authUser.asObservable();
        this.rootPage = HomePage;
      }).catch(() => {
        this.authProvider.authUser = new BehaviorSubject(null);
        this.authProvider.seeAuthUser = this.authProvider.authUser.asObservable();
        this.rootPage = HomePage;
      });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.authProvider.logout();
  }
}
