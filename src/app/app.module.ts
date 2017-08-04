import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CapitalizacionMenuPage } from '../pages/capitalizacion-menu/capitalizacion-menu';
import { DTEPageCap } from '../pages/capitalizacion-menu/components/dte/dte';
import { CapitalFuturoCAPPage } from '../pages/capitalizacion-menu/components/capital-futuro/capital-futuro';
import { TiempoCAPPage } from '../pages/capitalizacion-menu/components/tiempo/tiempo';
import { CuotaCAPPage } from '../pages/capitalizacion-menu/components/cuota/cuota';

import { FinanciacionMenuPage } from '../pages/financiacion-menu/financiacion-menu';
import { DTEPageFin } from '../pages/financiacion-menu/components/dte/dte';
import { CuotaPageFin } from '../pages/financiacion-menu/components/cuota-financiacion/cuota';
import { TiempoPageFin } from '../pages/financiacion-menu/components/tiempo-financiacion/tiempo';
import { DeudaPageFin } from '../pages/financiacion-menu/components/deuda-financiacion/deuda';

import { InversionesMenuPage } from '../pages/inversiones-menu/inversiones-menu';
import { VanPage } from '../pages/inversiones-menu/components/van/van';
import { TirPage } from '../pages/inversiones-menu/components/tir/tir';


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
    DTEPageCap,
    DTEPageFin,
    InversionesMenuPage,
    VanPage,
    TirPage,
    CapitalFuturoCAPPage,
    TiempoCAPPage,
    CuotaCAPPage,
    TiempoPageFin,
    CuotaPageFin,
    DeudaPageFin

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
    DTEPageCap,
    DTEPageFin,
    InversionesMenuPage,
    VanPage,
    TirPage,
    CapitalFuturoCAPPage,
    TiempoCAPPage,
    CuotaCAPPage,
    CuotaPageFin,
    TiempoPageFin,
    DeudaPageFin
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
