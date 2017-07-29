import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'cuota.html'
})

export class CuotaPageFin {

  public Tasa = 0.1;
  public Deuda = 100000;
  public Tiempo = 10;
  public MomentoValuacion =  3;
  public CuotaAdelantada = false;

  public Cuota = 0;

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }

  public doCalculation(): void {
    let g = Math.pow((1+this.Tasa), this.Tiempo) -1;
    let h = this.Tasa * Math.pow((1 + this.Tasa), this.MomentoValuacion + (this.CuotaAdelantada ? 1: 0)  )
    this.Cuota = this.Deuda / ( g  / h );

    console.log(this.Cuota);
  }
}
