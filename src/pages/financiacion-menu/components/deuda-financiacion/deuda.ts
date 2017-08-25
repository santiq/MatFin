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
    this.doCalculation(this.Cuota, this.Tasa, this.Tiempo, this.MomentoValuacion, this.CuotaAdelantada);
  }

  public doCalculation(cuota, tasa, tiempo, momentoValuacion, cuotaAdelantada): void {
    let _cuota = parseFloat(cuota);
    let _tasa = parseFloat(tasa);
    let _tiempo = parseFloat(tiempo);
    let _momentoValuacion = parseFloat(momentoValuacion);

    let g = (1 - (Math.pow((1 + _tasa), -_tiempo))) / _tasa;
    let h = Math.pow((1+_tasa), this.getExponent(_momentoValuacion, cuotaAdelantada))
    this.Deuda = _cuota * (g * h);
  }

  private getExponent(momentoValuacion, cuotaAdelantada) {
    if (cuotaAdelantada) {
      return momentoValuacion + 1
    } else {
      return momentoValuacion;
    }
  }

}
