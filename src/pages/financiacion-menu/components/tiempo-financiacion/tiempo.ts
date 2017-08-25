import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'tiempo-financiacion',
  templateUrl: 'tiempo.html',
})

export class TiempoPageFin {
  public Tasa = 0.1;
  public Deuda = 100000;
  public MomentoValuacion =  3;
  public Cuota = 12227.302;
  public CuotaAdelantada = false;

  public Tiempo = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.Deuda, this.Tasa, this.Cuota, this.MomentoValuacion, this.CuotaAdelantada);
  }


  public doCalculation(deuda, tasa, cuota, momentoValuacion, cuotaAdelantada): void {
    let _deuda = parseFloat(deuda);
    let _tasa = parseFloat(tasa);
    let _cuota = parseFloat(cuota);
    let _momentoValuacion = parseFloat(momentoValuacion);

    let j = _deuda / Math.pow((1 + _tasa), this.getExponent(_momentoValuacion, cuotaAdelantada))
    let h = (_tasa / _cuota);
    let A = 1 - (j * h);
    let B = 1 + _tasa;

    this.Tiempo = Math.log(A) / -Math.log(B)
  }

  private getExponent(momentoValuacion, cuotaAdelantada) {
    if(cuotaAdelantada) {
      return momentoValuacion + 1
    } else {
      return momentoValuacion;
    }
  }

}
