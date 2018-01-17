/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'itemselector-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Item Selector Component</h2>
      </amexio-header>
      <amexio-body>
        <p>ItemSelector is a specialized MultiSelect field that renders as a pair of MultiSelect field, one with available options and the other with selected options. 
          A set of buttons in between allows items to be moved between the fields and reordered within the selection.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card >
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-item-selector [height]="250" [displayField]="'countryName'"
                                              [valueField]="'countryId'"  (selectedRecords)="getSelectedData($event)"
                                              [httpUrl]="'assets/data/componentdata/selectordata.json'"
                                              [httpMethod]="'get'" [dataReader]="'data'" >
                        </amexio-item-selector>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
               
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>Selected data</amexio-header>
                  <amexio-body>
                    {{selectedData|json}}
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/itemselector.json'"
                             [dataReader]="'properties'"
                             [filtering]="false">
              <amexio-data-table-column [width]="15" [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/itemselector.json'" [dataReader]="'events'"
                             [filtering]="false">
              <amexio-data-table-column [width]="20"[dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
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
              <amexio-tab title="Data Source">
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
    <!--<amexio-notification [messageData]="copyMsgArray"></amexio-notification>-->

  `
})
export class ItemSelectorDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  selectedData: any;
  dataSource:string;
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }
  getSelectedData(data: any) {
    this.selectedData = data;
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData:any;
    //HTML FILE
    this.http.get('assets/data/code/forms/itemselector/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/itemselector/form.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //JSON FILE
    this.http.get('assets/data/componentdata/selectordata.json').subscribe(data => {
      responseData = data.text();
    }, error => {
    }, () => {
      this.dataSource = responseData;
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


