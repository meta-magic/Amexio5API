/**
 * Created by kedar on 1/11/19.
 */
import { Component } from '@angular/core';


@Component({
  selector: 'browserpanel-demo',
  templateUrl: 'browser-panel.demo.html',
})

export class BrowserPanelDemoComponent {

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
