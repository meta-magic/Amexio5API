/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { HTTPService } from '../../service/http.service';
import { ThemeServiceService } from '../../theme-service.service';


@Component({
        selector: 'round-edge-demo',
        templateUrl: './round-edge.html',
})
export class RoundEdgeDemo implements OnInit {
        htmlCode: string;
        typeScriptCode: string;
        userDefineColorData: any;
        userDefineColors: any;
        sourceData: any;
        stackData: any;
        copyMsgArray: any[];
        inputData: any;
        themeData: any

        constructor(private themeServiceService: ThemeServiceService,
                private _cookieService: CookieService, private httpService: HTTPService, private http: HttpClient, public router: Router) {
                this.inputData =
                        [{
                                "name": "theme-style",
                                "description": "supports round-edge theme as of now",
                                "version": "5.19 onwards",
                                "type": "string",
                                "default": ""
                        }
                        ]
                        


        }

        ngOnInit() {

        }

        onRowSelect(data: any) {
                this.router.navigate([data.link]);
        }

}


