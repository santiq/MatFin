import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DTEPageFin } from './components/dte/dte';
import { CuotaPageFin } from './components/cuota-financiacion/cuota';
import { TiempoPageFin } from './components/tiempo-financiacion/tiempo';
import { DeudaPageFin } from './components/deuda-financiacion/deuda';

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
    component: CuotaPageFin,
  },
  {
    name: 'Tiempo',
    component: TiempoPageFin,
  },
  {
    name: 'Deuda',
    component: DeudaPageFin,
  },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
