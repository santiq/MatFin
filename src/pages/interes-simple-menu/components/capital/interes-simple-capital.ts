import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'interes-simple-capital.html'
})

export class InteresSimpleCapitalPage {

  public Capital: number = 0;
  public Tasa: number = 0.1;
  public Tiempo: number = 10;
  public Monto: number = 2000;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Monto, this.Tasa, this.Tiempo);
  }


  public doCalculation(monto, tasa, tiempo): void {
    let _monto = parseFloat(monto);
    let _tasa = parseFloat(tasa);
    let _tiempo = parseFloat(tiempo);

    this.Capital = _monto / ( 1 + _tasa * _tiempo);
  }

}
