import { MenuPageModule } from './../pages/menu/menu.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PersonaPageModule } from './../pages/persona/persona.module';
import { HomePageModule } from '../pages/home/home.module';
import { KeysProvider } from '../providers/keys/keys';
import { PersonaProvider } from '../providers/persona/persona';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthProvider } from '../providers/auth/auth';
import { HelperProvider } from '../providers/helper/helper';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    PersonaPageModule,
    MenuPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KeysProvider,
    PersonaProvider,
    AuthProvider,
    HelperProvider
  ]
})
export class AppModule {}
