/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';


@Component({
  selector: 'verticalright-tab-demo', 
  templateUrl: './verticalrighttab.demo.html',
})
export class VerticalRightTabDemo  implements OnInit{
 
  customSourceData: ComponentDataStructure;

  copyMsgArray: any[];
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'vertical Right kedar Tab ';
    this.customSourceData.description = ' Vertical Right Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/verticalrighttab/tab.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/verticalrighttab/dynamictab.text';
    this.customSourceData.sourceMetadata.dynamicUrl = 'layout/tab/enhancedverticaltab/tab.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-horizontal-enhanced-tab?embed=1&file=app/tabs/enhancedtab/enhancedtab.demo.html&view=editor';
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


