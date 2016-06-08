import {Component} from '@angular/core';
import {
    Page, NavController
}
from 'ionic-angular';
import {
    MrepcData
}
from '../../providers/mrepc-data';

/*
  Generated class for the CategoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@
Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [MrepcData],
    config: {
        tabbarPlacement: "top"
    }
})
export class HomePage {
    static get parameters() {
        return [
          [NavController], [MrepcData]
        ]
    }
    constructor(nav, mrepcdata) {
        this.nav = nav;
        this.mrepcdata = mrepcdata;

        mrepcdata.load();

        this.mastermenulist = [];
        this.mrepceventslist = [];

        this.loadDataMastermenu();
        this.loadDataMrepcevents();
    }

    loadDataMastermenu() {
        return this.mrepcdata.getMastermenu().then(data => {
            this.mastermenulist = data;
        });
    }

    loadDataMrepcevents() {
        var monthname = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        return this.mrepcdata.getMrepcevents().then(data => {
            this.mrepceventslist = data.filter(newdata => {
                var thedate = newdata.eventdetail[0].startdate.split(" ");
                var setdate = new Date (thedate[2], monthname.indexOf(thedate[1].toLowerCase()), thedate[0]);
                return setdate > new Date();
            });
            this.mrepceventslist = this.mrepceventslist.sort((a,b) => {
                var thedatea = a.eventdetail[0].startdate.split(" ");
                var setdatea = new Date (thedatea[2], monthname.indexOf(thedatea[1].toLowerCase()), thedatea[0]);
                var thedateb = b.eventdetail[0].startdate.split(" ");
                var setdateb = new Date (thedateb[2], monthname.indexOf(thedateb[1].toLowerCase()), thedateb[0]);
                return setdatea - setdateb;
            });
        });
    }
}
