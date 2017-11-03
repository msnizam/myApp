import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { AngularFireAuthModule } from 'angularfire2/auth';

const FirebaseConfig = {
    apiKey: "AIzaSyBaIVtjt8SMQxL0C66_1HvipoDagOsdYNs",
    authDomain: "myapp-ba3d7.firebaseapp.com",
    databaseURL: "https://myapp-ba3d7.firebaseio.com",
    projectId: "myapp-ba3d7",
    storageBucket: "myapp-ba3d7.appspot.com",
    messagingSenderId: "769966606128"
  };

@NgModule({
  declarations: [
    MyApp
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
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
