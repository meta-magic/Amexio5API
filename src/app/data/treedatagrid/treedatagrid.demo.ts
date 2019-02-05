/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'treedata-grid-demo',
  templateUrl : './treedatagrid.demo.html'
})
export class TreeDataGridDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;


  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();


  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Tree Data Grid';
    this.customSourceData.description = 'Collapsible Data Grid Component displays data in expandable/collapsible rows.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/treedatagrid/treedatagrid.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/treedatagrid/treedatagrid.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treedatatable.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-data-grid?embed=1&file=app/grid/treedatagrid/treedatagrid.demo.html&view=editor';
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

  getSelectedData(data: any) {
    this.selectedData = data;
  }
}


