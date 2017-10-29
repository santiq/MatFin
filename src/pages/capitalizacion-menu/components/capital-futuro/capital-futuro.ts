import { Component } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { NavController } from 'ionic-angular';
@Component({
  templateUrl: 'capital-futuro.html'
})

export class CapitalFuturoCAPPage {

  public convertToNumber(event): number { return parseFloat(event); }

  public Tasa: number = 0.1;
  public Tiempo: number = 10;
  public CuotaAdelantada = false;
  public Cuota: number = 12227.302;
  public ValorFuturo: number = 0;

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {
    this.doCalculation(this.Cuota, this.Tasa, this.Tiempo, this.CuotaAdelantada);
  }

  public doCalculation(cuota, tasa, tiempo, cuotaAdelantada): void {
    let _cuota = parseFloat(cuota);
    let _tasa = parseFloat(tasa);
    let _tiempo = parseFloat(tiempo);
    let g = (1 - (Math.pow((1 + _tasa), -_tiempo))) / _tasa;
    let h = Math.pow((1 + _tasa), this.getExponent(_tiempo, cuotaAdelantada))
    this.ValorFuturo = _cuota * (g * h);
    this.ga.trackEvent('Calculo', 'Capitalizacion:CapitalFuturo');
  }

  private getExponent(tiempo, cuotaAdelantada): number {
    if (cuotaAdelantada) {
      return tiempo + 1
    } else {
      return tiempo;
    }
  }

}
