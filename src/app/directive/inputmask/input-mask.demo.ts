/**
 * Created by rashmi on 6/6/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'input-mask-demo',
  templateUrl: './input-mask.demo.html'
})
export class InputMaskDemo {
  copyMsgArray: any[];
  zip: any;
  canadianZipCode: any;
  telephone: any;
  ccNumber: any;
  time: any;
  amount: any;

  constructor() { }

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


