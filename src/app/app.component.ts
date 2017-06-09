import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, auth: AuthProvider, storage: Storage) {
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        statusBar.styleDefault();
      }
      splashScreen.hide();

      //Obtiene la información almacenada del usuario
      storage.ready().then(() => {
        storage.get('user').then((user) => {
          if (user) {
            this.nav.setRoot('HomePage');
          } else {
            this.nav.setRoot('LoginPage');
          }
        });
      });

    });
  }
}

