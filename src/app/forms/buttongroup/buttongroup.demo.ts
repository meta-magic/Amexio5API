/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'buttongroup-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Button Group 
      </amexio-header>
      <amexio-body>
        <p>Button groups are containers for related action amexio-button.
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Button Group Types 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                   <amexio-column [size]="12">
                     <amexio-btn-group>
                       <amexio-button [label]="'Secondary'" (onClick)="getData($event)"></amexio-button>
                       <amexio-button [label]="'primary'"  [type]="'primary'"  ></amexio-button>
                       <amexio-button [label]="'Success'" [type]="'success'" ></amexio-button>
                       <amexio-button [label]="'Danger'" [type]="'danger'" ></amexio-button>
                       <amexio-button [label]="'Warning'" [type]="'warning'" ></amexio-button>
                     </amexio-btn-group>
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
                     Button Group States 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-btn-group>
                          <amexio-button [label]="'Disabled'"  [type]="'primary'"  [tooltip]="'Disabled'" [disabled]="'true'"></amexio-button>
                          <amexio-button [label]="'Enabled'" [type]="'primary'" [tooltip]="'Enabled'"></amexio-button>
                        </amexio-btn-group>
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
                      Button Group with Icons 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-btn-group>
                          <amexio-button [label]="'Next'" [type]="'primary'" [tooltip]="'Next'" [icon]="'fa fa-chevron-right'"  ></amexio-button>
                          <amexio-button [label]="'Download'" [type]="'success'" [tooltip]="'Save'" [icon]="'fa fa-save'" ></amexio-button>
                          <amexio-button [label]="'Delete'" [type]="'danger'" [tooltip]="'delete'" [icon]="'fa fa-trash'" ></amexio-button>
                        </amexio-btn-group>
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
                      Button Group Sizes 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="6">
                        <amexio-btn-group  >
                          <amexio-button [size]="'large'" [label]="'Next'" [type]="'primary'" [tooltip]="'Next'" [icon]="'fa fa-chevron-right'" ></amexio-button>
                          <amexio-button [size]="'large'" [label]="'Download'" [type]="'success'" [tooltip]="'Save'" [icon]="'fa fa-save'" ></amexio-button>
                          <amexio-button [size]="'large'" [label]="'Delete'" [type]="'danger'" [tooltip]="'delete'" [icon]="'fa fa-trash'" ></amexio-button>
                        </amexio-btn-group>
                      </amexio-column>
                      <amexio-column [size]="6">
                        <amexio-btn-group >
                          <amexio-button [size]="'small'" [label]="'Next'" [type]="'primary'" [tooltip]="'Next'" [icon]="'fa fa-chevron-right'"  ></amexio-button>
                          <amexio-button [size]="'small'" [label]="'Download'" [type]="'success'" [tooltip]="'Save'" [icon]="'fa fa-save'" ></amexio-button>
                          <amexio-button [size]="'small'" [label]="'Delete'" [type]="'danger'" [tooltip]="'delete'" [icon]="'fa fa-trash'" ></amexio-button>
                        </amexio-btn-group>
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
export class ButtonGroupDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  getData(ss:any){
    debugger;
  }

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/buttongroup/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/buttongroup/form.text').subscribe(data => {
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


