/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'treedata-grid-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Tree Data Grid</h2>
      </amexio-header>
      <amexio-body>
        <p>Collapsible Data Grid Component displays data in expandable/collapsible rows.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [footer]="false" [header]="true">
                  <amexio-header><h2>Tree Data Grid</h2></amexio-header>
                  <amexio-body>
                    <amexio-tree-data-table [httpmethod]="'get'"
                                            [httpurl]="'assets/data/componentdata/treedatatable.json'" 
                                            [datareader]="'data'" (selectedRecord)="getSelectedData($event)">
                      <amexio-data-table-column [dataindex]="'user'" [datatype]="'string'" [hidden]="false" [text]="'User'"></amexio-data-table-column>
                      <amexio-data-table-column [dataindex]="'duration'" [datatype]="'number'" [hidden]="false" [text]="'Duration'"></amexio-data-table-column>
                    </amexio-tree-data-table>
                    <p><b>Clicked Row Data : </b>{{selectedData | json}}</p>
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
export class TreeDataGridDemo {
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
    this.http.get('assets/data/code/data/treedatagrid/treedatagrid.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/treedatagrid/treedatagrid.text').subscribe(data => {
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


