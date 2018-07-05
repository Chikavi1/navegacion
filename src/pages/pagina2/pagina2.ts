import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Pagina3Page} from '../index.paginas';
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

	mutantes:any[]  = [
	{
		nombre: "Luis Rojas",
		ocupacion: "CEO"
	},
	{
		nombre: "Olvia Diaz",
		ocupacion: "Administracion"
	},
	{
		nombre: "Juan Osorio",
		ocupacion: "Ventas"
	}
	]

pagina3:any = Pagina3Page;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.navCtrl.swipeBackEnabled = true;
  }
  navOptions = {
	animation: 'md-transition',
	duration: 1500
};
  irPagina3(mutante:any){
  	console.log(mutante);
  	this.navCtrl.push(Pagina3Page,{ 'persona'  : mutante},this.navOptions);
  }
}
