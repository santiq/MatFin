import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'valuacion-acciones.html'
})

export class ValuacionAccionesPage {
  public Dividendos:number;
  public Tasa: number;
  public TasaDividendo: number;
  public PrecioTeorico: number;
  public PETeorico: number;
  constructor(public navCtrl: NavController) {
    this.Dividendos = 4.27;
    this.Tasa = 0.36;
    this.TasaDividendo = 0.25;
    this.doCalculation(this.Dividendos, this.Tasa, this.TasaDividendo);
  }


  public doCalculation(dividendo, tasa, tasaDividendo): void {
    let _dividendo = parseFloat(dividendo);
    let _tasa = parseFloat(tasa);
    let _tasaDividendo = parseFloat(tasaDividendo);
    console.log(dividendo, tasa, tasaDividendo)
    console.log(_dividendo, _tasa, _tasaDividendo)
    this.PrecioTeorico = _dividendo / (_tasa - _tasaDividendo );
    this.PETeorico = this.PrecioTeorico / _dividendo;

  }

}
