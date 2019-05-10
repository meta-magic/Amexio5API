/**
 * Created by kedar on 10/5/18.
 */
import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
 selector: 'menu-demo',
 
 templateUrl : './menu.demo.html',
})

export class MenuDemoComponent{
 
  copyMsgArray: any[];
  asyncFlag : boolean;

  DEMO_FIRST_URL = 'https://meta-magic.github.io/viewport-Demo/#/home/menu-one';
  DEMO_SEC_URL = 'https://meta-magic.github.io/viewport-Demo/#/home/menu-two';
  DEMO_THIRD_URL = 'https://meta-magic.github.io/viewport-Demo/#/home/menu-three';

  constructor(private http: HttpClient) {
  }
  onDemoFirstClick() {
    window.open(this.DEMO_FIRST_URL);
  }
  onDemoSecondClick() {
    window.open(this.DEMO_SEC_URL);
  }
  onDemoThirdClick() {
    window.open(this.DEMO_THIRD_URL);
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
