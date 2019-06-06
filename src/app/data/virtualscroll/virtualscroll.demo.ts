
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'virtualscroll-demo',
    templateUrl: './virtualscroll.demo.html',

})
export class AmexioVirtualScrollDemo {
    copyMsgArray: any[];
    numbers: number[] = [];
    localData: any;
    localData2d: any;
    carouselData:any;
    constructor(private http: HttpClient) {

         http.get('assets/data/componentdata/virtualscroller.json')
            .subscribe((response: any) => {
                 this.localData = response;
            });
            http.get('assets/data/componentdata/virtualscroller2d.json')
            .subscribe((response: any) => {
                 this.localData2d = response;
            });
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





