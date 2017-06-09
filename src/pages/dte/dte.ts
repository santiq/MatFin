import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DTE, IDTEParams } from '../../api/formulas/DTE/index'

@Component({
  selector: 'page-home',
  templateUrl: 'dte.html'
})

export class DTEPage {
  public iteraciones: number = 50;

  public params: IDTEParams = {
    tiempo: 10, deuda: 8.7130345602, cuota: 1, Z: 3, cuotaAdelantada: false
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
