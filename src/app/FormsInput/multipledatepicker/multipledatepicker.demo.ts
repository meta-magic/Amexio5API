/**
 * Created by Manisha on 23/4/19.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'multidatepicker-demo',
  templateUrl: './multipledatepicker.demo.html',
})
export class MultipleDateTimePickerDemo {
  copyMsgArray: any[];
  currentDate: any;
   
  time: any;
  disabledDate: any[];
  date = new Date("March 21, 2018 01:15:00");

  onChangeTime(data: any) {
    this.time = data;
  }

  constructor() {
   
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


