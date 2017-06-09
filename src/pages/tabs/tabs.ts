import { Component } from '@angular/core';

import { DTEPage } from '../dte/dte';
import { DTEPageCap } from '../dte-cap/dte';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DTEPage;
  tab2Root = DTEPageCap;

  constructor() {

  }
}
