/**
 * Created by ankita on 4/4/19.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: 'accesibility-page',
    templateUrl: './accessibility.demo.html',
})
export class AccessibilityDemo implements OnInit {
    htmlCode: string;
    typeScriptCode: string;
    userDefineColorData: any;
    userDefineColors: any;
    sourceData: any;
    copyMsgArray: any[];

    constructor(private http: HttpClient,public router: Router) {

    }
    ngOnInit() {

    }
    onRowSelect(data:any){
        this.router.navigate([data.link]);
    }
}


