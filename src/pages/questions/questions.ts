import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
	
  questions: any

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
    public api: ApiRequestProvider) {

  }

  ionViewDidLoad() {
    return this.api.get('questions', {})
			.subscribe(
        (data) => { // Success
          console.log('data:'+data);
          this.questions = data;
        },
        (error) =>{
          console.log(error);
        }
			)
  }

  showQuestion(question) {
    console.log(question)
    this.navCtrl.push('QuestionPage',{question: question});
  }

}
