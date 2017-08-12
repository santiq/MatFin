import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SistemaFrances } from '../../../../providers/sistemas-amortizacion/frances';

@Component({
  templateUrl: 'sistema-frances.html'
})

export class SistemaFrancesPage {

  public deuda: number = 100000;
  public tasaInteres: number = 0.04;
  public tiempo: number = 36;
  public porcentajeDeuda = 50;

  public resultado:any = {

  };
  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }

  public doCalculation(): void {
    const sistemaFrances = new SistemaFrances();
    this.resultado = sistemaFrances.calcular(this.deuda, this.tasaInteres, this.tiempo, this.porcentajeDeuda);
    console.log(this.resultado)
  }
}
