import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SistemaFrances } from '../../../../providers/sistemas-amortizacion/frances';

@Component({
  templateUrl: 'sistema-frances.html'
})

export class SistemaFrancesPage {
  public convertToNumber(event): number { return parseFloat(event); }
  public deuda: number = 100000;
  public tasaInteres: number = 0.04;
  public tiempo: number = 36;
  public porcentajeDeuda: number = 50;
  public periodoAnalisis: number = 10;
  public resultado:any = {

  };
  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }

  public doCalculation(): void {
    const sistemaFrances = new SistemaFrances();
    this.resultado = sistemaFrances.calcular(this.deuda, this.tasaInteres, this.tiempo, this.porcentajeDeuda, this.periodoAnalisis);
    console.log(this.resultado)
  }
}
