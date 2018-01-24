/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'step-box', template: `
    <amexio-card header="true">
      <amexio-header>
         Step Box 
      </amexio-header>
      <amexio-body>
        <p>Step-box component is an indicator for the steps in a workflow.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <!--block is true for showing step box  -->
                <p><strong>Step box</strong></p>
                <amexio-steps [block]="true" [index]="true" (onClick)="stepBlockClick($event)">
                  <amexio-step-block [label]="'User'" [active]="true" ></amexio-step-block>
                  <amexio-step-block [label]="'Shop'" [active]="false" ></amexio-step-block>
                  <amexio-step-block [label]="'Payment'" [active]="false"></amexio-step-block>
                  <amexio-step-block [label]="'Confirmation'" [active]="false" ></amexio-step-block>
                </amexio-steps>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="12">
                <!--block is true for showing step box  -->
                <p><strong>Step box with clickabel</strong></p>
                <amexio-steps [block]="true" [index]="true" (onClick)="stepBlockClick($event)">
                  <amexio-step-block [label]="'User'" [active]="'user'" ></amexio-step-block>
                  <amexio-step-block [label]="'Shop'" [active]="'shop'" ></amexio-step-block>
                  <amexio-step-block [label]="'Payment'" [active]="'payment'"></amexio-step-block>
                  <amexio-step-block [label]="'Confirmation'" [active]="'confirmation'"></amexio-step-block>
                </amexio-steps>
              </amexio-column>
            </amexio-row>
            <amexio-row>
              <amexio-column size="12">
                index is true for number inside circle 
                <p><strong>Step-box index</strong></p>
                <amexio-steps [index]="true" (onClick)="stepBlockClick($event)">
                  <amexio-step-block [label]="'step-1'" [active]="true"></amexio-step-block>
                  <amexio-step-block [label]="'step-2'" [active]="false"></amexio-step-block>
                  <amexio-step-block [label]="'step-3'" [active]="false"></amexio-step-block>
                  <amexio-step-block [label]="'step-4'" [active]="false"></amexio-step-block>
                </amexio-steps>
              </amexio-column>
            </amexio-row>
           </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/layout/steps/step.json'"
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
    <amexio-notification [data]="clickMsgArray" vertical-position="top" horizontal-position="right"></amexio-notification>

  `
})
export class StepBoxDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  user:boolean;
  shop:boolean;
  payment:boolean;
  confirmation:boolean;
  clickMsgArray:any=[];

// step box click event
  stepBlockClick(event:any){
    if(event.label=="User"){
      this.updateFlag(true,false,false,false);
      this.showMsg("Step 1 User");
    }else if(event.label=="Shop"){
      this.updateFlag(false,true,false,false);
      this.showMsg("Step 2 Shop");
    }else if(event.label=="Payment"){
      this.showMsg("Step 3 Payment");
      this.updateFlag(false,false,true,false);
    }else if(event.label=="Confirmation"){
      this.updateFlag(false,false,false,true);
      this.showMsg("Step 4 Confirmation");
    }
  }
  updateFlag(user:boolean,shop:boolean,payment:boolean,confirmation:boolean){
    this.user=user;
    this.shop=shop;
    this.payment=payment;
    this.confirmation=confirmation;
  }
  showMsg(msg){
    if(this.clickMsgArray.length>=1){
      this.clickMsgArray=[];
      this.clickMsgArray.push(msg);
    }else{
      this.clickMsgArray.push(msg);
    }
  }

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
    this.user=false;
    this.shop=true;
    this.payment=false;
    this.confirmation=false;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/layout/steps/steps.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/steps/steps.text').subscribe(data => {
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
      this.copyMsgArray.push('Code Copied');
    } else {
      this.copyMsgArray.push('Code Copied');
    }
  }
}


