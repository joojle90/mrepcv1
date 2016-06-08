import {
    Page, NavController
}
from 'ionic-angular';
import {Component} from "@angular/core";

/*
  Generated class for the BookticketPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@
Component({
    templateUrl: 'build/pages/aboutus/aboutus.html',
})
export class AboutusPage {
    static get parameters() {
        return [
          [NavController]
        ]
    }
    constructor(nav) {

    }
}
