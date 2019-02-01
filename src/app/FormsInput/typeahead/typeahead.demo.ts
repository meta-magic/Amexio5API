/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'typeahead-demo',
  templateUrl :'./typeahead.demo.html',
})
export class TypeAheadDemo {
  htmlCode: string;
  country: any;
  typeScriptCode: string;
  copyMsgArray: any[];
  typeAHeadData: any;
  name: string;
  dataSource:string;
  constructor(private http: HttpClient) {
    this.typeAHeadData = {
      "data": [{"sportName": "Cricket", "code": "Ck"}, {"sportName": "Swimming", "code": "Sw"}, {
        "sportName": "Golf",
        "code": "Glf"
      }, {"sportName": "Hockey", "code": "Hky"}, {"sportName": "Soccer", "code": "Scr"}, {
        "sportName": "Formula One",
        "code": "F1"
      }]
    };
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData:any;
    //HTML FILE
    this.http.get('assets/data/code/forms/typehead/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/typehead/form.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //JSON FILE
    this.http.get('assets/data/componentdata/country.json',{responseType: 'text'}).subscribe(data => {
      responseData = data;
    }, error => {
    }, () => {
      this.dataSource = responseData;
    });


  }

  onTypeheadClick(data:any){
    this.name=data.name;
  }
  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }
}


