import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'conversion-tasas-menu.html'
})
export class ConsersionTasasMenuPage {

  constructor(public navCtrl: NavController) {

  }
  pages = [{
    name: 'TNA',
    // component: DTEPageCap
  },
  // {
  //   name: 'Cuota',
  //   component: CuotaCAPPage,
  // },
  // {
  //   name: 'Tiempo',
  //   component: TiempoCAPPage,
  // },
  // {
  //   name: 'Valor Futuro',
  //   component: CapitalFuturoCAPPage,
  // },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
