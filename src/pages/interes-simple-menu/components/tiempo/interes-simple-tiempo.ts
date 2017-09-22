import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'interes-simple-tiempo.html'
})

export class InteresSimpleTiempoPage {

  public Capital: number = 1000;
  public Tasa: number = 0.1;
  public Tiempo: number = 10;
  public Monto: number = 2000;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Monto, this.Tasa, this.Capital);
  }

  public doCalculation(monto, tasa, capital): void {
    let _monto = parseFloat(monto);
    let _tasa = parseFloat(tasa);
    let _capital = parseFloat(capital);

    this.Tiempo = (_monto / _capital - 1) / _tasa;

  }

}
