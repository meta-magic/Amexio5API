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

        constructor(private themeServiceService: ThemeServiceService,
                private _cookieService: CookieService, private httpService: HTTPService, private http: HttpClient, public router: Router) {
                this.inputData =
                        [{
                                "name": "color-palette",
                                "description": "Color Palette can be classic/ vibrant/ random or any of the 6 defined theme colors (amexio-theme-color1, 2...).",
                                "version": "5.12 onwards",
                                "type": "string",
                                "default": ""
                        },
                        {
                                "name": "gradient",
                                "description": "If true provides linear gradient shade",
                                "version": "5.12 onwards",
                                "type": "boolean",
                                "default": "true"
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

        paletteColorTheme(data: any) {
                this.themeData = JSON.parse(this._cookieService.get('theme-info'));
                let response: any;
                this.httpService.fetch('https://api.amexio.org/api/mda/' + this.themeData.themeName + '.json').subscribe(data => {
                        response = data;
                }, error => {
                }, () => {
                        let themeColor = response.themeColor;
                        data.forEach(element => {
                                this.themeServiceService.themeColorData.subscribe((theme: any) => {
                                        if (theme && theme.length > 0) {
                                                if (element.colorpalette === 'amexio-theme-color1') {
                                                        element.actualColor.bgColor = theme[1].value;
                                                        element.actualColor.fgcolor = theme[28].value;
                                                       
                                                }
                                                if (element.colorpalette === 'amexio-theme-color2') {
                                                        element.actualColor.bgColor = theme[2].value;
                                                        element.actualColor.fgcolor = theme[29].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color3') {
                                                        element.actualColor.bgColor = theme[3].value;
                                                        element.actualColor.fgcolor = theme[30].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color4') {
                                                        element.actualColor.bgColor = theme[4].value;
                                                        element.actualColor.fgcolor = theme[31].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color5') {
                                                        element.actualColor.bgColor = theme[5].value;
                                                        element.actualColor.fgcolor = theme[32].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color6') {
                                                        element.actualColor.bgColor = theme[6].value;
                                                        element.actualColor.fgcolor = theme[33].value;
                                                }
                                        } else {
                                                if (element.colorpalette === 'amexio-theme-color1') {
                                                        element.actualColor.bgColor = themeColor[1].value;
                                                        element.actualColor.fgcolor = themeColor[28].value;
                                                        //                                         
                                                }
                                                if (element.colorpalette === 'amexio-theme-color2') {
                                                        element.actualColor.bgColor = themeColor[2].value;
                                                        element.actualColor.fgcolor = themeColor[29].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color3') {
                                                        element.actualColor.bgColor = themeColor[3].value;
                                                        element.actualColor.fgcolor = themeColor[30].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color4') {
                                                        element.actualColor.bgColor = themeColor[4].value;
                                                        element.actualColor.fgcolor = themeColor[31].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color5') {
                                                        element.actualColor.bgColor = themeColor[5].value;
                                                        element.actualColor.fgcolor = themeColor[32].value;
                                                }
                                                if (element.colorpalette === 'amexio-theme-color6') {
                                                        element.actualColor.bgColor = themeColor[6].value;
                                                        element.actualColor.fgcolor = themeColor[33].value;
                                                }

                                        }

                                })
                        });

                        this.componentData = data
                });
        }


        fetchJsonData() {
                let response: any;
                this.httpService.fetch('assets/theme.json').subscribe(data => {
                        response = data;
                }, error => {
                }, () => {
                        let componentData = response;
                        this.paletteColorTheme(componentData);
                });

        }
}


