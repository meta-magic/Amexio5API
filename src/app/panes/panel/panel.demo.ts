/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel-demo',
  templateUrl :'./panel.demo.html'
})

export class PanelDemoComponent {
 
  copyMsgArray: any[];
 
  refreshDialogue: boolean;
  rightclickdata: any;
  constructor() {
    this.rightclickdata =
      [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];
   
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

  refreshData() {
    this.refreshDialogue = !this.refreshDialogue;
  }
}
