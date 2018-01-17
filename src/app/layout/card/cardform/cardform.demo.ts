/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'card-form-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Card Component</h2>
      </amexio-header>
      <amexio-body>
        <p>A Simple Card which renders card based on title, body and actions user has configured</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-button [label]="'Hide/UnHide Card'" [type]="'primary'" [tooltipMessage]="'Hide/UnHide Card'" (click)="toggle()"> </amexio-button>
            <amexio-card [enableHeader]="true" [enableFooter]="true" [showCard]="flag" [footeralign]="'right'">
              <amexio-header>
               <h5> Employee Registration</h5>
              </amexio-header>
              <amexio-body>
                <amexio-row>
                  <amexio-column [size]="6">
                    <amexio-text-input [fieldLabel]="'Name'" name ="name"
                                       [placeholder]="'Enter name'"
                                       [iconFeedBack]="true">
                    </amexio-text-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-text-input [fieldLabel]="'Address'" name ="address"
                                       [placeholder]="'Enter address'"
                                       [iconFeedBack]="true">
                    </amexio-text-input>
                  </amexio-column>
                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="6">
                    <amexio-text-input [fieldLabel]="'Phone'" name ="phone"
                                       [placeholder]="'Enter phone'"
                                       [iconFeedBack]="true">
                    </amexio-text-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-text-input [fieldLabel]="'Email'" name ="email"
                                       [placeholder]="'Enter Email'"
                                       [iconFeedBack]="true">
                    </amexio-text-input>
                  </amexio-column>
                </amexio-row>
              </amexio-body>
              <amexio-action >
                <amexio-button [label]="'Save'" [type]="'primary'"></amexio-button>
              </amexio-action>
            </amexio-card>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/layout/card.json'" 
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
export class CardFormDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  flag: boolean;
  constructor(private http: Http) {
    this.flag = true;
    this.getHtmlAndTypeScriptCode();
  }
  //Toggle event
  toggle(){
    this.flag = !this.flag;
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/card/layout.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/card/layout.text').subscribe(data => {
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


