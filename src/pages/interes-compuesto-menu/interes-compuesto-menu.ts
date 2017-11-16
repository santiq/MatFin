import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { InteresCompuestoMontoPage } from './components/monto/interes-compuesto-monto.ts';
import { InteresCompuestoTasaPage } from './components/tasa/interes-compuesto-tasa.ts';
import { InteresCompuestoCapitalPage } from './components/capital/interes-compuesto-capital.ts';
import { InteresCompuestoTiempoPage } from './components/tiempo/interes-compuesto-tiempo.ts';

@Component({
  selector: 'interes-compuesto-menu',
  templateUrl: 'interes-compuesto-menu.html',
})

export class InteresCompuestoMenuPage {
  public pages = [{
      name: 'Monto',
      component: InteresCompuestoMontoPage,
    },
    {
      name: 'Tasa',
      component: InteresCompuestoTasaPage,
    },
    {
      name: 'Capital',
      component: InteresCompuestoCapitalPage,
    },
    {
      name: 'Tiempo',
      component: InteresCompuestoTiempoPage,
    }
  ];

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {
  }
  ionViewDidEnter() {
    this.ga.trackView('Menu:InteresCompuesto');
  }
  go(page: string) {
    this.navCtrl.push(page)
  }
}
