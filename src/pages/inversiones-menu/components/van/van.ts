import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  templateUrl: 'van.html'
})

export class VanPage {
  public convertToNumber(event): number { return parseFloat(event); }
  public flujosFondo: any[] = [{ value: 1000 },{ value: 1500 }, { value: 2000 }, { value: 2500 }];
  public r: number = 0.1;
  public van: number;

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController) {
    this.doCalculation();
  }
  public agregarFlujo(): void {
    this.flujosFondo.push({ value: 0 });
  }

  public doCalculation(): void {
    this.van = this.flujosFondo.reduce((prev, curr, index, array) => {
      let _prev = parseFloat(prev);
      let _currValue = parseFloat(curr.value);
      if(index === 0) {
        return _currValue;
      } else {
        return _prev + (_currValue) / Math.pow((1+this.r),index);
      }
    }, 0)
    this.ga.trackEvent('Calculo', 'Inversiones:Van');
  }
}
