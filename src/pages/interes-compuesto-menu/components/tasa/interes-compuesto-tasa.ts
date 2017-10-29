import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  templateUrl: 'interes-compuesto-tasa.html'
})

export class InteresCompuestoTasaPage {

  public Capital: number = 1000;
  public Tasa: number = 0;
  public FrecuenciaCapitalizacion: number = 12;
  public Tiempo: number = 10;
  public Monto: number = 2000;

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {
    this.doCalculation(this.Capital, this.Monto, this.Tiempo, this.FrecuenciaCapitalizacion);
  }


  public doCalculation(capital, monto, tiempo, frecuenciaCapitalizacion): void {
    let _monto = parseFloat(monto);
    let _tiempo = parseFloat(tiempo);
    let _frecuenciaCapitalizacion = parseFloat(frecuenciaCapitalizacion);
    let _capital = parseFloat(capital);
    let exp = 1 / (_frecuenciaCapitalizacion * _tiempo);
    this.Tasa = (Math.pow((_monto / _capital), exp) - 1 ) * _frecuenciaCapitalizacion;
    this.ga.trackEvent('Calculo', 'InteresCompuesto:Tasa');
  }

}
