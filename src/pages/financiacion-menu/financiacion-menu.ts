import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { DTEPageFin } from './components/dte/dte';
import { CuotaPageFin } from './components/cuota-financiacion/cuota';
import { TiempoPageFin } from './components/tiempo-financiacion/tiempo';
import { DeudaPageFin } from './components/deuda-financiacion/deuda';

@Component({
  templateUrl: 'financiacion-menu.html'
})
export class FinanciacionMenuPage {

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {
  }
  ionViewDidEnter() {
    this.ga.trackView('Menu:Financiacion');
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
