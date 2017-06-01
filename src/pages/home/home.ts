import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tasaPeriodica : number = 0;
  public formula : Formula = {
    deuda: 4.494086295,
    tiempo: 10,
    iteraciones: 20,
    cuota: 1,
    Z: 0,
    tipoRenta: false,
  };

  public resultados:Array<{data: Array<number[]> | number[], label: string}> = [
    {data: [], label: 'Iteraciones'}
  ];
  public lineChartLabels:Array<any> = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
  public errorRelativo : number = 0;


  constructor(public navCtrl: NavController) {
    this.onCalculate()
  }

  public onCalculate(): void {
    let result = [];

    for(let i = 0; i<this.formula.iteraciones; i++) {

      if(i === 0) {
        result.push(this.formulaFn(0.5, this.formula.tiempo, this.formula.deuda, this.formula.cuota, i+1, this.formula.Z, this.formula.tipoRenta));

      } else {
        let xAnterior = result[i-1];
        result.push(this.formulaFn(xAnterior, this.formula.tiempo, this.formula.deuda, this.formula.cuota, i+1, this.formula.Z, this.formula.tipoRenta));
      }


    }
    this.tasaPeriodica = _.last(result);
    this.resultados = [{
      data: result, label: 'Iteraciones'
    }];
    const last: number = this.resultados[0].data[0][this.resultados[0].data.length-1]
    const almostLast: number = this.resultados[0].data[0][this.resultados[0].data.length-2]

    this.errorRelativo = (last -  almostLast) / (almostLast);

    return;
  }


  public formulaFn(xAnterior: number, tiempo: number, vdeuda: number, cuota: number, iteration: number, Z: number, tipoRenta: boolean): number {
   let VF = function(x, Z) {
     return ( (1 - Math.pow(1 + x, -tiempo)) / x) * Math.pow((1+x), Z + (tipoRenta ? 1: 0) ) ;
   }

   let A = xAnterior;
   let B = vdeuda/cuota;
   let C = tiempo - B
   let D = VF(xAnterior, Z) - B

    return A / (1 - (D/C))
  }

}

export class Formula {
  deuda: number;
  tiempo: number;
  iteraciones: number;
  cuota: number;
  Z: number;
  tipoRenta: boolean;
}
