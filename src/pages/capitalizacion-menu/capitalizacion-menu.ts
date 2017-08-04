import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DTEPageCap } from './components/dte/dte';
import { CapitalFuturoCAPPage } from './components/capital-futuro/capital-futuro';
import { TiempoCAPPage } from './components/tiempo/tiempo';
import { CuotaCAPPage } from './components/cuota/cuota';

@Component({
  templateUrl: 'capitalizacion-menu.html'
})
export class CapitalizacionMenuPage {

  constructor(public navCtrl: NavController) {

  }
  pages = [{
    name: 'Determinacion de la tasa efectiva',
    component: DTEPageCap
  },
  {
    name: 'Cuota',
    component: CuotaCAPPage,
  },
  {
    name: 'Tiempo',
    component: DTEPageCap,
  },
  {
    name: 'Valor Futuro',
    component: CapitalFuturoCAPPage,
  },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
