import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tiempo.html'
})

export class TiempoCAPPage {
  public convertToNumber(event): number { return +event; }
  public Tasa = 0.1;
  public ValorFuturo = 100000;
  public MomentoValuacion = 3;
  public Cuota = 12227.302;
  public CuotaAdelantada = false;

  public Tiempo = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }


  public doCalculation(): void {

    let A = (this.ValorFuturo / ( this.Cuota * Math.pow((1 + this.Tasa), this.getExponent()) ) ) * this.Tasa + 1;

    let B = 1 + this.Tasa;

    this.Tiempo = Math.log(A) / Math.log(B)
  }

  private getExponent() {
    if (this.CuotaAdelantada) {
      return 1;
    } else {
      return 0;
    }
  }

}
