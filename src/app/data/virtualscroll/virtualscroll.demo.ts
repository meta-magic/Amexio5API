
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'virtualscroll-demo',
    templateUrl: './virtualscroll.demo.html',

})
export class AmexioVirtualScrollDemo {
    copyMsgArray: any[];

    DEMO_FIRST_URL = 'https://meta-magic.github.io/amexio-virtualscroll-demo/#/sc/';
    DEMO_SEC_URL = 'https://meta-magic.github.io/amexio-virtualscroll-demo/#/mvs/';
    DEMO_THREE_URL = 'https://meta-magic.github.io/amexio-virtualscroll-demo/#/svs/';
    constructor(private http: HttpClient) {
    }


    // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    onCopyClick() {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        } else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    }


    onDemoFirstClick() {
        window.open(this.DEMO_FIRST_URL);
    }
    onDemoSecondClick() {
        window.open(this.DEMO_SEC_URL);

    }
    onDemoThreeClick() {
        window.open(this.DEMO_THREE_URL);

    }
}





