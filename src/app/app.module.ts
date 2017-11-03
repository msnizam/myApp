import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { FirebaseConfig } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
