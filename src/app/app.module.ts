import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { MyBookingsPage } from '../pages/my-bookings/my-bookings';
import { MyEventsPage } from '../pages/my-events/my-events';
import { ProfilePage } from '../pages/profile/profile';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { UserRegistrationPage } from '../pages/user-registration/user-registration';
import { ProviderRegistrationPage } from '../pages/provider-registration/provider-registration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    MyBookingsPage,
    ProfilePage,
    ChangePasswordPage,
    LoginPage,
    LogoutPage,
    UserRegistrationPage,
    ProviderRegistrationPage,
    LandingPage,
    MyEventsPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    MyBookingsPage,
    ProfilePage,
    ChangePasswordPage,
    LoginPage,
    LogoutPage,
    UserRegistrationPage,
    ProviderRegistrationPage,
    LandingPage,
    MyEventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
