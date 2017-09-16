import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'interes-compuesto-monto.html'
})

export class InteresCompuestoMontoPage {

  public Capital: number = 1000;
  public Tasa: number = 0.1;
  public FrecuenciaCapitalizacion: number = 12;
  public Tiempo: number = 10;
  public Monto: number = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Capital, this.Tasa, this.FrecuenciaCapitalizacion, this.Tiempo);
  }

  public doCalculation(capital, tasa, frecuenciaCapitalizacion, tiempo): void {
    let _capital = parseFloat(capital);
    let _tasa = parseFloat(tasa);
    let _frecuenciaCapitalizacion = parseFloat(frecuenciaCapitalizacion);
    let _tiempo = parseFloat(tiempo);

    let A = _capital;
    let B = (_tasa/_frecuenciaCapitalizacion);
    let C = Math.pow(1 + B, _frecuenciaCapitalizacion * _tiempo);

    let result = A * C;

    this.Monto = result;
  }

}
