import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'interes-compuesto-tiempo.html'
})

export class InteresCompuestoTiempoPage {

  public Capital: number = 1000;
  public Tasa: number = 0.1;
  public FrecuenciaCapitalizacion: number = 12;
  public Tiempo: number = 10;
  public Monto: number = 2000;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Monto, this.Tasa, this.FrecuenciaCapitalizacion, this.Capital);
  }

  public doCalculation(monto, tasa, frecuenciaCapitalizacion, capital): void {
    let _monto = parseFloat(monto);
    let _tasa = parseFloat(tasa);
    let _frecuenciaCapitalizacion = parseFloat(frecuenciaCapitalizacion);
    let _capital = parseFloat(capital);

    let A = Math.log(_monto/capital);

    let B = Math.log(1 + ( _tasa / _frecuenciaCapitalizacion )) * _frecuenciaCapitalizacion;

    this.Tiempo = A / B;

  }

}
