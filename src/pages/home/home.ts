import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public formula : Formula = {
    deuda: 4.494086295,
    tiempo: 10,
    iteraciones: 20,
    cuota: 1
  };

  public resultados:Array<{data: Array<number[]> | number[], label: string}> = [
    {data: [], label: 'Iteraciones'}
  ];
  public lineChartLabels:Array<any> = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];



  constructor(public navCtrl: NavController) {
    this.onCalculate()
  }

  public onCalculate(): void {
    let result = []

    for(let i = 0; i<this.formula.iteraciones; i++) {

      if(i === 0) {
        result.push(this.formulaFn(0.5, this.formula.tiempo, this.formula.deuda, this.formula.cuota, i+1));

      } else {
        let xAnterior = result[i-1];
        result.push(this.formulaFn(xAnterior, this.formula.tiempo, this.formula.deuda, this.formula.cuota, i+1));
      }


    }

    this.resultados = [{
      data: result, label: 'Iteraciones'
    }];
    return;
  }


  public formulaFn(xAnterior: number, tiempo: number, vdeuda: number, cuota: number, iteration: number): number {
   let VF = function(x) {
     return (1 - Math.pow(1 + x, -tiempo)) / x;
   }

   let A = xAnterior;
   let B = vdeuda/cuota;
   let C = tiempo - B
   let D = VF(xAnterior) - B

    return A / (1 - (D/C))
  }

}

export class Formula {
  deuda: number;
  tiempo: number;
  iteraciones: number;
  cuota: number;
}
