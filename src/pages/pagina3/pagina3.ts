 import { Component } from '@angular/core';
 import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

	persona:any = {};

	constructor(private navParams:NavParams){
		console.log(navParams);
		this.persona = this.navParams.get("persona");
	}
   
}
