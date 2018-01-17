/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'email-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Email Input Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Email input special component has been created, which restrict user to enter only email format. 
          User can configure attributes for validation(Allow Blank), custom error message, help, custom styles.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card enableHeader="true">
                  <amexio-header>
                    <h4>Basic Email Input</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-email-input [fieldLabel]="'Email Id'" name ="email"
                                        [placeholder]="'Enter Email Id'"
                                        [allowBlank]="false" [errorMsg] ="'Please Enter Email Id'"
                                        [enablePopOver]="true"
                                        [iconFeedBack]="true">
                    </amexio-email-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h4>Email Input With Disable Property</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-email-input name ="email" [fieldLabel]="'Email Id'"
                                        [placeholder]="'Enter Email Id'"
                                        [disabled]="true">
                    </amexio-email-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h4>Email Input Font Style</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-email-input [fieldLabel]="'Email Id'" name ="email"
                                        [placeholder]="'Enter Email Id'"
                                        [iconFeedBack]="true"
                                        [fontStyle]="'italic'">
                    </amexio-email-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h4>Font Family</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-email-input name ="email" [fieldLabel]="'Email Id'"
                                        [placeholder]="'Enter Email Id'"
                                        [fontFamily]="'Times New Roman'"
                                        [fontSize]="'large'">
                    </amexio-email-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/email.json'" 
                             [dataReader]="'properties'"
                             [filtering]="false" >
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
                             [httpUrl]="'assets/apireference/forms/email.json'" [dataReader]="'events'"
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
export class EmailDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/email/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/email/form.text').subscribe(data => {
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


