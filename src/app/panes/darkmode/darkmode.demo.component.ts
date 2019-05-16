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
  colorData: any;
  constructor() {
    this.colorData = [{
      bgColor:'#ffffff',
      fgColor:'#000000'
    },{
      bgColor:'#c6ae71',
      fgColor:'#182618'
    },{
      bgColor:'#937427',
      fgColor:'#c7e0c7'
    },{
      bgColor:'#4c3e1d',
      fgColor:'#c7e0c7'
    },
  ]
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
