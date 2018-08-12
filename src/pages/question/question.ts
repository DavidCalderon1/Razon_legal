import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  question: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.question = this.navParams.get('question') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

}
