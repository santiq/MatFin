import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'interes-simple-monto.html'
})

export class InteresSimpleMontoPage {

  public Capital: number = 1000;
  public Tasa: number = 0.1;
  public Tiempo: number = 10;
  public Monto: number = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Capital, this.Tasa, this.Tiempo);
  }

  public doCalculation(capital, tasa, tiempo): void {
    let _capital = parseFloat(capital);
    let _tasa = parseFloat(tasa);
    let _tiempo = parseFloat(tiempo);

    this.Monto = _capital * ( 1 + _tasa * _tiempo );
  }

}
