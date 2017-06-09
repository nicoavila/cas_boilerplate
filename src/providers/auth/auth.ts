import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AngularFireAuth } from 'angularfire2/auth';
import * as Auth0 from 'auth0-js';

//Definiciones de tipos
type Auth0LoginCredentials = { realm:string, username:string, password:string, scope:string };
type PersonalProfile = { depto:string, email:string, family_name:string, given_name:string, name:string, nickname:string, picture:string, sub:string, updated_at:string };

@Injectable()
export class AuthProvider {

  //Configuración de Auth0
  private webAuth: any = new Auth0.WebAuth({
    domain: '',
    clientID: '',
    responseType: ''
  });
  private personalProfile: PersonalProfile;
  private jwtHelper: JwtHelper = new JwtHelper();

  /**
   * Constructor
   * @param {AngularFireAuth} public angularFireAuth Inyección de dependencia AngularFireAuth
   */
  constructor (public angularFireAuth: AngularFireAuth) {}

  public attemptLogin(username:string, password:string) {
    return new Promise((resolve, reject) => {
      let auth0LoginCredentials: Auth0LoginCredentials = {
        realm: '',
        username: username,
        password: password,
        scope: 'openid app_metadata'
      };
      this.webAuth.client.login(auth0LoginCredentials, (error, authResult) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }

        let tmpUser = this.jwtHelper.decodeToken(authResult.id_token);
      });
    });
  }
}
