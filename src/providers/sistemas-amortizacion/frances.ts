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

  private calcularTiempoNecesarioParaCancelarUnPorcentajeDeDeuda(
    deuda: number,
    porcentajeDeuda: number,
    tasaInteres: number,
    amortizacionPrimerPeriodo: number,
  ):number {
    const numerador = Math.log(
      deuda * (porcentajeDeuda/100) * (tasaInteres/amortizacionPrimerPeriodo) + 1
    )

    const divisor = Math.log(
      1 + tasaInteres
    );
    return numerador / divisor;
  }

  public calcular(deuda: any, tasaInteres: any, tiempo: any, porcentajeDeuda: any, periodo: any){

    const _tasaInteres = parseFloat(tasaInteres);
    const _deuda = parseFloat(deuda);
    const _tiempo = parseFloat(tiempo);
    const _porcentajeDeuda = parseFloat(porcentajeDeuda);
    const _periodo = parseFloat(periodo);

    const cuota = this.calcularCuota(_deuda, _tasaInteres, _tiempo);
    const amortizacionPrimerPeriodo = this.calcularAmortizacionPrimerPeriodo(cuota, _tasaInteres, _tiempo);
    const interesPrimerPeriodo = this.calcularInteresPrimerPeriodo(cuota, amortizacionPrimerPeriodo)
    const tasaAmortizacion = this.calcularTasaAmortizacion(amortizacionPrimerPeriodo, _deuda);

    const tiempoNecesarioCancelarDeuda = this.calcularTiempoNecesarioParaCancelarUnPorcentajeDeDeuda(
      _deuda,
      _porcentajeDeuda,
      _tasaInteres,
      amortizacionPrimerPeriodo,
    )

    const periodoAnalisis = this.calcularEnBaseAPeriodo(_tasaInteres, cuota, amortizacionPrimerPeriodo, _deuda, _periodo);

    return {
      cuota,
      amortizacionPrimerPeriodo,
      interesPrimerPeriodo,
      tasaAmortizacion,
      tiempoNecesarioCancelarDeuda,
      periodoAnalisis
    }
  }

  private calcularEnBaseAPeriodo(tasaInteres, cuota, amortizacionPrimerPeriodo, deuda, periodo) {
    const amortizacion = amortizacionPrimerPeriodo * Math.pow(1 + tasaInteres, (periodo - 1));
    const interes = cuota - amortizacion;
    const totalAmortizado = (amortizacionPrimerPeriodo / tasaInteres) * (Math.pow((1 + tasaInteres), periodo) - 1)
    const porcentajeTotalAmortizado = (totalAmortizado / deuda);
    const deudaSubsistente = deuda - totalAmortizado;
    const interesPagados = (cuota * periodo) - totalAmortizado;

    return {
      amortizacion,
      interes,
      totalAmortizado,
      porcentajeTotalAmortizado,
      deudaSubsistente,
      interesPagados
    }
  }

}


