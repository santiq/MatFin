import { Component } from '@angular/core';

import { DTEPage } from '../dte/dte';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DTEPage;

  constructor() {

  }
}
