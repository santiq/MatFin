import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'tiempo-financiacion',
  templateUrl: 'tiempo.html',
})

export class TiempoPageFin {
  public convertToNumber(event): number { return +event; }
  public Tasa = 0.1;
  public Deuda = 100000;
  public MomentoValuacion =  3;
  public Cuota = 12227.302;
  public CuotaAdelantada = false;

  public Tiempo = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }


  public doCalculation(): void {
    let j = this.Deuda / Math.pow((1 + this.Tasa), this.getExponent())
    let h = (this.Tasa / this.Cuota);
    let A = 1 - (j * h);
    let B = 1 + this.Tasa;

    this.Tiempo = Math.log(A) / -Math.log(B)
  }

  private getExponent() {
    if(this.CuotaAdelantada) {
      return this.MomentoValuacion + 1
    } else {
      return this.MomentoValuacion;
    }
  }

}
