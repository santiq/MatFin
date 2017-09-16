import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {

  }

  go(page: string) {
    switch(page){
      case 'interes-simple': 
        return this.navCtrl.push(InteresSimpleMenuPage);
      case 'interes-compuesto':
        return this.navCtrl.push(InteresCompuestoMenuPage);
      case 'capitalizacion-menu':
        return this.navCtrl.push(CapitalizacionMenuPage)
      case 'financiacion-menu':
        return this.navCtrl.push(FinanciacionMenuPage)
      case 'inversiones-menu':
        return this.navCtrl.push(InversionesMenuPage)
      case 'sistemas-menu':
        return this.navCtrl.push(SistemasMenuPage)
    }
  }
}
