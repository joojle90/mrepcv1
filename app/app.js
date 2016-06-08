import {
    ViewChild, Component
}
from '@angular/core';
import {
    App, Platform, ionicBootstrap
}
from 'ionic-angular';
import {
    StatusBar
}
from 'ionic-native';
import {
    MrepcData
}
from './providers/mrepc-data';
import {
    TabsPage
}
from './pages/tabs/tabs';
import {
    HomePage
}
from './pages/home/home';
import {
    TradeshowsPage
}
from './pages/tradeshows/tradeshows';
/*import {
    PlayvideoPage
}
from './pages/showdetails/showdetails';
import {
    MyEventsPage
}
from './pages/myevents/myevents';
import {
    TutorialPage
}
from './pages/tutorial/tutorial';
import {
    EventsPage
}
from './pages/events/events';
import {
    MySeminarPage
}
from './pages/myseminar/myseminar';
import {
    AboutusPage
}
from './pages/aboutus/aboutus';
import {
    SeminarPage
}
from './pages/seminar/seminar';
*/

@
Component({
    templateUrl: 'build/app.html',
    queries: {
        nav: new ViewChild('content')
    }
})
class MrepcApp {
    static get parameters() {
        return [
            [MrepcData], [Platform]
        ]
    }
    constructor(mrepcData, platform) {
        this.mrepcData = mrepcData;
        this.platform = platform;

        mrepcData.load();

        // We plan to add auth to only show the login page if not logged in
        this.root = TabsPage;

        this.leftsidemenu = [];
        this.leftsidemenu2 = [];

        this.updateleftsidemenu();

        this.platform.ready().then(() => {
            StatusBar.styleDefault();
            document.addEventListener("backbutton", () => {

                let activeVC = this.nav.getActive();
                let page = activeVC.instance;
                if (page instanceof TabsPage) {
                    alert("Hold back button to close app");
                }

            }, false);
        });
    }

    updateleftsidemenu() {
        return this.mrepcData.getLeftsidemenu().then(data => {
            this.leftsidemenu = data;

            var sidemenudata = [];
            var sideitems = {};
            var classcomps = [TabsPage, TradeshowsPage];
            var j = 0;
            var count;

            for (var i in data) {
                for (var s in data[i].submenu) {
                    sidemenudata.push({
                        id: j,
                        classcomp: classcomps[j]
                    });
                    j++;
                }
            }
            sideitems.sidemenudata = sidemenudata;
            this.leftsidemenu2 = sidemenudata;
        });
    }

    openPage(id) {
        this.nav.setRoot(this.leftsidemenu2[id - 1].classcomp);
    }
}

ionicBootstrap(MrepcApp, [MrepcData], {
  tabbarPlacement: 'top'
});
