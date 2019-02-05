/**
 * Created by sagar on 9/1/18.
 */

import { Component, OnInit } from '@angular/core'
import { DyanmicVerticalTabComponent } from './dynamicverticaltabdemo.component';
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';


@Component({
  selector: 'enhanced-vertical-tab-demo', templateUrl: 'enhancedverticaltab.demo.html'
})
export class EnhancedVerticalTabDemo implements OnInit {
 

  customSourceData: ComponentDataStructure;

  copyMsgArray: any[];
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }


  createCustomSourceData() {
    this.customSourceData.title = 'Enhanced vertical Tab ';
    this.customSourceData.description = 'Enhanced vertical Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/enhancedverticaltab/tab.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/enhancedverticaltab/dynamictab.text';
    this.customSourceData.sourceMetadata.dynamicUrl = 'layout/tab/enhancedverticaltab/tab.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-vertical-enhanced-tab1?embed=1&file=app/tabs/enhancedverticaltab/enhancedverticaltab.demo.html&view=editor';
  }

  // title = 'component';
  tabcountleft: number = 4;
  tabcountright:number =4;
  addtab(tab: any) {
    this.tabcountleft++;
    let title = 'Tab ' + this.tabcountleft;
    let cmp = tab.addDynamicTab(title, "red", true, DyanmicVerticalTabComponent);
    cmp.content = "Content of " + title;
  }
  addrighttab(tab1: any) {
    this.tabcountright++;
    let title = 'Tab ' + this.tabcountright;
    let cmp = tab1.addDynamicTab(title, "red", true, DyanmicVerticalTabComponent);
    cmp.content = "Content of " + title;
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


