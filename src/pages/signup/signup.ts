import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  
  constructor(public navCtrl: NavController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacionPage');
  }
  confirmacion() {
      this.navCtrl.push('ConfirmacionPage');
    }
 
}
