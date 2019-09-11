/**
 * Created by Manisha on 10/9/19.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'dialpad-demo',
  templateUrl: './dialpad.demo.html',
})
export class DialpadDemo {
  copyMsgArray: any[];   
  dialpadValue = '';
  
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


