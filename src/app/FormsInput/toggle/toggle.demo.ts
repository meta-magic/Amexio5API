/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'toggle-demo',
  templateUrl :'./toggle.demo.html',
})
export class ToggleDemo {
  copyMsgArray: any[];
  toggleMsgArray:any[];
  constructor() {
    this.toggleMsgArray=[];
  }

  //Square Toggle click event
  onSquareToggleClick(data:any){
    this.toggleMsgArray.push('Square Toggle Click');
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


