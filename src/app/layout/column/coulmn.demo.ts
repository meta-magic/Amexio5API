/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'column-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        <h2>Column</h2>
      </amexio-header>
      <amexio-body>
        <p>Amexio column system allows up to 12 columns across the page.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="1">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="2">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="3">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="5">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="7">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="8">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="9">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="10">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="11">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="12">
                <amexio-card>
                  <amexio-body>
                    SPAN 1
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="4">
                <amexio-card>
                  <amexio-body>
                    SPAN 4
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card>
                  <amexio-body>
                    SPAN 4
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card>
                  <amexio-body>
                    SPAN 4
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card>
                  <amexio-body>
                    SPAN 6
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card>
                  <amexio-body>
                    SPAN 6
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="12">
                <amexio-card>
                  <amexio-body>
                    SPAN 12
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/layout/column.json'"
                             [datareader]="'properties'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [width]="15" [dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'type'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'default'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
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
export class ColumnDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/layout/column/layout.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/column/layout.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
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


