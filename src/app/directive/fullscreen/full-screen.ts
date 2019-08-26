/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HTTPService } from '../../service/http.service';

@Component({
        selector: 'full-screen-demo',
        templateUrl: './full-screen.html',
})
export class FullScreenDemo implements OnInit {
        htmlCode: string;
        typeScriptCode: string;
        userDefineColorData: any;
        userDefineColors: any;
        sourceData: any;
        stackData: any;
        copyMsgArray: any[];
        inputData: any;
        themeData: any

        constructor(private httpService: HTTPService, private http: HttpClient, public router: Router) {
                this.inputData =
                [{
                        "name": "full-screen-type",
                        "description": "supports full-screen-type as browser and desktop",
                        "version": "5.19 onwards",
                        "type": "string",
                        "default": "browser"
                }
                ]
        }

        ngOnInit() {

        }

        onRowSelect(data: any) {
                this.router.navigate([data.link]);
        }

}


