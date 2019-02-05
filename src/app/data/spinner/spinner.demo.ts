/**
 * Created by kedar on 19/9/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerModel } from './spinner.model';
@Component({
    selector: 'amexio-spinner-demo',
    templateUrl: './spinner.demo.html',

})
export class AmexioSpinnerDemo {
    htmlCode: string;
    typeScriptCode: string;
    copyMsgArray: any[];
    color: any;
    boxFlag: any;
    spinnerData: any;
    isBoxShow: boolean = false;
    colorModel: ColorModel;
    clickShow: boolean = true;
    buttonShowHide: string = 'Show';
    text: string = 'Hide';

    showSpinner: any;
    spinnerType: string;
    hposition: string;
    vposition: string;
    spinnerModel: SpinnerModel;
    constructor(private http: HttpClient) {
        this.colorModel = new ColorModel();
        this.spinnerModel = new SpinnerModel();
        this.spinnerData = {
            "type": [
                {
                    "spinnerType": "rectanglebounce",
                },
                {
                    "spinnerType": "ring",
                },
                {
                    "spinnerType": "halfcircle",
                },
                {
                    "spinnerType": "fadingcircle",
                },
                {
                    "spinnerType": "ballspin",
                },
                {
                    "spinnerType": "firespin",
                },
                {
                    "spinnerType": "threebounce",
                },
                {
                    "spinnerType": "spinnerround",
                }
            ],
            "horizontalPosition": [
                {
                    "hposition": "left"
                },
                {
                    "hposition": "center"
                },
                {
                    "hposition": "right"
                }
            ],
            "verticalPosition": [
                {
                    "vposition": "top"
                },
                {
                    "vposition": "center"
                },
                {
                    "vposition": "bottom"
                }
            ]
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

    //THIS METHOD IS USED FOR SETTING COLOR FOR INDICATOR
    setColorForIndictor(colorName: any) {
        this.colorModel.color = colorName.target.value;
    }
    // Method For the spinner show and hide
    onButtonClick() {

        if (this.clickShow) {
            this.text = 'Show';
        } else {
            this.text = 'Hide'
        }
        this.clickShow = !this.clickShow;
    }


    onAdvanceClick() {
        if (this.spinnerModel.hposition != null && this.spinnerModel.spinnerType != null && this.spinnerModel.vposition != null) {
            this.buttonShowHide = 'Show';

        } else {
            this.buttonShowHide = 'Hide';
        }
        this.isBoxShow = !this.isBoxShow;
        if(this.isBoxShow){
            this.buttonShowHide = 'Hide';
        }else{
            this.buttonShowHide = 'Show';
        }
    }
}



export class ColorModel {
    color: string;
    show: boolean;
    constructor() {

    }
}
