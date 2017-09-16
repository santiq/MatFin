import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'interes-compuesto-capital.html'
})

export class InteresCompuestoCapitalPage {

  public Capital: number = 0;
  public Tasa: number = 0.1;
  public FrecuenciaCapitalizacion: number = 12;
  public Tiempo: number = 10;
  public Monto: number = 2000;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Monto, this.Tasa, this.FrecuenciaCapitalizacion, this.Tiempo);
  }


  public doCalculation(monto, tasa, frecuenciaCapitalizacion, tiempo): void {
    let _monto = parseFloat(monto);
    let _tasa = parseFloat(tasa);
    let _frecuenciaCapitalizacion = parseFloat(frecuenciaCapitalizacion);
    let _tiempo = parseFloat(tiempo);

    this.Capital = _monto / Math.pow((1 + (_tasa / _frecuenciaCapitalizacion)), _frecuenciaCapitalizacion * _tiempo);
  }

}
