/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'button-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Button
      </amexio-header>
      <amexio-body>
        <p>A button component with various modes and configurations.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
            <amexio-column [size]="12">
              <amexio-card [header]="true">
                <amexio-header>
                   Button Types
                </amexio-header>
                <amexio-body>
                  <amexio-row>
                    <amexio-column size="2">
                      <amexio-button [label]="'Background Color'" [type]="'themeBG'" [tooltip]="'Secondary Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="2">
                      <amexio-button [label]="'Theme Color'" [type]="'themeColor'" [tooltip]="'Primary Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="2">
                      <amexio-button [label]="'Green'" [type]="'green'" [tooltip]="'Success Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="2">
                      <amexio-button [label]="'Red'" [type]="'red'" [tooltip]="'danger Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="2">
                      <amexio-button [label]="'Yellow'" [type]="'yellow'" [tooltip]="'Warning Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="2">
                      <amexio-button [label]="'Transparent'" [type]="'transparent'" [tooltip]="'Transparent Button'"></amexio-button>
                    </amexio-column>
                  </amexio-row>
                </amexio-body>
              </amexio-card>

            </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                      Button States
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Disabled'" [type]="'green'" [tooltip]="'Disabled'" [disabled]="'true'" ></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Enabled'" [type]="'green'" [tooltip]="'Enable'" ></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <!--<amexio-button [label]="'Async Task'" [type]="'themeColor'" [tooltip]="'Async Task'" (onClick)="switchasyncFlag()" [isLoading]="asyncFlag"></amexio-button>-->
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                      Button with Icons
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Next'" [type]="'themeColor'" [tooltip]="'Next'" [icon]="'fa fa-chevron-right'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Download'" [type]="'green'" [tooltip]="'Save'" [icon]="'fa fa-save'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Delete'" [type]="'red'" [tooltip]="'delete'" [icon]="'fa fa-trash'"></amexio-button>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                      Button Sizes
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Large Button'" [type]="'themeColor'" [tooltip]="'large'" [size]="'large'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Default Button'" [type]="'themeColor'" [tooltip]="'default'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Small Button'" [type]="'themeColor'" [tooltip]="'small'" [size]="'small'"></amexio-button>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                    Block Button
                </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-button [label]="'Block Button(theme color)'" [type]="'themeColor'" [tooltip]="'large'"  [block]="true"></amexio-button>
                      </amexio-column>
                      </amexio-row>
                      <amexio-row>
                      <amexio-column size="12">
                      <amexio-button [label]="'Block Button(success)'" [type]="'green'" [tooltip]="'green'" [block]="true"></amexio-button>
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
                             [http-url]="'assets/apireference/forms/button.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/button.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            
          </amexio-tab>
          <amexio-tab title="Source">
            <div style="overflow-y: scroll">
             <amexio-vertical-tab-view>
              <amexio-tab title="HTML" [active]="true">
                <ng-container *ngIf="htmlCode">
                  <!--<clip-copy [htmlCode]="htmlCode" (onClick)="onCopyClick()"></clip-copy>-->
                  <div>
                   <prism-block [code]="htmlCode" [language]="'html'"></prism-block>
                  </div>
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-button?embed=1&file=app/forms/button/button.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class ButtonDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
    constructor(private http: HttpClient) {
      this.getHtmlAndTypeScriptCode();
  }
  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/button/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/button/form.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
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


