import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signInClicked() {
    this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad (){
    
  };

}
