/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { HTTPService } from '../../service/http.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
        selector: 'color-palette-demo',
        templateUrl: './color-palette.html',
})
export class ColorPaletteDemo implements OnInit {
        htmlCode: string;
        typeScriptCode: string;
        userDefineColorData: any;
        userDefineColors: any;
        sourceData: any;
        stackData: any;
        copyMsgArray: any[];
        inputData: any;
        componentData: any;
        themeData: any
        constructor( private _cookieService: CookieService,  private httpService: HTTPService, private http: HttpClient, public router: Router) {
                this.inputData =
                        [{
                                input: 'color-palette',
                                data: 'values are classic, vibrant, random, specific. Default: classic'
                        }, {
                                input: 'gradient',
                                data: 'If set true, provides linear gradient effect for particular theme applied.'
                        }
                        ],
                        this.componentData = [];


        }

        ngOnInit() {

                this.fetchJsonData();
        }

        onRowSelect(data: any) {
                this.router.navigate([data.link]);
        }

        paletteColorTheme(data:any) {
                this.themeData = JSON.parse(this._cookieService.get('theme-info'));
                console.log("this._cookieService.get('theme-info')", this._cookieService.get('theme-info'));
                let response: any;
                this.httpService.fetch('https://api.amexio.org/api/mda/' + this.themeData.themeName +'.json').subscribe(data => {
                  response = data;
                }, error => {
                }, () => {
                        console.log("RESPONSDE", response.themeColor);
                  let themeColor = response.themeColor;
                        data.forEach(element => {
                         if (  element.colorpalette === 'amexio-theme-color1') {
                           element.actualColor.bgColor = themeColor[1].value;
                           element.actualColor.fgcolor = themeColor[28].value;      
                         }
                         if (  element.colorpalette === 'amexio-theme-color2') {
                                element.actualColor.bgColor = themeColor[2].value;
                                element.actualColor.fgcolor = themeColor[29].value;      
                              }
                              if (  element.colorpalette === 'amexio-theme-color3') {
                                element.actualColor.bgColor = themeColor[3].value;
                                element.actualColor.fgcolor = themeColor[30].value;      
                              }
                              if (  element.colorpalette === 'amexio-theme-color4') {
                                element.actualColor.bgColor = themeColor[4].value;
                                element.actualColor.fgcolor = themeColor[31].value;      
                              }
                              if (  element.colorpalette === 'amexio-theme-color5') {
                                element.actualColor.bgColor = themeColor[5].value;
                                element.actualColor.fgcolor = themeColor[32].value;      
                              }
                              if (  element.colorpalette === 'amexio-theme-color6') {
                                element.actualColor.bgColor = themeColor[6].value;
                                element.actualColor.fgcolor = themeColor[33].value;      
                              }
                        });
             
                    this.componentData=data
                    console.log("this.componentData",this.componentData)
            
                });
        }


        fetchJsonData() {
                let response: any;
                this.httpService.fetch('/assets/theme.json').subscribe(data => {
                        response = data;
                }, error => {
                }, () => {
                       let componentData =response;
                       this.paletteColorTheme(componentData);
                });
    
        }

}


