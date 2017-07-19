import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'van.html'
})

export class VanPage {

  public flujosFondo: number[];
  public r: number;
  public van: number;

  constructor(public navCtrl: NavController) {

  }

  public doCalculation(): void {
    this.van = this.flujosFondo.reduce((prev, number, index, array) => {
      if(index === 0) {
        return number;
      } else {
        return prev + (number) / Math.pow((1+this.r),index);
      }
    }, 0)
  }
}
