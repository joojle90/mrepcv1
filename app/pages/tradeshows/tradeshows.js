import {Component} from '@angular/core';
import {
    Page, NavController
}
from 'ionic-angular';
import {
    MrepcData
}
from '../../providers/mrepc-data';
@
Component({
    templateUrl: 'build/pages/tradeshows/tradeshows.html',
    providers: [MrepcData]
})
export class TradeshowsPage {
    static get parameters() {
        return [
          [NavController], [MrepcData]
        ]
    }
    constructor(nav, mrepcdata) {
        this.nav = nav;
        this.mrepcdata = mrepcdata;

        mrepcdata.load();

        this.tradeshowslist = [];

        this.loadDataTradeshows();
    }

    loadDataTradeshows() {
        var monthname = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        return this.mrepcdata.getMrepcevents().then(data => {
            this.tradeshowslist = data.sort((a,b) => {
                var thedatea = a.eventdetail[0].startdate.split(" ");
                var setdatea = new Date (thedatea[2], monthname.indexOf(thedatea[1].toLowerCase()), thedatea[0]);
                var thedateb = b.eventdetail[0].startdate.split(" ");
                var setdateb = new Date (thedateb[2], monthname.indexOf(thedateb[1].toLowerCase()), thedateb[0]);
                return setdateb - setdatea;
            });
        });
    }
}
