import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tir.html'
})

export class TirPage {
  
  public flujosFondo: any[] = [{ value: -7988.342468 },{ value: 2000 }, { value: 3200 }, { value: 4300 }, { value: 1020 }];
  private iterations = 50;
  public r: number;

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
          return prev + (curr.value) / Math.pow((1+x0),index);
      }, 0)
    }

    // VAN Derivado
    function h(flujos, x0): number{
      return flujos.reduce((prev, curr, index, array)=>{
        return prev + ( index * curr.value ) / Math.pow( ( 1 + x0 ),  index - 1 );
      }, 0)
    }

    // Formula Newton
    function NewtonRaphsonReduction(flujos, x0): number {
      return x0 - ( van(flujos, x0) / h(flujos, x0) );
    }

    // 50 Iteraciones
    let prevResult = 0.3;
    for(let i = 0; i < this.iterations; i++ ) {
      prevResult =  NewtonRaphsonReduction(this.flujosFondo, prevResult);
    }

    this.r = prevResult;

  }


}
