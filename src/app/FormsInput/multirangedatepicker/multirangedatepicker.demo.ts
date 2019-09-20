/**
 * Created by Manisha on 10/9/19.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'multirangedatepicker-demo',
  templateUrl: './multirangedatepicker.demo.html',
})
export class MultipleRangeDateTimePickerDemo {
  copyMsgArray: any[];   
  time: any;
  dialpadValue = '';
  
  constructor() {
   
  }

  fun(data : any) {
    debugger;
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


