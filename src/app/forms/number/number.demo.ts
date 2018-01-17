/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'number-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Number Input Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Number input component has been created with different configurable attributes for validation (min/max value, allow blank, custom regex), 
          custom error message, help, custom styles.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card enableHeader="true">
                  <amexio-header>
                    <h4>Basic Number Input</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-number-input [fieldLabel]="'Number Input'"
                                         [placeholder]="'Enter Age'">
                    </amexio-number-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h4>Number Input With Disable</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-number-input  
                                         [placeholder]="'Enter age'"
                                         [iconFeedBack]="false"
                                         [hasLabel]="false" [disabled]="true">
                    </amexio-number-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h4>Number Input Font Style</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-number-input [fieldLabel]="'Age'" 
                                        [placeholder]="'Enter Age'"
                                        [fontStyle]="'italic'">
                    </amexio-number-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h4>Number Input With Min/Max Validation</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-number-input  [enablePopOver]="true" [fieldLabel]="'Age'" 
                                          [placeholder]="'Enter age'"
                                          [allowBlank]="false" [errorMsg] ="'Please enter age'"
                                          [minValue]="1"
                                          [minErrorMsg]="'age can not be less than 1'"
                                          [maxValue]="100"  [maxErrorMsg]="'age can not be greater than 100'"
                                          [iconFeedBack]="true"
                    >
                    </amexio-number-input>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/number.json'" 
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
                             [httpUrl]="'assets/apireference/forms/number.json'" [dataReader]="'events'"
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
export class NumberDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  age:number=10;
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/forms/number/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/number/form.text').subscribe(data => {
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


