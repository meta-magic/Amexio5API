/**
 * Created by kedar on 17/10/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'gridwithtoolbar-demo', 
  templateUrl: './gridwithtoolbar.demo.html',
})
export class GridWithToolBarDemo implements OnInit {
 
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
    this.customSourceData.title = 'Data Grid With toolbar';
    this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/gridwithtoolbar/gridwithtoolbar.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/gridwithtoolbar/gridwithtoolbar.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-grid-with-toolbar?embed=1&file=app/grid/gridwithtoolbar/gridwithtoolbar.demo.html&view=editor';
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


