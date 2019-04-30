/**
 * Created by rashmi on 16/1/18.
 */
import { Component } from '@angular/core';

@Component({
 selector: 'darkmode-demo',
 templateUrl: './darkmode.demo.html',
})

export class DarkmodeDemoComponent  {
 
  copyMsgArray: any[];
  constructor() {
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
