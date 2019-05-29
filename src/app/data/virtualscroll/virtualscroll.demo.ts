
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'virtualscroll-demo',
    templateUrl: './virtualscroll.demo.html',

})
export class AmexioVirtualScrollDemo {
    copyMsgArray: any[];
    numbers: number[] = [];
   
    constructor(private http: HttpClient) {
        for (let index = 0; index < 10000; index++) {
            this.numbers.push(index);
          }
    }


    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    onCopyClick() {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        } else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    }


}





