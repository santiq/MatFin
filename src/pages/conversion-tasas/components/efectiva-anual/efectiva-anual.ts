import { Component } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { NavController } from 'ionic-angular';
import { MotorTasas } from '../../../../providers/tasas/motor-tasas';
@Component({
  templateUrl: 'efectiva-anual.html'
})

export class TasaEfectivaAnualPage {

  public convertToNumber(event): number { return parseFloat(event); }

  public TasaEfectiva: number = 0.27;
  public FrecuenciaCapitalizacion: number = 12;
  public Results: any = {
    efectivaSuperiodica: 0,
    nominalAnual: 0,
    efectivaDescuento: 0,
    efectivaSuperiodicaDescuento: 0,
    instantanea: 0,
    nominalAnualDescuento: 0,
  };
  public motor: MotorTasas = new MotorTasas();

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {
    this.motor = new MotorTasas();
    this.doCalculation(this.TasaEfectiva, this.FrecuenciaCapitalizacion);
  }

  public doCalculation(tasa, frecuencia): void {

    let _tasa = parseFloat(tasa);
    let _frecuencia = parseFloat(frecuencia)
    
    this.Results = this.motor.CalculateModuloEfectiva(_tasa, _frecuencia);

    console.log(this.Results);


    // this.ga.trackEvent('Calculo', 'Tasas:EfectivaAnual');
  }

}
