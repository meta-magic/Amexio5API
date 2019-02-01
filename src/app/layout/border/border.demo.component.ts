/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'border-demo',
  templateUrl: './border.demo.html',
})

export class BorderDemoComponent {
 
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
