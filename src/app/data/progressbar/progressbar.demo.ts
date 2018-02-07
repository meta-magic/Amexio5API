/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'progressbar-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Progress Bar 
      </amexio-header>
      <amexio-body>
        <p>Progress Bar Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars and easy to configure.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Progress Bar 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <h3>Primary</h3>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'50'" [infinite]="false" type="primary"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'80'" [infinite]="false" type="success"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'100'" [infinite]="false" type="success"></amexio-progress-bar>
                      </amexio-column>
                    </amexio-row>
                    <amexio-row>
                      <h3>Warning</h3>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'30'" [infinite]="false" type="warning"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'55'" [infinite]="false" type="warning"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'95'" [infinite]="false" type="warning"></amexio-progress-bar>
                      </amexio-column>
                    </amexio-row>
                    <amexio-row>
                      <h3>Success</h3>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'45'" [infinite]="false" type="success"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'63'" [infinite]="false" type="success"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'99'" [infinite]="false" type="success"></amexio-progress-bar>
                      </amexio-column>
                    </amexio-row>
                    <amexio-row>
                      <h3>Danger</h3>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'54'" [infinite]="false" type="danger"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'32'" [infinite]="false" type="danger"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'85'" [infinite]="false" type="danger"></amexio-progress-bar>
                      </amexio-column>
                    </amexio-row>
                    <amexio-row>
                      <h3>Infinite</h3>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'54'" [infinite]="true" type="danger"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'32'" [infinite]="true" type="success"></amexio-progress-bar>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-progress-bar [current-value]="'85'" [infinite]="true" type="warning"></amexio-progress-bar>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>

              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/progressbar.json'"
                             [data-reader]="'properties'"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-progressbar?embed=1&file=app/data/progressbar/progressbar.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class ProgressBarDemo {
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
    this.http.get('assets/data/code/data/progressbar/progressbar.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/progressbar/progressbar.text').subscribe(data => {
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


