import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { SistemaFrancesPage } from './components/sistema-frances/sistema-frances';
import { SistemaAlemanPage } from './components/sistema-aleman/sistema-aleman';

@Component({
  templateUrl: 'sistema-menu.html'
})
export class SistemasMenuPage {

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.ga.trackView('Menu:Sistemas');
  }

  pages = [{
    name: 'Sistema Frances',
    component: SistemaFrancesPage,
  },
  {
    name: 'Sistema Aleman',
    component: SistemaAlemanPage,
  },
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
