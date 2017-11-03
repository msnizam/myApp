import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data.email){
      this.toast.create({
        message: 'Welcome, ${data.email}',
        duration: 3000
      }).present();
  }
})}
}
