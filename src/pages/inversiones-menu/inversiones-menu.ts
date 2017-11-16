import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { VanPage } from './components/van/van';
import { TirPage } from './components/tir/tir';
import { ValuacionAccionesPage } from './components/valuacion-acciones/valuacion-acciones';

@Component({
  templateUrl: 'inversiones-menu.html'
})
export class InversionesMenuPage {

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.ga.trackView('Menu:Inversione');
  }
  pages = [{
    name: 'Tasa Interna de Retorno (TIR)',
    component: TirPage,
  },
  {
    name: 'Valor Actual Neto (VAN)',
    component: VanPage,
  },
  {
    name: 'Valuacion Acciones',
    component: ValuacionAccionesPage
  }
  ]
  go(page: string) {
    this.navCtrl.push(page)
  }
}
