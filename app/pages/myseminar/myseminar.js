import {Component} from '@angular/core';
import {
    IonicApp, Page, NavController
}
from 'ionic-angular';
import {
    MrepcData
}
from '../../providers/mrepc-data';
import {
    PlayvideoPage
}
from '../showdetails/showdetails';

@
Component({
    templateUrl: 'build/pages/myseminar/myseminar.html',
    providers: [MrepcData]
})
export class MySeminarPage {
    static get parameters() {
        return [
          [IonicApp], [NavController], [MrepcData]
        ]
    }
    constructor(app, nav, mrepcdata) {
        this.app = app;
        this.nav = nav;
        this.mrepcdata = mrepcdata;

        mrepcdata.load();

        this.promotionlist = [];

        this.loadDataPromotion();
    }

    loadDataPromotion() {
        return this.mrepcdata.getDataMovie().then(data => {
            this.promotionlist = data.filter(newdata => newdata.discount > 0);
            console.log(this.promotionlist);
        });
    }

    getpromotion() {
        this.nav.push(BookticketPage);
    }

    watchtrailer(moviedetail) {
        var trailerlink = `https://www.youtube.com/embed/${moviedetail.trailer}`;
        this.nav.push(PlayvideoPage, {
            trailerlinks: trailerlink,
            moviedetails: moviedetail
        });
    }
}
