import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tir.html'
})

export class TirPage {
  public convertToNumber(event): number { return parseFloat(event); }
  public flujosFondo: any[] = [{ value: -7988.342468 },{ value: 2000 }, { value: 3200 }, { value: 4300 }, { value: 1020 }];
  private iterations = 30;
  public r: number;

  public Convergencia:Array<{data: Array<number[]> | number[], label: string}> = [
    {data: [], label: 'Iteraciones'}
  ];

  public TasaIterada:Array<{data: Array<number[]> | number[], label: string}> = [
    {data: [], label: 'Iteraciones'}
  ];

  constructor(public navCtrl: NavController) {

  }

  public agregarFlujo(): void {
    this.flujosFondo.push({
      value: 0,
    })  
  }

  public doCalculation(): void {

    // Calculo de VAN
    function van(flujos, x0) : number {
      return flujos.reduce((prev, curr, index, array) => {
          return prev + (curr.value) * Math.pow(x0, index);
      }, 0)
    }

    // VAN Derivado
    function h(flujos, x0): number{
      return flujos.reduce((prev, curr, index, array)=>{
        return prev + ( index * curr.value ) * Math.pow(x0, index - 1);
      }, 0)
    }

    // Formula Newton
    function NewtonRaphsonReduction(flujos, x0): number {
      return x0 - ( van(flujos, x0) / h(flujos, x0) );
    }
    let prevResult = 1;
    const results = [];
    for(let i = 0; i < this.iterations; i++ ) {
      prevResult =  NewtonRaphsonReduction(this.flujosFondo, prevResult);
      results.push(prevResult);
    }

    this.r = 1 / prevResult  - 1;

    this.Convergencia = [{ data: results, label: 'TIR' }]

    this.TasaIterada = [{ data: results.map(x0 => 1/ x0 - 1), label: 'TIR' }]
    console.log(results)
  }


}
