export class SistemaAleman {

  constructor() { }

  private calcularCuotaPrimerPeriodo(amortizacionConstantes: number, tiempo: number , tasaInteres: number): number {
    return amortizacionConstantes * (1 + tasaInteres * tiempo);
  }

  private calcularInteresPrimerPeriodo(cuotaPrimerPeriodo: number, amortizacionConstantes: number): number {
    return cuotaPrimerPeriodo - amortizacionConstantes;
  }

  private calcularAmortizacionConstante(deuda: number, tiempo: number): number {
    return deuda / tiempo;
  }

  private calcularTasaAmortizacion(amortizacionPrimerPeriodo: number, deuda: number): number {
    return amortizacionPrimerPeriodo / deuda;
  }

  private calcularTiempoNecesarioParaCancelarUnPorcentajeDeDeuda(porcentajeDeuda: number, tiempo: number): number {
    return porcentajeDeuda * tiempo / 100;
  }

  public calcular(deuda: any, tasaInteres: any, tiempo: any, porcentajeDeuda: any, periodo: any) {

    const _tasaInteres = parseFloat(tasaInteres);
    const _deuda = parseFloat(deuda);
    const _tiempo = parseFloat(tiempo);
    const _porcentajeDeuda = parseFloat(porcentajeDeuda);
    const _periodo = parseFloat(periodo);


    const amortizacionConstantes = this.calcularAmortizacionConstante(_deuda, _tiempo);

    const cuotaPrimerPeriodo = this.calcularCuotaPrimerPeriodo(amortizacionConstantes, _tiempo, _tasaInteres);

    const interesPrimerPeriodo = this.calcularInteresPrimerPeriodo(cuotaPrimerPeriodo, amortizacionConstantes)

    const tasaAmortizacion = this.calcularTasaAmortizacion(amortizacionConstantes, _deuda);

    const tiempoNecesarioCancelarDeuda = this.calcularTiempoNecesarioParaCancelarUnPorcentajeDeDeuda(_porcentajeDeuda, _tiempo)

    const periodoAnalisis = this.calcularEnBaseAPeriodo(_tasaInteres, cuotaPrimerPeriodo, amortizacionConstantes, _deuda, _tiempo, _periodo);

    return {
      cuotaPrimerPeriodo,
      amortizacionConstantes,
      interesPrimerPeriodo,
      tasaAmortizacion,
      tiempoNecesarioCancelarDeuda,
      periodoAnalisis
    }
  }

  private calcularEnBaseAPeriodo(tasaInteres, cuotaPrimerPeriodo, amortizacionConstante, deuda, tiempo, periodo) {

    const cuotaPeriodica = cuotaPrimerPeriodo - (amortizacionConstante * tasaInteres * ( periodo -1 ));
    const interes = cuotaPeriodica - amortizacionConstante;
    const totalAmortizado = periodo * amortizacionConstante;

    const porcentajeTotalAmortizado = (totalAmortizado / deuda);

    const deudaSubsistente = deuda - totalAmortizado;

    const interesPagados = ( ( 2 * tiempo - periodo + 1 ) / 2) * amortizacionConstante * tasaInteres * periodo

    return {
      cuotaPeriodica,
      interes,
      totalAmortizado,
      porcentajeTotalAmortizado,
      deudaSubsistente,
      interesPagados
    }
  }

}


