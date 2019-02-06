

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'treedata-grid-demo', 
  templateUrl: './treedatatemplate.demo.html',
})
export class TreeDataTemplateDemo implements OnInit{
 
  copyMsgArray: any[];
  selectedData: any;
  checkFlag: boolean;
  

  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }
 
  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Tree Data Template';
    this.customSourceData.description = 'Collapsible Data Grid Component displays data in expandable/collapsible rows.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/treedatatemplate/treedatatemplate.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/treedatatemplate/treedatatemplate.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treedatatable.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-data-grid?embed=1&file=app/grid/treedatagrid/treedatagrid.demo.html&view=editor';
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

  getSelectedData(data: any) {
    this.selectedData = data;
  }

  onCheckClick(data: any) {
    if (data.hasOwnProperty('children') && data.children.length > 0) {
      this.checkchild(data);
    }
  }


  checkchild(data: any) {
    data.children.forEach((element: any) => {
      element.done = !element.done;
      if (element.hasOwnProperty('children') && element.children.length > 0) {
        this.checkchild(element);
      }
    });
  }



}

