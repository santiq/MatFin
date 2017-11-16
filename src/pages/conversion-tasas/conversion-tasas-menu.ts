import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  templateUrl: 'conversion-tasas-menu.html'
})
export class ConversionTasasMenuPage {

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.ga.trackView('Menu:Tasas');
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
