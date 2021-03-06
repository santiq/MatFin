import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DTE, IDTEParams } from '../../../../providers/determinacion-tasa-efectiva/index';

@Component({
  templateUrl: 'dte.html'
})

export class DTEPageCap {
  public convertToNumber(event): number { return +event; }

  public CuotaAdelantada: boolean = false;

  public aproximacionBaily: number = 0;
  public iteraciones: number = 50;
  public periodicidad: number = 1;
  public periodicidades: any = [
    {
      value: 1,
      name: 'Anual'
    },
    {
      value: 2,
      name: 'Semestral'
    },{
      value: 3,
      name: 'Cuatrimestral'
    },{
      value: 4,
      name: 'Trimestral'
    },
    {
      value: 6,
      name: 'Bimestral'
    },
    {
      value: 12,
      name: 'Mensual'
    }
  ]

  public tasaEfectivaAnual: number = 0;
  // Hacer una nueva interface que implemente
  // Z === Tiempo
  // Ademas, deuda cambia a Ahorro acumulado
  public params: IDTEParams = {
    tiempo: 10, deuda: 1000000, cuota: 24000
  }

  public tasaPeriodica : number = 0;

  public resultados:Array<{data: Array<number[]> | number[], label: string}> = [
    {data: [], label: 'Iteraciones'}
  ];

  public errorRelativo : number;

  public lineChartLabels:Array<any> = ['1','2','3','4','5'];

  constructor(public navCtrl: NavController, private ga: GoogleAnalytics) {
    this.doCalculation();
  }

  // public cambiarPeriodicidad(value){
  //   console.log(value);
  //   this.periodicidad = value
  //   // this.tasaEfectivaAnual = Math.pow(1 + this.tasaPeriodica, this.periodicidad) - 1 ;
  // }

  public doCalculation(): void {
    const DeterminadorDeTasaEfectiva = new DTE();
    const parameters = Object.assign({}, this.params, { Z: this.params.tiempo, cuotaAdelantada: this.CuotaAdelantada  })

    const TasaEfectiva = DeterminadorDeTasaEfectiva.calculate(this.iteraciones, parameters);
    this.resultados = TasaEfectiva.resultados;
    this.errorRelativo = TasaEfectiva.errorRelativo;
    this.tasaPeriodica = TasaEfectiva.tasaPeriodica;
    this.tasaEfectivaAnual = Math.pow(1 + this.tasaPeriodica, this.periodicidad) - 1 ;
    /* Fill lineChartLabels for all iterations */
    this.lineChartLabels = [];
    for(let i =0; i < TasaEfectiva.resultados[0].data.length; i++){
      this.lineChartLabels.push(`${i+1}`);
    }

    this.aproximacionBaily = DeterminadorDeTasaEfectiva.getH(
      this.params.cuota, this.params.tiempo, this.params.deuda, this.params.tiempo, this.CuotaAdelantada
    )
    this.ga.trackEvent('Calculo', 'Capitalizacion:DTE')
  }
}
