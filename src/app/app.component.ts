import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';
import { MyEventsPage } from '../pages/my-events/my-events';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { MyBookingsPage } from '../pages/my-bookings/my-bookings';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { UserRegistrationPage } from '../pages/user-registration/user-registration';
import { ProviderRegistrationPage } from '../pages/provider-registration/provider-registration';
import { ChangePasswordPage } from '../pages/change-password/change-password';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LandingPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Bookings', component: MyBookingsPage },
      { title: 'My Events', component: MyEventsPage },
      { title: 'History', component: HistoryPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Logout', component: LandingPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
