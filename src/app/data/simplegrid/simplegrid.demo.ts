/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
  selector: 'simplegridr-demo', template: `
  <amexio-api-structure [custom-com-data]="customSourceData"  [url]="'assets/componentjson/grid.json'">
    <amexio-api-demo>
      <amexio-row>
        <amexio-column size="12">
          <amexio-card [header]="true">
            <amexio-header>
              Simple Data Grid
            </amexio-header>
            <amexio-body>
              <amexio-datagrid [enable-column-fiter]="true" title="Simple Data Grid " [enable-checkbox]="false" [http-method]="'get'" [http-url]="'assets/data/componentdata/country.json'"
                               [data-reader]="'data'" [page-size]="10">

                <amexio-data-table-column [data-index]="'countryName'" [data-type]="'string'" [hidden]="false" [text]="'Name'" (selectedRowData)="getSelectedData($event)">
                </amexio-data-table-column>
                <amexio-data-table-column [sort]="false" [data-index]="'countryCode1'" [data-type]="'string'" [hidden]="false" [text]="'Code'"></amexio-data-table-column>
                <amexio-data-table-column [data-index]="'currencyName'" [data-type]="'string'" [hidden]="false" [text]="'Currency'"></amexio-data-table-column>
              </amexio-datagrid>
            </amexio-body>
          </amexio-card>
        </amexio-column>
      </amexio-row>
    </amexio-api-demo>

  </amexio-api-structure>



  `
})
export class SimpleGridDemo implements OnInit{
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
    this.customSourceData.title = 'Simple Data Grid';
    this.customSourceData.description = 'Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/simplegrid/simplegrid.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/simplegrid/simplegrid.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'country.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-simple-grid?embed=1&file=app/grid/simplegrid/simplegrid.demo.html&view=editor';
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


