import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserRegistrationPage } from '../user-registration/user-registration';
import { ProviderRegistrationPage } from '../provider-registration/provider-registration';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginClicked() {
    this.navCtrl.push(LoginPage);
  }

  newUserClicked() {
    this.navCtrl.push(UserRegistrationPage);
  }

  newProviderClicked() {
    this.navCtrl.push(ProviderRegistrationPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
