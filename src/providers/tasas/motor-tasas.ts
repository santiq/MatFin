export class MotorTasas {

  constructor() { }

  private EfectivaDescuento(
    tasaEfectiva
  ){
    return tasaEfectiva / (1 + tasaEfectiva);
  }

  private EfectivaSuperiodica(
    tasaEfectiva: number,
    frecuenciaCapitalizacion: number,
  ){
    return Math.pow(1 + tasaEfectiva, 1 / frecuenciaCapitalizacion) - 1;
  }

  private EfectivaSuperiodicaDescuento(
    tasaEfectivaSuperiodica: number,
  ){
    return tasaEfectivaSuperiodica / (1 + tasaEfectivaSuperiodica)
  }

  private Instantanea(
    tasaEfectiva: number,
  ){
    return Math.log(1 + tasaEfectiva);
  }

  private NominalAnual(
    efectivaSuperiodica: number,
    frecuenciaCapitalizacion: number,
  ){
    return efectivaSuperiodica * frecuenciaCapitalizacion;
  }

  private NominalAnualDescuento(
    efectivaSuperiodicaDescuento,
    frecuenciaCapitalizacion
  ){
    return efectivaSuperiodicaDescuento * frecuenciaCapitalizacion;
  }


  public CalculateModuloEfectiva(
    tasaEfectiva: number, // Tasa Efectiva
    frecuenciaCapitalizacion: number, // Frecuencia Capitalizacion
  ) {
    const efectivaSuperiodica = this.EfectivaSuperiodica(tasaEfectiva, frecuenciaCapitalizacion);

    const nominalAnual = this.NominalAnual(efectivaSuperiodica, frecuenciaCapitalizacion);

    const efectivaDescuento = this.EfectivaDescuento(tasaEfectiva);

    const efectivaSuperiodicaDescuento = this.EfectivaSuperiodicaDescuento(efectivaSuperiodica);

    const instantanea = this.Instantanea(tasaEfectiva);

    const nominalAnualDescuento = this.NominalAnualDescuento(efectivaSuperiodicaDescuento, frecuenciaCapitalizacion)

    return {
      efectivaSuperiodica,
      nominalAnual,
      efectivaDescuento,
      efectivaSuperiodicaDescuento,
      instantanea,
      nominalAnualDescuento,
    }
  }
  

}

