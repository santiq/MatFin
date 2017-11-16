import { NgModule, ErrorHandler } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ConversionTasasMenuPage } from '../pages/conversion-tasas/conversion-tasas-menu';

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
import { ValuacionAccionesPage } from '../pages/inversiones-menu/components/valuacion-acciones/valuacion-acciones';


import { SistemasMenuPage } from '../pages/sistema-menu/sistema-menu';
import { SistemaFrancesPage } from '../pages/sistema-menu/components/sistema-frances/sistema-frances';
import { SistemaAlemanPage } from '../pages/sistema-menu/components/sistema-aleman/sistema-aleman';

import { InteresSimpleMenuPage } from '../pages/interes-simple-menu/interes-simple-menu';
import { InteresSimpleMontoPage } from '../pages/interes-simple-menu/components/monto/interes-simple-monto.ts';
import { InteresSimpleCapitalPage } from '../pages/interes-simple-menu/components/capital/interes-simple-capital.ts';
import { InteresSimpleTasaPage } from '../pages/interes-simple-menu/components/tasa/interes-simple-tasa.ts';
import { InteresSimpleTiempoPage } from '../pages/interes-simple-menu/components/tiempo/interes-simple-tiempo.ts';

import { InteresCompuestoMenuPage } from '../pages/interes-compuesto-menu/interes-compuesto-menu';
import { InteresCompuestoMontoPage } from '../pages/interes-compuesto-menu/components/monto/interes-compuesto-monto.ts';
import { InteresCompuestoCapitalPage } from '../pages/interes-compuesto-menu/components/capital/interes-compuesto-capital.ts';
import { InteresCompuestoTasaPage } from '../pages/interes-compuesto-menu/components/tasa/interes-compuesto-tasa.ts';
import { InteresCompuestoTiempoPage } from '../pages/interes-compuesto-menu/components/tiempo/interes-compuesto-tiempo.ts';

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
    ConversionTasasMenuPage,
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
    DeudaPageFin,
    SistemasMenuPage,
    SistemaFrancesPage,
    ValuacionAccionesPage,
    SistemaAlemanPage,
    InteresSimpleMenuPage,
    InteresCompuestoMenuPage,
    InteresCompuestoMontoPage,
    InteresCompuestoCapitalPage,
    InteresCompuestoTasaPage,
    InteresCompuestoTiempoPage,
    InteresSimpleMontoPage,
    InteresSimpleCapitalPage,
    InteresSimpleTasaPage,
    InteresSimpleTiempoPage,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: MenuPage, name: 'Menu', segment: 'menu' },

        { component: CapitalizacionMenuPage, name: 'CapitalizacionMenu', segment: 'menu/capitalizacion' },
        { component: DTEPageCap, name: 'CapitalizacionDTE', segment: 'menu/capitalizacion/DTE' },
        { component: CuotaCAPPage, name: 'CapitalizacionCuota', segment: 'menu/capitalizacion/cuota' },
        { component: TiempoCAPPage, name: 'CapitalizacionTiempo', segment: 'menu/capitalizacion/tiempo' },
        { component: CapitalFuturoCAPPage, name: 'CapitalizacionCapitalFuturo', segment: 'menu/capitalizacion/capital-futuro' },

        { component: FinanciacionMenuPage, name: 'FinanciacionMenu', segment: 'menu/financiacion' },
        { component: DTEPageFin, name: 'FinanciacionDTE', segment: 'menu/financiacion/DTE' },
        { component: CuotaPageFin, name: 'FinanciacionCuota', segment: 'menu/financiacion/cuota' },
        { component: TiempoPageFin, name: 'FinanciacionTiempo', segment: 'menu/financiacion/tiempo' },
        { component: DeudaPageFin, name: 'FinanciacionDeuda', segment: 'menu/financiacion/deuda' },
        
        { component: InversionesMenuPage, name: 'InversionesMenu', segment: 'menu/inversiones' },
        { component: VanPage, name: 'InversionesVAN', segment: 'menu/inversiones/van' },
        { component: TirPage, name: 'InversionesTIR', segment: 'menu/inversiones/tir' },
        { component: ValuacionAccionesPage, name: 'InversionesValuacionAcciones', segment: 'menu/inversiones/valuacion-acciones'},

        { component: SistemasMenuPage, name: 'SistemasMenu', segment: 'menu/sistemas' },
        { component: SistemaFrancesPage, name: 'SistemaFrances', segment: 'menu/sistemas/frances' },
        { component: SistemaAlemanPage, name: 'SistemaAleman', segment: 'menu/sistemas/aleman' },

        { component: InteresSimpleMenuPage, name: 'InteresSimpleMenu', segment: 'menu/interes-simple' },
        { component: InteresSimpleMontoPage, name: 'InteresSimpleMonto', segment: 'menu/interes-simple/monto' },
        { component: InteresSimpleCapitalPage, name: 'InteresSimpleCapital', segment: 'menu/interes-simple/capital' },
        { component: InteresSimpleTasaPage, name: 'InteresSimpleTasa', segment: 'menu/interes-simple/tasa' },
        { component: InteresSimpleTiempoPage, name: 'InteresSimpleTiempo', segment: 'menu/interes-simple/tiempo' },

        { component: InteresCompuestoMenuPage, name: 'InteresCompuestoMenu', segment: 'menu/interes-compuesto' },
        { component: InteresCompuestoMontoPage, name: 'InteresCompuestoMongto', segment: 'menu/interes-compuesto/monto' },
        { component: InteresCompuestoCapitalPage, name: 'InteresCompuestoCapital', segment: 'menu/interes-compuesto/capital' },
        { component: InteresCompuestoTasaPage, name: 'InteresCompuestoTasa', segment: 'menu/interes-compuesto/tasa' },
        { component: InteresCompuestoTiempoPage, name: 'InteresCompuestoTiempo', segment: 'menu/interes-compuesto/tiempo' },

      ]
    })
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
    DeudaPageFin,
    ValuacionAccionesPage,
    SistemasMenuPage,
    SistemaFrancesPage,
    SistemaAlemanPage,
    InteresSimpleMenuPage,
    InteresCompuestoMenuPage,
    InteresCompuestoMontoPage,
    InteresCompuestoCapitalPage,
    InteresCompuestoTasaPage,
    InteresCompuestoTiempoPage,
    InteresSimpleMontoPage,
    InteresSimpleCapitalPage,
    InteresSimpleTasaPage,
    InteresSimpleTiempoPage,
  ],
  providers: [
    GoogleAnalytics,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
