/**
 * Created by Manisha on 17/5/19.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'animatedsliding-demo',
  templateUrl: './animatedslidingpane.demo.html',
})
export class SlidingPanelDemo {
  copyMsgArray: any[];
   
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


