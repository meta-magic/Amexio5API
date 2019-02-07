/**
 * Created by rashmi on 29/6/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'grid-context-menu-demo', 
  templateUrl :'./gridwithcontextmenu.demo.html',
})
export class GridWithContextMenuDemo implements OnInit{
  
  copyMsgArray: any[];
  selectedData: any;
  contextMenuColData: any[];
  contextMenuRowData: any[];


  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient) {

    this.customSourceData = new ComponentDataStructure();
    this.contextMenuColData=
    [{"text":"Add State","icon":"fa fa-plus","disabled":true},{"text":"Edit","icon":"","seperator":true}
     ,{"text":"Delete","icon":""}];
   this.contextMenuRowData =  [{"text":"Reload","icon":"fa fa-refresh","disabled":false,"seperator":false},{"text":"Save","icon":"fa fa-save","seperator":false}
   ,{"text":"Delete","icon":"fa fa-close"}];
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Data Grid With Context Menu';
    this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column and with context menu(right-click mouse operation).';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/contextmenugrid/contextmenugrid.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/contextmenugrid/contextmenugrid.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-grid-contextmenu?embed=1&file=src/app/contextualmenu/grid/grid.demo.component.html&view=editor';
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


