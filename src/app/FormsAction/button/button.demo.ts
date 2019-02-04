/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';


@Component({
  selector: 'button-demo',
  templateUrl: './button.demo.html',

})
export class ButtonDemo {
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


