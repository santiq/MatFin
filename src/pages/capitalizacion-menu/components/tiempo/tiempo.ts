import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tiempo.html'
})

export class TiempoCAPPage {
  public Tasa: number = 0.1;
  public ValorFuturo: number = 100000;
  public MomentoValuacion: number = 3;
  public Cuota: number = 12227.302;
  public CuotaAdelantada = false;

  public Tiempo = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation(this.ValorFuturo, this.Tasa, this.Cuota, this.CuotaAdelantada);
  }


  public doCalculation(valorFuturo, tasa, cuota, cuotaAdelantada): void {
    let _valorFuturo = parseFloat(valorFuturo);
    let _tasa = parseFloat(tasa);
    let _cuota = parseFloat(cuota);

    let A = (_valorFuturo / (_cuota * Math.pow((1 + _tasa), this.getExponent(cuotaAdelantada)) ) ) * _tasa + 1;

    let B = 1 + _tasa;

    this.Tiempo = Math.log(A) / Math.log(B)
  }

  private getExponent(cuotaAdelantada): number {
    if (cuotaAdelantada) {
      return 1;
    } else {
      return 0;
    }
  }

}
