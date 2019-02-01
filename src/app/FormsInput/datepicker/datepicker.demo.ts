/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'date-picker-demo', 
  templateUrl: './datepicker.demo.html',
})
export class DateTimePickerDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  currentDate: any;
  currentDate1: any;
  currentDate2: any;

  time: any;
  disabledDate: any[];
  date = new Date("March 21, 2018 01:15:00");

  onChangeTime(data: any) {
    this.time = data;
  }

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.disabledDate = [
      {
        "from": "13-Jul-2018",
        "to": "15-Jul-2018"
      },
      {
        "from": "20-Jul-2018",
        "to": "23-Jul-2018"
      },
      {
        "from": "15-Jun-2018",
        "to": "19-Jun-2018"
      },
      {
        "from": "27-Jun-2018",
        "to": "29-Jun-2018"
      },
      {
        "from": "23-Aug-2018",
        "to": "28-Aug-2018"
      },
      {
        "from": "17-Aug-2018",
        "to": "19-Aug-2018"
      },
      {
        "from": "19-Sep-2018",
        "to": "21-Sep-2018"
      },
      {
        "from": "25-Sep-2018",
        "to": "28-Sep-2018"
      } 
    ];
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/datepicker/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/datepicker/form.text', { responseType: 'text' }).subscribe(data => {
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
}


