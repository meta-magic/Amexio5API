/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

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
        constructor(private http: HttpClient, public router: Router) {
                this.inputData =
                        [{
                                input: 'color-palette',
                                data: 'values are classic, vibrant, random. Default: classic'
                        }, {
                                input: 'amexio-color',
                                data: 'User can provide any of the 6 theme colors. values are amexio-theme-color1 (includes both BG color and FG color), amexio-theme-color2, amexio-theme-color3, ...'
                        }, {
                                input: 'gradient',
                                data: 'If set true, provides linear gradient effect for particular theme applied.'
                        }
                        ],
                        this.componentData =
                        [{
                                componentName: 'amexio-navbar',
                                colorpalette: 'amexio-theme-color1',
                                link: "navigation/navbar-demo"

                        }, {
                                componentName: 'amexio-panel',
                                colorpalette: 'amexio-theme-color2',
                                link: "panes/panel-demo"

                        }, {
                                componentName: 'amexio-accordion',
                                colorpalette: 'amexio-theme-color3',
                                link: "layout/accordion-demo"

                        },{
                                componentName: 'amexio-card',
                                colorpalette: 'amexio-theme-color4',
                                link: "layout/card-form-demo"

                        },{
                                componentName: 'amexio-grid',
                                colorpalette: 'amexio-theme-color5',
                                link: "data/simplegrid-demo"
                        },{
                                componentName: 'amexio-window',
                                colorpalette: 'amexio-theme-color6',
                                link: "panes/window-demo"

                        },{
                                componentName: 'amexio-box',
                                colorpalette: 'amexio-theme-color6',
                                link: "layout/box-demo"

                        },{
                                componentName: 'amexio-dialogue',
                                colorpalette: 'amexio-theme-color6',
                                link: "panes/dialogue-demo"

                        },{
                                componentName: 'amexio-tab',
                                colorpalette: 'amexio-theme-color3',
                                link: "panes/basic-tab-demo"

                        },{
                                componentName: 'amexio-ce-card',
                                colorpalette: 'amexio-theme-color4',
                                link: "/creative/card-ce-demo"

                        },{
                                componentName: 'amexio-ce-window',
                                colorpalette: 'amexio-theme-colo6',
                                link: "creative/window-ce-demo"

                        }
                        ]

        }

        ngOnInit() {

        }

        onRowSelect(data:any){
                debugger;
                this.router.navigate([data.link]);
            }

}


