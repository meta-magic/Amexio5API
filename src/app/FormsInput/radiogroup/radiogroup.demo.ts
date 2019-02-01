/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'radiogroup-demo',
  templateUrl:'./radiogroup.demo.html',
})
export class RadioGroupDemo {

  copyMsgArray: any[];
  radioGroupData: any;
  model1:  string = 'male';
  model2:  string = 'female';
  model3:  string = 'male1';
  model4: string = 'female';

  //selected Checkbox event
  setSelectedGender(data:any){
  //make some operation here

  }
  constructor() {
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


