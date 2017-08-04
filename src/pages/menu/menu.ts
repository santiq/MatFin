import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CapitalizacionMenuPage } from '../capitalizacion-menu/capitalizacion-menu';
import { FinanciacionMenuPage } from '../financiacion-menu/financiacion-menu';
import { InversionesMenuPage } from '../inversiones-menu/inversiones-menu';

@Component({
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }

  go(page: string) {
    switch(page){
      case 'capitalizacion-menu':
        return this.navCtrl.push(CapitalizacionMenuPage)
      case 'financiacion-menu':
        return this.navCtrl.push(FinanciacionMenuPage)
      case 'inversiones-menu':
        return this.navCtrl.push(InversionesMenuPage)
      case 'prestamos-menu':
        // return this.navCtrl.push(InversionesMenuPage)
    }
  }
}
