import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { DTEPageCap } from './components/dte/dte';
import { CapitalFuturoCAPPage } from './components/capital-futuro/capital-futuro';
import { TiempoCAPPage } from './components/tiempo/tiempo';
import { CuotaCAPPage } from './components/cuota/cuota';

@Component({
  templateUrl: 'capitalizacion-menu.html'
})
export class CapitalizacionMenuPage {

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.ga.trackView('Menu:Capitalizacion');
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
    component: TiempoCAPPage,
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
