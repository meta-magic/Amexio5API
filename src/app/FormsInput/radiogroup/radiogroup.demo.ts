/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'radiogroup-demo',
  templateUrl:'./radiogroup.demo.html',
})
export class RadioGroupDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  dataSource:string;
  radioGroupData: any;
  model1:  string = 'male';
  model2:  string = 'female';
  model3:  string = 'male1';
  model4: string = 'female';

  //selected Checkbox event
  setSelectedGender(data:any){
  //make some operation here

  }
  constructor(private http: HttpClient) {
    this.radioGroupData = {
      response:{
        data:[{
          gender:'Male',
          genderId:'male'
        },{
          gender:'Female',
          genderId:'female'
        },
        ]
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
    this.http.get('assets/data/code/forms/radiogroup/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/radiogroup/form.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
  //JSON FILE
    this.http.get('assets/data/code/forms/radiogroup/radiogroup.json',{responseType: 'text'}).subscribe(data => {
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


