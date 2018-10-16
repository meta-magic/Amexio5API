/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'treedata-grid-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Tree Data Grid 
      </amexio-header>
      <amexio-body>
        <p>Collapsible Data Grid Component displays data in expandable/collapsible rows.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [footer]="false" [header]="true">
                  <amexio-header> Tree Data Grid </amexio-header>
                  <amexio-body>
                    <amexio-tree-data-table [http-method]="'get'"
                                            [http-url]="'assets/data/componentdata/treedatatable.json'" 
                                            [data-reader]="'data'" (selectedRecord)="getSelectedData($event)">
                      <amexio-data-table-column [data-index]="'task'" [data-type]="'string'" [hidden]="false" [text]="'Task'"></amexio-data-table-column>
                      <amexio-data-table-column [data-index]="'user'" [data-type]="'string'" [hidden]="false" [text]="'User'"></amexio-data-table-column>
                      <amexio-data-table-column [data-index]="'duration'" [data-type]="'number'" [hidden]="false" [text]="'Duration'"></amexio-data-table-column>
                    </amexio-tree-data-table> 
                    <p><b>Clicked Row Data : </b>{{selectedData | json}}</p>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-tree-data-table>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             
                             [http-url]="'assets/apireference/data/treedatagrid.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid><br>
            <amexio-datagrid title="Column Properties<amexio-data-table-column>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/grid.json'"
                             [data-reader]="'columnProperties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="24" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
            <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'Version'"></amexio-data-table-column>
              
                                        <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/data/treedatagrid.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="24" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
            <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'Version'"></amexio-data-table-column>
              
                                        <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>

            <amexio-datagrid title="Methods" [http-method]="'get'" [http-url]="'assets/apireference/data/tree.json'" [data-reader]="'methods'"
            [enable-data-filter]="false">
            <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
            <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'Version'"></amexio-data-table-column>
            <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
        </amexio-datagrid>

          </amexio-tab>
          <amexio-tab title="Source">
            <div style="overflow-y: scroll">
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-tree-data-grid?embed=1&file=app/grid/treedatagrid/treedatagrid.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
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
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/treedatagrid/treedatagrid.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/treedatagrid/treedatagrid.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/treedatatable.json',{responseType: 'text'}).subscribe(data => {
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

  getSelectedData(data: any) {
    this.selectedData = data;
  }
}


