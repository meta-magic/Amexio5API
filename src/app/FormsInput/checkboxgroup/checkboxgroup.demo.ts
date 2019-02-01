/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'checkboxgroup-demo',
  templateUrl: './checkboxgroup.demo.html',
})
export class CheckBoxGroupDemo {
  copyMsgArray: any[];
  checkboxGroupdata: any;
  checkboxGroupdatadisabled: any;
  checkboxGroupdatadisabledallitem:any;
  selectedCheckboxgroup(data:any){
  //make some operation here
  }
  constructor() {
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


