import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tir.html'
})

export class TIRPage {

  public flujosFondo: number[];

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }

  public cambiarPeriodicidad(value){
    
  }

  public doCalculation(): void {
    
  }
}
