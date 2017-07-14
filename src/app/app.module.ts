import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CapitalizacionMenuPage } from '../pages/capitalizacion-menu/capitalizacion-menu';
import { DTEPageCap } from '../pages/capitalizacion-menu/components/dte/dte';
import { FinanciacionMenuPage } from '../pages/financiacion-menu/financiacion-menu';
import { DTEPageFin } from '../pages/financiacion-menu/components/dte/dte';

import { MenuPage } from '../pages/menu/menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'chart.js';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    CapitalizacionMenuPage,
    FinanciacionMenuPage,
    DTEPageCap
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    CapitalizacionMenuPage,
    FinanciacionMenuPage,
    DTEPageCap
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
