/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'grid-scroll-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Data Grid with scroll</h2>
      </amexio-header>
      <amexio-body>
        <p>Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h2>Data Grid with scroll</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-datagrid
                      [enablecolumnfiter]="true" [height]="200" title="Country Grid" [enablecheckbox]="false"  [httpmethod]="'get'" [httpurl]="'assets/data/componentdata/country.json'" [datareader]="'data'"  [pagesize] = "10">
                      <amexio-data-table-column [dataindex]="'countryName'" 
                                                [datatype]="'string'" 
                                                [hidden]="false" [text]="'Name'" (selectedRowData)="getSelectedData($event)">
                      </amexio-data-table-column>
                      <amexio-data-table-column [dataindex]="'countryCode1'" [datatype]="'string'" [hidden]="false" [text]="'Code'"></amexio-data-table-column>
                      <amexio-data-table-column [dataindex]="'currencyName'" [datatype]="'string'" [hidden]="false" [text]="'Currency'"></amexio-data-table-column>
                    </amexio-datagrid>
                 <!--   <p><b>Selected row data : </b>{{selectedData | json}}</p>-->
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/data/grid.json'"
                             [datareader]="'properties'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [dataindex]="'name'" [width]="20" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataindex]="'type'" [width]="10" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataindex]="'default'" [width]="10" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataindex]="'description'" [width]="65" [datatype]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid><br>
            <amexio-datagrid title="Column Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/data/grid.json'"
                             [datareader]="'columnProperties'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [dataindex]="'name'" [width]="15" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataindex]="'type'" [width]="10" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataindex]="'default'" [width]="10" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataindex]="'description'" [width]="65" [datatype]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/data/grid.json'" [datareader]="'events'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [dataindex]="'name'" [width]="20" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataindex]="'description'" [width]="65" [datatype]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>

          </amexio-tab>
          <amexio-tab title="Source">
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
          </amexio-tab>
          <amexio-tab title="Live">
            Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class GridWithScrollDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/scrollgrid/scrollgrid.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/scrollgrid/scrollgrid.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/country.json').subscribe(data => {
      responseTs = data.text();
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

  getSelectedData(data: any) {
    debugger;
    this.selectedData = data;
  }
}


