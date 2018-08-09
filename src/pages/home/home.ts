import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private username: string;
  private password: string;
  private token: string;

  constructor(public navCtrl: NavController, public auth: AuthProvider) {
  }

  submitlogin(){
    this.auth.login({email: this.username, password: this.password})
      .subscribe(
        data => {
          this.token = data.auth_token
        } ,
        err => console.log(err)
      )
  }
}
