/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core'
import { Http } from "@angular/http";

@Component({
  selector: 'column-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        Column
      </amexio-header>
      <amexio-body>
        <p>Amexio column system allows up to 12 columns across the page.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true" >
            
            <amexio-row>
              <amexio-column size="2" >
                <amexio-card>
                  <amexio-body>COL 2 
                  
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="2">
                <amexio-card>
                  <amexio-body>
                    COL 2
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="2">
                <amexio-card>
                  <amexio-body>
                    COL 2
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="2">
                <amexio-card>
                  <amexio-body>
                    COL 2
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="2">
                <amexio-card>
                  <amexio-body>
                    COL 2
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="2">
                <amexio-card>
                  <amexio-body>
                    COL 2
                  </amexio-body>
                </amexio-card>
              </amexio-column>

            </amexio-row>
            
            <amexio-row>
              <amexio-column size="4">
                <amexio-card>
                  <amexio-body>
                    COL 4
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card>
                  <amexio-body>
                    COL 4
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="4">
                <amexio-card>
                  <amexio-body>
                    COL 4
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
            <amexio-row>
              <amexio-column size="6">
                <amexio-card>
                  <amexio-body>
                    COL 6
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card>
                  <amexio-body>
                    COL 6
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
            <amexio-row>
              <amexio-column size="12">
                <amexio-card>
                  <amexio-body>
                    COL 12
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-column>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/column.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'"
                                        [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
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
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-columnlayout?embed=1&file=app/layouts/column/column.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

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
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }
}


