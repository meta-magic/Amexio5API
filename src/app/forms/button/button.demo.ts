/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'button-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Button Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A button component with various modes and configurations.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
            <amexio-column [size]="12">
              <amexio-card [enableHeader]="true">
                <amexio-header>
                  <h2>Button Types </h2>
                </amexio-header>
                <amexio-body>
                  <amexio-row>
                    <amexio-column size="3">
                      <amexio-button [label]="'Secondary'" [type]="'secondary'" [tooltipMessage]="'Secondary Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="3">
                      <amexio-button [label]="'Primary'" [type]="'primary'" [tooltipMessage]="'Primary Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="3">
                      <amexio-button [label]="'Success'" [type]="'success'" [tooltipMessage]="'Success Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="3">
                      <amexio-button [label]="'Danger'" [type]="'danger'" [tooltipMessage]="'danger Button'"></amexio-button>
                    </amexio-column>
                    <amexio-column size="2">
                      <amexio-button [label]="'Warning'" [type]="'warning'" [tooltipMessage]="'Warning Button'"></amexio-button>
                    </amexio-column>
                  </amexio-row>
                </amexio-body>
              </amexio-card>

            </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2> Button States</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Disabled'" [type]="'success'" [tooltipMessage]="'Disabled'" [disabled]="'true'" ></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Enabled'" [type]="'success'" [tooltipMessage]="'Enable'" ></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <!--<amexio-button [label]="'Async Task'" [type]="'primary'" [tooltipMessage]="'Async Task'" (onClick)="switchasyncFlag()" [isLoading]="asyncFlag"></amexio-button>-->
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2> Button with Icons</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Next'" [type]="'primary'" [tooltipMessage]="'Next'" [icon]="'fa fa-chevron-right'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Download'" [type]="'success'" [tooltipMessage]="'Save'" [icon]="'fa fa-save'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Delete'" [type]="'danger'" [tooltipMessage]="'delete'" [icon]="'fa fa-trash'"></amexio-button>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h2> Button Sizes</h2>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Large Button'" [type]="'primary'" [tooltipMessage]="'large'" [size]="'large'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Default Button'" [type]="'primary'" [tooltipMessage]="'default'"></amexio-button>
                      </amexio-column>
                      <amexio-column [size]="4">
                        <amexio-button [label]="'Small Button'" [type]="'primary'" [tooltipMessage]="'small'" [size]="'small'"></amexio-button>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <!--<amexio-row>-->
              <!--<amexio-column [size]="12">-->
                <!--<amexio-card [enableHeader]="true">-->
                  <!--<amexio-header>-->
                    <!--<h2>  Block Button</h2>-->
                  <!--</amexio-header>-->
                  <!--<amexio-body>-->
                    <!--<amexio-row>-->
                      <!--<amexio-column [size]="6">-->
                        <!--<amexio-button [label]="'Block Button(primary)'" [type]="'primary'" [tooltipMessage]="'large'" [size]="'large'" [block]="'true'"></amexio-button>-->
                      <!--</amexio-column>-->
                      <!--<amexio-column [size]="6">-->
                        <!--<amexio-button [label]="'Block Button(success)'" [type]="'success'" [tooltipMessage]="'success'" [size]="'large'" [block]="'true'"></amexio-button>-->
                      <!--</amexio-column>-->
                    <!--</amexio-row>-->
                  <!--</amexio-body>-->
                <!--</amexio-card>-->
              <!--</amexio-column>-->
            <!--</amexio-row>-->
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/button.json'"
                             [dataReader]="'properties'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/button.json'" [dataReader]="'events'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
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
export class ButtonDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
    constructor(private http: Http) {
      this.getHtmlAndTypeScriptCode();
  }
  switchasyncFlag() {
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
    this.http.get('assets/data/code/forms/button/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/button/form.text').subscribe(data => {
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


