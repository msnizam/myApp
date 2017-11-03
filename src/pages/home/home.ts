import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public nav: NavController, public navParams: NavParams) {
  }

  async login() {
    this.nav.push('LoginPage');
  }

  async register() {
    this.nav.push('RegisterPage');
  }
}
