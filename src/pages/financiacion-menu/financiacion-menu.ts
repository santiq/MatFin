import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DTEPageFin } from './components/dte/dte';

@Component({
  templateUrl: 'financiacion-menu.html'
})
export class FinanciacionMenuPage {

  constructor(public navCtrl: NavController) {

  }
  pages = [{
    name: 'Tasa efectiva',
    component: DTEPageFin,
  },
  {
    name: 'Cuota',
    component: DTEPageFin,
  },
  {
    name: 'Tiempo',
    component: DTEPageFin,
  },
  {
    name: 'Deuda',
    component: DTEPageFin,
  },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
