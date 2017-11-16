import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  templateUrl: 'interes-simple-tasa.html'
})

export class InteresSimpleTasaPage {

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
    let _capital = parseFloat(capital);

    this.Tasa = ((_monto / _capital) - 1) / _tiempo;
    this.ga.trackEvent('Calculo', 'InteresSimple:Tasa');
  }

}
