import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tir.html'
})

export class TirPage {
  
  public flujosFondo: any[] = [{ value: 1000 },{ value: 1500 }, { value: 2000 }, { value: 2500 }];
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

    // Arreglar este VAN
    function van(flujos, x0) : number {
      return flujos.reduce((prev, curr, index, array) => {
          return prev + (curr.value) / Math.pow((1+this.r),index);
      }, 0)
    }

    function h(flujos, x0): number{
      return flujos.reduce((prev, curr, index, array)=>{
        return prev + ( index * curr.value ) / Math.pow( ( 1 + x0 ),  index - 1 );
      }, 0)
    }

    function NewtonRaphsonReduction(flujos, x0): number {
      return x0 - ( van(flujos, x0) / h(flujos, x0) );
    }

    let prevResult = 0.3;
    for(let i = 0; i < this.iterations; i++ ) {
      prevResult =  NewtonRaphsonReduction(this.flujosFondo, prevResult);
    }

    console.log(prevResult);
    this.r = prevResult;

  }


}
