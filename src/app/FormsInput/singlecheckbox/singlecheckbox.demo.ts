/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'singlecheckbox-demo',
  templateUrl: './singlecheckbox.demo.html',
})
export class SinglecheckboxDemo {
  copyMsgArray: any[];
  check: boolean = false;
  checkWithDisable: boolean = true;

  //Checkbox click event
  onCheckClick(data: any) {
    //add Some Operation
  }

  constructor() {
    this.getHtmlAndTypeScriptCode();
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


