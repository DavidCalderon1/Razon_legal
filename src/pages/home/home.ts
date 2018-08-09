import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private username: string;
  private password: string;
	loading = false;
	submitted = false;
	returnUrl: string;
	error = '';

  constructor(public navCtrl: NavController, public auth: AuthProvider) {
  }

	submitlogin(){
		this.submitted = true;

		this.auth.login({email: this.username, password: this.password})
			.subscribe(
				data => { 
				  this.error = '';
					this.redirectToHome() },
				error => {
					this.error = error.error.error;
					this.loading = false;
				}
			)
	}

  redirectToHome() {
		this.navCtrl.push('LoginPage');
  }
  
}
