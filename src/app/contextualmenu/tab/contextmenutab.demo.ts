/**
 * Created by rashmi on 9/1/18.
 */

import {Component} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'context-menu-tab-demo',
  templateUrl:'contextmenutab.demo.html'

  
})
export class ContextMenuTabDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  rightclickdata : any[];

  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

    this.rightclickdata = [
      {
        "text": "Back",
        "icon": "fa fa-arrow-left",
        "disabled": true
      },
      {
        "text": "Reload",
        "icon": "fa fa-refresh",
        "seperator": false
      },
      {
        "text": "Save",
        "icon": "fa fa-save"
      }
    ];
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'context menu Tab ';
    this.customSourceData.description = 'Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs and with custom context menu (right click operation) and default context menu(close all and close others).';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/contextmenutab/tab.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/contextmenutab/tab.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tab-contextualmenu?embed=1&file=src/app/contextualmenu/tab/contextmenutab.demo.html&view=editor';
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




