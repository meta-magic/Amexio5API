/**
 * Created by sagar on 9/1/18.
 */

import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'horizontal-layout',
  templateUrl: './horizontallayout.demo.html'

})
export class horizontalLayoutDemo implements OnInit{
 
  copyMsgArray: any[];
  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Horizontal Layouts';
    this.customSourceData.description = 'A Horizontal layout lays out a container with single column and multiple rows.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/horizontallayout/layout.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/horizontallayout/layout.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-column-horizontal?embed=1&file=app/layout/horizontallayout/horizontallayout.demo.html&view=editor';
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


