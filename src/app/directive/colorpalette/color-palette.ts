/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
        constructor(private http: HttpClient) {
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
                                colorpalette: 'amexio-theme-color1'
                        }, {
                                componentName: 'amexio-panel',
                                colorpalette: 'amexio-theme-color2'
                        }, {
                                componentName: 'amexio-accordion',
                                colorpalette: 'amexio-theme-color3'
                        },{
                                componentName: 'amexio-card',
                                colorpalette: 'amexio-theme-color4'
                        },{
                                componentName: 'amexio-grid',
                                colorpalette: 'amexio-theme-color5'
                        },{
                                componentName: 'amexio-window',
                                colorpalette: 'amexio-theme-color6'
                        },{
                                componentName: 'amexio-box',
                                colorpalette: 'amexio-theme-color6'
                        },{
                                componentName: 'amexio-dialogue',
                                colorpalette: 'amexio-theme-color6'
                        },{
                                componentName: 'amexio-tab',
                                colorpalette: 'amexio-theme-color3'
                        }
                        ]

        }

        ngOnInit() {

        }

}


