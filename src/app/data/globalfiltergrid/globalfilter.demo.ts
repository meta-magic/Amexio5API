/**
 * Created by rashmi on 30/5/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'global-filter-grid', template: `
    <amexio-card header="true">
      <amexio-header>
         Data Grid with global filter 
      </amexio-header>
      <amexio-body>
        <p>Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection,Common Filtering for all columns(enable only for string and number)(Filtering Criteria: starts with, ends with and contains) user define template for rendering for column header and column data, displaying summation of numeric column.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Data Grid with Global Filter 
                  </amexio-header>
                  <amexio-body>
                  <amexio-datagrid
                  [global-filter]="true" title="Country Grid"   [http-method]="'get'" [http-url]="'assets/data/componentdata/datagrid.json'" [data-reader]="'data'"  [page-size] = "10" (rowSelect)="getRowData($event)">
                  <amexio-data-table-column [data-index]="'name_official'" [data-type]="'string'" [hidden]="false" [text]="'Name'">
                  </amexio-data-table-column>
                  <amexio-data-table-column [data-index]="'code3l'" [data-type]="'string'" [hidden]="false" [text]="'Country Code'">
                  </amexio-data-table-column>
                  <amexio-data-table-column [data-index]="'latitude'" [data-type]="'string'" [hidden]="false" [text]="'Code'">
                  </amexio-data-table-column>
                  <amexio-data-table-column [data-index]="'longitude'" [data-type]="'string'" [hidden]="false" [text]="'Currency'"></amexio-data-table-column>
                </amexio-datagrid>
                    <p><b>Selected row data : </b>{{clickedRowData | json}}</p>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-datagrid>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/grid.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid><br>
            <amexio-datagrid title="Column Properties<amexio-datagrid>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/grid.json'"
                             [data-reader]="'columnProperties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="15" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/data/grid.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>

          </amexio-tab>
          <amexio-tab title="Source">
            <div style="overflow-y: scroll;">
              <amexio-vertical-tab-view>
                <amexio-tab title="HTML" [active]="true">
                  <ng-container *ngIf="htmlCode">
                    <!--<clip-copy [htmlCode]="htmlCode" (onClick)="onCopyClick()"></clip-copy>-->
                    <prism-block [code]="htmlCode" [language]="'html'"></prism-block>
                  </ng-container>
                </amexio-tab>
                <amexio-tab title="Type Script">
                  <ng-container *ngIf="typeScriptCode">
                    <prism-block [code]="typeScriptCode" [language]="'typescript'"></prism-block>
                  </ng-container>
                </amexio-tab>
                <amexio-tab title="DataSource">
                  <ng-container *ngIf="dataSource">
                    <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                  </ng-container>
                </amexio-tab>
              </amexio-vertical-tab-view>
            </div>
           
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-grid-with-scroll?embed=1&file=app/grid/gridwithscroll/gridwithscroll.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class GlobalFilterDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  clickedRowData: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/globalfiltergrid/globalfiltergrid.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/globalfiltergrid/globalfiltergrid.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/datagrid.json',{responseType: 'text'}).subscribe(data => {
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

  getRowData(data: any) {
    this.clickedRowData = data;
  }
}


