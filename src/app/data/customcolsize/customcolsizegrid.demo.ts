/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
  selector: 'custom-col-size-grid-demo', 
  templateUrl :'./customcolsizegrid.demo.html',
})
export class CustomColSizeDemo implements OnInit{
  
  copyMsgArray: any[];
  clickedRowData: any;
 
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }
 
  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Data Grid With Custom Column Size';
    this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/customcolsize/customcolsize.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/customcolsize/customcolsize.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/gridtemplate.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-column-sizing-grid?embed=1&file=app/grid/columnsize/columnsize.demo.html&view=editor';
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

  getRowData(data: any) {
    this.clickedRowData = data;
  }
}


