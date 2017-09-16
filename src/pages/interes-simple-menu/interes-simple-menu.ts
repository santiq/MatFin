import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { InteresCompuestoMontoPage } from './components/interes-simple-monto.ts';
@Component({
  selector: 'interes-simple-menu',
  templateUrl: 'interes-simple-menu.html',
})

export class InteresSimpleMenuPage {

  constructor(public navCtrl: NavController) {

  }
  pages = [
    // {
  //   name: 'Monto',
  //   component: InteresSimpleMontoPage,
  // },
    // {
    //   name: 'Valor Actual Neto (VAN)',
    //   component: InteresCompuestoMontoPage,
    // },
    // {
    //   name: 'Valuacion Acciones',
    //   component: InteresCompuestoMontoPage
    // }
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
