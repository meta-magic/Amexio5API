/**
 * Created by rashmi on 29/6/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'grid-context-menu-demo', 
  templateUrl :'./gridwithcontextmenu.demo.html',
})
export class GridWithContextMenuDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
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
    this.customSourceData.title = 'Data Grid With Custom Column Size';
    this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/customcolsize/customcolsize.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/customcolsize/customcolsize.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/gridtemplate.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-column-sizing-grid?embed=1&file=app/grid/columnsize/columnsize.demo.html&view=editor';
  }


  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/contextmenugrid/contextmenugrid.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/contextmenugrid/contextmenugrid.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/country.json',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSource = responseTs;
    });

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


