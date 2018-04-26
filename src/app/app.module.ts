import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AuthProvider, HelperProvider, KeysProvider, PersonaProvider } from '../providers';
import { PersonaPageModule } from './../pages/persona/persona.module';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { AttributePopoverComponent } from '../components/persona/attribute/attribute-popover/attribute-popover';

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
    AttributePopoverComponent
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KeysProvider,
    PersonaProvider,
    AuthProvider,
    HelperProvider
  ]
})
export class AppModule {}
