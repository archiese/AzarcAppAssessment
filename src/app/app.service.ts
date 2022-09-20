import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './_models/employee';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '524449366516-jk5mc88297hke3vj1ujb5mi08c7v9u61.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL: string = 'https://dummy.restapiexample.com/api/'
  name: any
  constructor(private readonly oAuthService: OAuthService, private http: HttpClient) {
    oAuthService.configure(oAuthConfig)
    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout'
    oAuthService.loadDiscoveryDocument().then( () => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        }else {
          oAuthService.loadUserProfile().then((userProfile) => {
            this.name = userProfile;
            localStorage.setItem("useremail", this.name.info.email);
            localStorage.setItem("username", this.name.info.name);
            localStorage.setItem("userpicture", this.name.info.picture);
            console.log(this.name.info.email)
            console.log(this.name.info.name)
            console.log(this.name.info.picture)
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    }) 
   }

   getEmployees() {
    return this.http.get(this.baseURL + 'v1/employees');
   }

   isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
   }

   signOut() {
    this.oAuthService.logOut()
   }

}
