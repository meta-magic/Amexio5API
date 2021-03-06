/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';



@Component({
  selector: 'basic-tab-demo',
  templateUrl:'./tab.demo.html',
  
})
export class TabDemo implements OnInit{
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  

  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Basic Tab';
    this.customSourceData.description = 'Basic Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/basictab/layout.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/basictab/tab.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tab-basic-bw4ppe?embed=1&file=src/app/basic/tab/tab.demo.component.html&view=editor';
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


