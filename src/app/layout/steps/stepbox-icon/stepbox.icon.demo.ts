/**
 * Created by pratik on 15/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
 selector: 'stepbox-icon-demo',
 template: `
   <amexio-card enableHeader="true">
     <amexio-header>
       <h2>Step box Icon Component</h2>
     </amexio-header>
     <amexio-body>
       <p>Step-box component is an indicator for the steps in a workflow.</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column size="12">
               <!--showBlockBox is true for showing step box  -->
               <p><strong>Step box</strong></p>
               <!--Step-box with fontawesome icons-->
               <amexio-steps [showIcon]="true" (onBlockClick)="stepBlockClick($event)">
                 <amexio-step-block [label]="'User'" [active]="true" [icon]="'fa fa-user'" ></amexio-step-block>
                 <amexio-step-block [label]="'Address'" [active]="false" [icon]="'fa fa-address-card'"></amexio-step-block>
                 <amexio-step-block [label]="'Shop'" [active]="false" [icon]="'fa fa-shopping-cart'"></amexio-step-block>
                 <amexio-step-block [label]="'Payment'" [active]="false" [icon]="'fa fa-cc-visa'"></amexio-step-block>
               </amexio-steps>
             </amexio-column>
           </amexio-row>
           <amexio-row>
             <amexio-column size="12">
               <!--showBlockBox is true for showing step box  -->
               <p><strong>Step box with clickabel</strong></p>
               <!--Step box with icon & clickable<-->
               <amexio-steps [showBlockBox]="true" [showIcon]="true" (onBlockClick)="stepBlockClick($event)">
                 <amexio-step-block [label]="'User'" [active]="user" [icon]="'fa fa-user'"></amexio-step-block>
                 <amexio-step-block [label]="'Shop'" [active]="shop" [icon]="'fa fa-address-card'"></amexio-step-block>
                 <amexio-step-block [label]="'Payment'" [active]="payment" [icon]="'fa fa-shopping-cart'"></amexio-step-block>
                 <amexio-step-block [label]="'Confirmation'" [active]="confirmation" [icon]="'fa fa-cc-visa'"></amexio-step-block>
               </amexio-steps>
             </amexio-column>
           </amexio-row>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [columnToggle]="false"
                            [httpMethod]="'get'"
                            [httpUrl]="'assets/apireference/layout/steps/step.json'"
                            [dataReader]="'properties'"
                            [filtering]="false">
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
 `
})

export class StepBoxIconComponent {
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
    this.http.get('assets/data/code/layout/steps/steps_icon.html').subscribe(data => {
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
