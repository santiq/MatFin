export class SistemaFrances {

  constructor(){}

  private calcularCuota(deuda: number, tasaInteres: number, tiempo: number): number{
    const divisor = 1 - Math.pow(1 + tasaInteres, tiempo * -1);
    return deuda * (tasaInteres / divisor);
  }

  private calcularInteresPrimerPeriodo(cuota: number, amortizacionPrimerPeriodo: number): number{
    return cuota - amortizacionPrimerPeriodo;
  }

  private calcularAmortizacionPrimerPeriodo(cuota: number, tasaInteres: number, tiempo: number): number{
    return cuota * Math.pow(1 + tasaInteres, -tiempo);
  }

  private calcularTasaAmortizacion(amortizacionPrimerPeriodo: number, deuda: number): number{
    return amortizacionPrimerPeriodo / deuda;
  }

  public calcular(deuda: any, tasaInteres: any, tiempo: any){
    
    const _tasaInteres = parseFloat(tasaInteres)
    const _deuda = parseFloat(deuda)
    const _tiempo = parseFloat(tiempo)

    const cuota = this.calcularCuota(_deuda, _tasaInteres, _tiempo);
    const amortizacionPrimerPeriodo = this.calcularAmortizacionPrimerPeriodo(cuota, _tasaInteres, _tiempo);
    const interesPrimerPeriodo = this.calcularInteresPrimerPeriodo(cuota, amortizacionPrimerPeriodo)
    const tasaAmortizacion = this.calcularTasaAmortizacion(amortizacionPrimerPeriodo, _deuda);

    return {
      cuota,
      amortizacionPrimerPeriodo,
      interesPrimerPeriodo,
      tasaAmortizacion
    }
  }
}