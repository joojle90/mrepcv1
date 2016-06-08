import {
    Injectable
}
from '@angular/core';
import {
    Http
}
from '@angular/http';


@
Injectable()
export class MrepcData {
    static get parameters() {
        return [[Http]];
    }
    constructor(http) {
        // inject the Http provider and set to this instance
        this.http = http;
    }

    load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('data/mrepcdata.json').subscribe(res => {
                resolve(res.json());
            });
        });
    }

    getLeftsidemenu() {
        return this.load().then(data => {
            return data.leftsidemenu;
        });
    }

    getMastermenu() {
        return this.load().then(data => {
            return data.mastermenu;
        });
    }

    getMrepcevents() {
        return this.load().then(data => {
            return data.mrepcevents;
        });
    }

}
