/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'contextmenu-panel',

  templateUrl :'./contextmenupanel.demo.html',
})

export class ContextMenuPanelDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  refreshDialogue: boolean;
  rightclickdata: any;
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
    this.rightclickdata =
      [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];
  }
  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
 
  createCustomSourceData() {
    this.customSourceData.title = 'panel contextmenu';
    this.customSourceData.description = 'Panel provides an easy way to organize big forms by grouping the fields in panel and with context menu functionality (right click option).';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/panel/panelcontextmenu/panel.html    ';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/panel/panelcontextmenu/panel.text    ';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-panel-contextmenu-demo?embed=1&file=src/app/contextualmenu/panel/panel.demo.component.html&view=editor';
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
