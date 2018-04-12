import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AuthProvider, HelperProvider, KeysProvider, PersonaProvider } from '../providers';
import { PersonaPageModule } from './../pages/persona/persona.module';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    PersonaPageModule,
    LoginPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KeysProvider,
    PersonaProvider,
    AuthProvider,
    HelperProvider
  ]
})
export class AppModule {}
