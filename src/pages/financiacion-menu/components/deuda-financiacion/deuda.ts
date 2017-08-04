import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'deuda.html'
})

export class DeudaPageFin {

  public Tasa = 0.1;
  public Tiempo = 10;
  public MomentoValuacion = 3;
  public CuotaAdelantada = false;
  public Cuota = 12227.302;
  public Deuda = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }

  public doCalculation(): void {
    let g = (1 - (Math.pow((1 + this.Tasa), -this.Tiempo))) / this.Tasa;
    let h = Math.pow((1+this.Tasa), this.getExponent())
    this.Deuda = this.Cuota * (g * h);
  }

  private getExponent() {
    if (this.CuotaAdelantada) {
      return this.MomentoValuacion + 1
    } else {
      return this.MomentoValuacion;
    }
  }

}
