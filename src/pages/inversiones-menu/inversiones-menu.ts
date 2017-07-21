import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VanPage } from './components/van/van';

@Component({
  templateUrl: 'inversiones-menu.html'
})
export class InversionesMenuPage {

  constructor(public navCtrl: NavController) {

  }
  pages = [{
    name: 'Tasa Interna de Retorno (TIR)',
    // component: DTEPageFin,
  },
  {
    name: 'Valor Actual Neto (VAN)',
    component: VanPage,
  },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
