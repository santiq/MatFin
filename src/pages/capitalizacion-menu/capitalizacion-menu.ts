import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DTEPageCap } from './components/dte/dte';

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
    component: DTEPageCap,
  },
  {
    name: 'Tiempo',
    component: DTEPageCap,
  },
  {
    name: 'Valor Futuro',
    component: DTEPageCap,
  },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
