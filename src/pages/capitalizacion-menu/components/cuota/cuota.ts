import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  templateUrl: 'cuota.html'
})

export class CuotaCAPPage {
  public Tasa: number = 0.1;
  public ValorFuturo: number = 100000;
  public Tiempo: number = 10;
  public CuotaAdelantada = false;

  public Cuota: number = 0;

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {
    this.doCalculation(this.Tasa, this.Tiempo, this.ValorFuturo, this.CuotaAdelantada);
  }

  public doCalculation(tasa, tiempo, valorFuturo, cuotaAdelantada): void {
    let _tasa = parseFloat(tasa);
    let _tiempo = parseFloat(tiempo);
    let _valorFuturo = parseFloat(valorFuturo);

    let g = +_tasa / (1 - Math.pow((1 + _tasa), -_tiempo))

    let h = 1 / Math.pow((1 + _tasa), this.getExponent(_tiempo, cuotaAdelantada))

    this.Cuota = _valorFuturo * (g * h);
    this.ga.trackEvent('Calculo', 'Capitalizacion:Cuota');
  }

  private getExponent(tiempo, cuotaAdelantada) {
    if (this.CuotaAdelantada) {
      return tiempo + 1
    } else {
      return tiempo;
    }
  }
}
