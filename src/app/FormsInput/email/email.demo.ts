/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'email-demo',
  templateUrl: './email.demo.html',
})
export class EmailDemo {
  copyMsgArray: any[];

  constructor() {}

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


