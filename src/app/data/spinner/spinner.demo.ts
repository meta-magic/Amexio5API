/**
 * Created by kedar on 19/9/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'amexio-spinner-demo',
    templateUrl: './spinner.demo.html',
  
})
export class AmexioSpinnerDemo {
    htmlCode: string;
    typeScriptCode: string;
    copyMsgArray: any[];
    color: any;
    spinnerData: any;
    AdvanceBoxShow: boolean = true;
    colorModel: ColorModel;
    clickShow: boolean = true;
    advanceData: string = 'Hide';
    text: string = 'Hide';

    spinnerType: string;
    hposition: string;
    vposition: string;

    constructor(private http: HttpClient) {
        this.getHtmlAndTypeScriptCode();
        this.colorModel = new ColorModel();

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

    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
        let responseHtml: any;
        let responseTs: any;

        //HTML FILE
        this.http.get('assets/data/code/data/spinner/spinner.html', { responseType: 'text' }).subscribe(data => {
            responseHtml = data;
        }, error => {
        }, () => {
            this.htmlCode = responseHtml;
        });

        //TS FILE
        this.http.get('assets/data/code/data/spinner/spinner.text', { responseType: 'text' }).subscribe(data => {
            responseTs = data;
        }, error => {
        }, () => {
            this.typeScriptCode = responseTs;
        });

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
        if(this.AdvanceBoxShow) {
            this.advanceData = 'Show';
        } else {
            this.advanceData =' Hide';
        }
        this.AdvanceBoxShow = !this.AdvanceBoxShow;
    }
}



export class ColorModel {
    color: string;
    show: boolean;
    constructor() {

    }
}
