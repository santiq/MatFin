import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'van.html'
})

export class VanPage {
  public convertToNumber(event): number { return parseFloat(event); }
  public flujosFondo: any[] = [{ value: 1000 },{ value: 1500 }, { value: 2000 }, { value: 2500 }];
  public r: number = 0.1;
  public van: number;

  constructor(public navCtrl: NavController) {
    this.doCalculation();
  }
  public agregarFlujo(): void {
    this.flujosFondo.push({ value: 0 });
  }

  public doCalculation(): void {
    this.van = this.flujosFondo.reduce((prev, curr, index, array) => {
      if(index === 0) {
        return curr.value;
      } else {
        return prev + (curr.value) / Math.pow((1+this.r),index);
      }
    }, 0)
  }
}
