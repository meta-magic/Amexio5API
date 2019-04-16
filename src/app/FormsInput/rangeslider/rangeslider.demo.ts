/**
 * Created by kedar on 12/4/19.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'value-range',
  templateUrl:'./rangeslider.demo.html',
})
export class RangeSliderDemo {
  copyMsgArray: any[];
  

  rangeValues: number[] = [20,80];
  rangeValues1: number[] = [25,75];

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


