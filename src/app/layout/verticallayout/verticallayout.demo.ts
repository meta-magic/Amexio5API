/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'vertical-layout',
  templateUrl: './verticallayout.demo.html'
})
export class verticalLayoutDemo {
 
  copyMsgArray: any[];

  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Vertical Layouts';
    this.customSourceData.description = 'A Vertical layout lays out a container with single column and multiple rows.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/verticallayout/layout.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/verticallayout/layout.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-column-vertical?embed=1&file=app/layout/verticallayout/verticallayout.demo.html&view=editor';
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


