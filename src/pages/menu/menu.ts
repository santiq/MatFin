import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { CapitalizacionMenuPage } from '../capitalizacion-menu/capitalizacion-menu';
import { FinanciacionMenuPage } from '../financiacion-menu/financiacion-menu';
import { InversionesMenuPage } from '../inversiones-menu/inversiones-menu';
import { InteresSimpleMenuPage } from '../interes-simple-menu/interes-simple-menu';
import { InteresCompuestoMenuPage } from '../interes-compuesto-menu/interes-compuesto-menu';
import { SistemasMenuPage } from '../sistema-menu/sistema-menu';

@Component({
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {

  }

  go(page: string) {
    switch(page){
      case 'interes-simple': 
        this.ga.trackEvent('Navegacion', 'Menu:InteresSimple');
        return this.navCtrl.push(InteresSimpleMenuPage);
      case 'interes-compuesto':
        this.ga.trackEvent('Navegacion', 'Menu:InteresCompuesto');
        return this.navCtrl.push(InteresCompuestoMenuPage);
      case 'capitalizacion-menu':
        this.ga.trackEvent('Navegacion', 'Menu:Capitalizacion');
        return this.navCtrl.push(CapitalizacionMenuPage)
      case 'financiacion-menu':
        this.ga.trackEvent('Navegacion', 'Menu:Financiacion');
        return this.navCtrl.push(FinanciacionMenuPage)
      case 'inversiones-menu':
        this.ga.trackEvent('Navegacion', 'Menu:Inversiones');
        return this.navCtrl.push(InversionesMenuPage)
      case 'sistemas-menu':
        this.ga.trackEvent('Navegacion', 'Menu:Sistemas');
        return this.navCtrl.push(SistemasMenuPage)
    }
  }
}
