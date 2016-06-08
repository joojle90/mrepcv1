import {Component} from '@angular/core';
import {
    Page, NavController
}
from 'ionic-angular';
import {
    HomePage
}
from '../home/home';

/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@
Component({
    templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
    static get parameters() {
        return [
          [NavController]
        ]
    }
    constructor(nav) {
        this.nav = nav;
        this.tab1Root = HomePage;
//        this.tab2Root = TophitsPage;
//        this.tab3Root = CategoryPage;
    }
}
