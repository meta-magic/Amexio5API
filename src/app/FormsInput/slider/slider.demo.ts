/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'slider-demo',
  templateUrl:'./slider.demo.html',
})
export class SliderDemo {
  copyMsgArray: any[];
  stepVal1:number = 10;
  stepVal2:number = 20;
  stepVal3:number =20;
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


