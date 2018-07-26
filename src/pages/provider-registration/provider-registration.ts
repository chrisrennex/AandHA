import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProviderRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-provider-registration',
  templateUrl: 'provider-registration.html',
})
export class ProviderRegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  registerClicked() {
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderRegistrationPage');
  }

}
