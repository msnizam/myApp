import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkPreviousAuthorization();
    });
  }

  checkPreviousAuthorization(): void {
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage = SignUpPage;
    } else {
      this.rootPage = HomePage;
    }
  }
}
