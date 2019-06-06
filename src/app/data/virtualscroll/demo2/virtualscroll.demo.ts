
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'virtualscroll-demo-2',
    templateUrl: './virtualscroll.demo.html',

})
export class AmexioVirtualScrollDemo2 {
    copyMsgArray: any[];
    numbers: number[] = [];
    carouselData:any;
    constructor(private http: HttpClient) {
            http.get('assets/data/componentdata/virtualscrollercarousel.json')
            .subscribe((response: any) => {
                 this.carouselData = response;
            });
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


}





