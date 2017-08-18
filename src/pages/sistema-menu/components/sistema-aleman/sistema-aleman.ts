import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SistemaAleman } from '../../../../providers/sistemas-amortizacion/aleman';

@Component({
  templateUrl: 'sistema-aleman.html'
})

export class SistemaAlemanPage {

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
    const sistemaAleman = new SistemaAleman();
    this.resultado = sistemaAleman.calcular(this.deuda, this.tasaInteres, this.tiempo, this.porcentajeDeuda, this.periodoAnalisis);
    console.log(this.resultado)
  }
}
