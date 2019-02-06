/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';



@Component({
  selector: 'vertical-tab-demo', 
  templateUrl :'./verticaltab.demo.html',
})
export class VerticalTabDemo implements OnInit{

  copyMsgArray: any[];

  customSourceData: ComponentDataStructure;


  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Left Aligned Vertical Tab ';
    this.customSourceData.description = ' Vertical Left Tab  component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/tab/verticaltab/tab.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/tab/verticaltab/tab.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-right-aligned-vertical-tab?embed=1&file=app/tabs/rightverticaltab/rightverticaltab.demo.html&view=editor';
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


