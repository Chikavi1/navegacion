 import { Component } from '@angular/core';
 import { NavParams,NavController } from 'ionic-angular';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

	persona:any = {};

	constructor(private navParams: NavParams,
				private navCtrl: NavController){

		this.persona = this.navParams.get("persona");
	}
   irAtras(){
   	this.navCtrl.pop();
   }

   irRoot(){
   	this.navCtrl.popToRoot();
   }
}
