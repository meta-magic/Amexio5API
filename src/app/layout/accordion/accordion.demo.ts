/**
 * Created by pratik on 16/1/18.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'accordion-demo',
templateUrl: './accordion.demo.html',
})

export class AccordionDemoComponent{
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
