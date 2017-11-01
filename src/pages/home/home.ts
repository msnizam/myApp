import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    username: string;

    constructor(public nav: NavController) {
        this.nav = nav;
        this.username = window.localStorage.getItem('username');
    }

    logout() {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');

        this.nav.setRoot(SignUpPage);
        this.nav.popToRoot();
    }
}
