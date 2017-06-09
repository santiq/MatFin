import { IFormulaBase } from '../ibase';
import * as _ from 'lodash';

export interface IDTEParams {
  cuotaAdelantada: boolean,
  tiempo: number,
  deuda: number,
  cuota: number,
  Z: number
}

export interface IDTEResult {
  tasaPeriodica: number,
  resultados: Array<{data: Array<number[]> | number[], label: string}>,
  errorRelativo: number
}

export class DTE implements IFormulaBase {
  name: 'Determinacion de la tasa efectiva';
  description: 'Determina la tasa efectiva de una cosa';

  constructor() {}

  public calculate(iterations: number, { tiempo, deuda, cuota, Z, cuotaAdelantada } : IDTEParams): IDTEResult {
    console.log(cuotaAdelantada)
    let data : Array<number> = [];
    let resultados: Array<{data: Array<number[]> | number[], label: string}> = [];

    for(let i = 0; i< iterations ; i++) {

      if(i === 0) {
        let xInicial: number = 0.5;
        let result: number = this.calculation(xInicial, tiempo, deuda, cuota, Z, cuotaAdelantada);
        data.push(result);

      } else {
        let xAnterior: number = data[i-1];
        let result: number = this.calculation(xAnterior, tiempo, deuda, cuota, Z, cuotaAdelantada);
        data.push(result);
      }
    }

    resultados = [{
      data, label: 'Tasa'
    }];

    const last: number = _.last(data);
    const almostLast: number = data[data.length-2];
    const errorRelativo: number = (last -  almostLast) / (almostLast);

    return {
      tasaPeriodica: last,
      resultados,
      errorRelativo,
    };
  }

  private calculation(xAnterior: number, tiempo: number, vdeuda: number, cuota: number, Z: number, cuotaAdelantada: boolean): number {
  let VF = function(x: number, Z: number): number {
    // console.log('Valor de Z: ')
    // console.log(Z)
    // console.log('Valor Sumado: ')
    // console.log(cuotaAdelantada ? 1 : 0)

    let exponente: number  = Z + (cuotaAdelantada ? 1 : 0);
    let tasa: number = x;
    return ((1 - Math.pow(1 + tasa, -tiempo)) / tasa) * Math.pow((1+tasa), exponente);
  }

   let A: number = xAnterior;
   let B: number = vdeuda/cuota;
   let C: number = tiempo - B;
   let D: number= VF(xAnterior, Z) - B;

    return A / (1 - (D/C))
  }
}
