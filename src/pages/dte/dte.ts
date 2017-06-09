import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DTE, IDTEParams } from '../../api/formulas/DTE/index'

@Component({
  selector: 'page-home',
  templateUrl: 'dte.html'
})

export class DTEPage {
  public iteraciones: number = 15;

  public params: IDTEParams = {
    tiempo: 0, deuda: 0, cuota: 0, Z: 0, tipoRenta: false
  }

  public tasaPeriodica : number = 0;

  public resultados:Array<{data: Array<number[]> | number[], label: string}> = [
    {data: [], label: 'Iteraciones'}
  ];

  public errorRelativo : number;

  public lineChartLabels:Array<any> = ['1','2','3','4','5'];

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }

  public doCalculation(): void {
    const DeterminadorDeTasaEfectiva = new DTE();
    const TasaEfectiva = DeterminadorDeTasaEfectiva.calculate(this.iteraciones, this.params);
    this.resultados = TasaEfectiva.resultados;
    this.errorRelativo = TasaEfectiva.errorRelativo;
    this.tasaPeriodica = TasaEfectiva.tasaPeriodica;

    /* Fill lineChartLabels for all iterations */
    this.lineChartLabels = [];
    for(let i =0; i < TasaEfectiva.resultados[0].data.length; i++){
      this.lineChartLabels.push(`${i+1}`);
    }
  }
}
