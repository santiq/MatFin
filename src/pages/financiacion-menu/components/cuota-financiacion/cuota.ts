import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'cuota.html'
})

export class CuotaPageFin {

  public Tasa: number = 0.1;
  public Deuda: number = 100000;
  public Tiempo: number = 10;
  public MomentoValuacion: number =  3;
  public CuotaAdelantada = false;

  public Cuota: number = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Deuda, this.Tasa, this.Tiempo, this.MomentoValuacion, this.CuotaAdelantada);
  }

  public doCalculation(deuda, tasa, tiempo, momentoValuacion, cuotaAdelantada): void {
    let _deuda = parseFloat(deuda);
    let _tasa = parseFloat(tasa);
    let _tiempo = parseFloat(tiempo);
    let _momentoValuacion = parseFloat(momentoValuacion);

    let g = _tasa / (1 - Math.pow((1 + _tasa), -_tiempo) )
    let h = 1 / Math.pow((1 + _tasa), this.getExponent(_momentoValuacion, cuotaAdelantada))
    this.Cuota = _deuda * (g * h) ;
  }

  private getExponent(momentoValuacion, cuotaAdelantada) {
    if (cuotaAdelantada) {
      return momentoValuacion + 1
    } else {
      return momentoValuacion;
    }
  }

}
