import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'cuota.html'
})

export class CuotaPageFin {
  public convertToNumber(event): number { return +event; }
  public Tasa = 0.1;
  public Deuda = 100000;
  public Tiempo = 10;
  public MomentoValuacion =  3;
  public CuotaAdelantada = false;

  public Cuota = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }

  public doCalculation(): void {
    let g = this.Tasa / (1 - Math.pow((1 + this.Tasa), -this.Tiempo) )
    let h = 1 / Math.pow((1+this.Tasa), this.getExponent())
    this.Cuota = this.Deuda * (g * h) ;
  }

  private getExponent() {
    if (this.CuotaAdelantada) {
      return this.MomentoValuacion + 1
    } else {
      return this.MomentoValuacion;
    }
  }

}
