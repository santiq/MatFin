import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SistemaFrancesPage } from './components/sistema-frances/sistema-frances';

@Component({
  templateUrl: 'sistema-menu.html'
})
export class SistemasMenuPage {

  constructor(public navCtrl: NavController) {

  }
  pages = [{
    name: 'Sistema Frances',
    component: SistemaFrancesPage,
  },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
