import { Component } from '@angular/core';

import { PalestraPage } from '../palestra/palestra';
import { LocalPage } from '../local/local';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PalestraPage;
  tab3Root = LocalPage;

  constructor() {

  }
}
