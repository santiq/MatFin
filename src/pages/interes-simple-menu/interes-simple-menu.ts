import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { InteresSimpleMontoPage } from './components/monto/interes-simple-monto.ts';
import { InteresSimpleCapitalPage } from './components/capital/interes-simple-capital.ts';
import { InteresSimpleTasaPage } from './components/tasa/interes-simple-tasa.ts';
import { InteresSimpleTiempoPage } from './components/tiempo/interes-simple-tiempo.ts';
@Component({
  selector: 'interes-simple-menu',
  templateUrl: 'interes-simple-menu.html',
})

export class InteresSimpleMenuPage {

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.ga.trackView('Menu:InteresSimple');
  }
  pages = [{
    name: 'Monto',
    component: InteresSimpleMontoPage,
  },
    {
      name: 'Capital',
      component: InteresSimpleCapitalPage,
    },
    {
      name: 'Tasa',
      component: InteresSimpleTasaPage,
    },
    {
      name: 'Tiempo',
      component: InteresSimpleTiempoPage,
    }]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
