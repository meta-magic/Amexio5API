/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'step-box', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Step box Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Step-box component is an indicator for the steps in a workflow.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <!--showBlockBox is true for showing step box  -->
                <p><strong>Step box</strong></p>
                <amexio-steps [showBlockBox]="true" [showIndex]="true" >
                  <amexio-step-block [label]="'User'" [active]="true" ></amexio-step-block>
                  <amexio-step-block [label]="'Shop'" [active]="false" ></amexio-step-block>
                  <amexio-step-block [label]="'Payment'" [active]="false"></amexio-step-block>
                  <amexio-step-block [label]="'Confirmation'" [active]="false" ></amexio-step-block>
                </amexio-steps>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="12">
                <!--showBlockBox is true for showing step box  -->
                <p><strong>Step box with clickabel</strong></p>
                <amexio-steps [showBlockBox]="true" [showIndex]="true">
                  <amexio-step-block [label]="'User'" [active]="'user'" ></amexio-step-block>
                  <amexio-step-block [label]="'Shop'" [active]="'shop'" ></amexio-step-block>
                  <amexio-step-block [label]="'Payment'" [active]="'payment'"></amexio-step-block>
                  <amexio-step-block [label]="'Confirmation'" [active]="'confirmation'"></amexio-step-block>
                </amexio-steps>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="12">
                showIndex is true for number inside circle 
                <p><strong>Step-box index</strong></p>
                <amexio-steps [showIndex]="true">
                  <amexio-step-block [label]="'step-1'" [active]="true"></amexio-step-block>
                  <amexio-step-block [label]="'step-2'" [active]="false"></amexio-step-block>
                  <amexio-step-block [label]="'step-3'" [active]="false"></amexio-step-block>
                  <amexio-step-block [label]="'step-4'" [active]="false"></amexio-step-block>
                </amexio-steps>
              </amexio-column>
            </amexio-row>
           </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/layout/step/step.json'"
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
export class StepBoxDemoComponent {
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
    this.http.get('assets/data/code/layout/steps/stepbox/step.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/steps/stepbox/step.ts').subscribe(data => {
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


