/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'checkboxgroup-demo', 
  templateUrl: './checkboxgroup.demo.html',
})
export class CheckBoxGroupDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource:string;
  copyMsgArray: any[];
  checkboxGroupdata: any;
  checkboxGroupdatadisabled : any;
  checkboxGroupdatadisabledallitem:any;
  //selected Checkbox event
  selectedCheckboxgroup(data:any){
  //make some operation here
  }
  constructor(private http: HttpClient) {
    this.checkboxGroupdata = {
      response: {
        data: [{
          language: 'Angular 2', checked: false,disabled : false
        }, {
          language: 'JAVA', checked: true,disabled : false
        }, {
          language: 'C++', checked: false,disabled : false
        }]
      }
    };
    this.checkboxGroupdatadisabled = {
      response: {
        data: [{
          language: 'Angular 2', checked: false,disabled : false
        }, {
          language: 'JAVA', checked: true,disabled : true
        }, {
          language: 'C++', checked: false,disabled : false
        }]
      }
    };
    this.checkboxGroupdatadisabledallitem = {
      response: {
        data: [{
          language: 'Angular 2', checked: false
        }, {
          language: 'JAVA', checked: true
        }, {
          language: 'C++', checked: false
        }]
      }
    };
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData:any;
    //HTML FILE
    this.http.get('assets/data/code/forms/checkboxgroup/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/checkboxgroup/form.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //TS FILE
    this.http.get('assets/data/componentdata/checkgroup.json',{responseType: 'text'}).subscribe(data => {
      responseData = data;
    }, error => {
    }, () => {
      this.dataSource = responseData;
    });
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


