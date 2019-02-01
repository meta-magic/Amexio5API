/**
 * Created by kedar on 12/9/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'recaptcha-demo',
  templateUrl: './recaptcha.demo.html',
})
export class RecaptchaDemo {
  copyMsgArray: any[];
  response: any;
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

  onSuccess(event: any) {
    this.response = event;
  }
  onFailure(event: any) {
    this.response = event;
  }
}


