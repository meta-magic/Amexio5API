/**
 * Created by Rashmi on 12/04/18.
 */
import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
 selector: 'viewport-demo',
 
 templateUrl : './viewport.demo.html',
})

export class ViewportDemoComponent{
 
  copyMsgArray: any[];
  asyncFlag : boolean;

  DEMO_FIRST_URL = 'https://meta-magic.github.io/viewport/#/scrollable-viewport';
  DEMO_SEC_URL = 'https://meta-magic.github.io/viewport/#/viewport';
  constructor(private http: HttpClient) {
  }
  onDemoFirstClick() {
    window.open(this.DEMO_FIRST_URL);
  }
  onDemoSecondClick() {
    window.open(this.DEMO_SEC_URL);

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
