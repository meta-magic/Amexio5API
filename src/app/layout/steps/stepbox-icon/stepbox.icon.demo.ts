/**
 * Created by pratik on 15/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {debug} from "util";

@Component({
 selector: 'stepbox-icon-demo',
 template: `
   <amexio-card header="true">
     <amexio-header>
        Step Box Icon 
     </amexio-header>
     <amexio-body>
       <p>Step-box component is an indicator for the steps in a workflow.</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column size="12">
               <!--block is true for showing step box  -->
               <p><strong>Step box</strong></p>
               <!--Step-box with fontawesome icons-->
               <amexio-steps [icon]="true">
                 <amexio-step-block [label]="'User'" [active]="true" [icon]="'fa fa-user'" ></amexio-step-block>
                 <amexio-step-block [label]="'Address'" [active]="false" [icon]="'fa fa-address-card'"></amexio-step-block>
                 <amexio-step-block [label]="'Shop'" [active]="false" [icon]="'fa fa-shopping-cart'"></amexio-step-block>
                 <amexio-step-block [label]="'Payment'" [active]="false" [icon]="'fa fa-cc-visa'"></amexio-step-block>
               </amexio-steps>
             </amexio-column>
           </amexio-row>
           <amexio-row>
             <amexio-column size="12">
               <!--block is true for showing step box  -->
               <p><strong>Step box with clickabel</strong></p>
               <!--Step box with icon & clickable<-->
               <amexio-steps [block]="true" [icon]="true" (onClick)="stepBlockClick($event)">
                 <amexio-step-block [label]="'User'" [active]="user" [icon]="'fa fa-user'"></amexio-step-block>
                 <amexio-step-block [label]="'Shop'" [active]="shop" [icon]="'fa fa-address-card'"></amexio-step-block>
                 <amexio-step-block [label]="'Payment'" [active]="payment" [icon]="'fa fa-shopping-cart'"></amexio-step-block>
                 <amexio-step-block [label]="'Confirmation'" [active]="confirmation" [icon]="'fa fa-cc-visa'"></amexio-step-block>
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

           <amexio-datagrid title="Events" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/layout/steps/stepevents.json'"
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
         <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-stepboxicon?embed=1&file=app/panels/stepboxicon/stepboxicon.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
         </amexio-tab>
       </amexio-tab-view>
     </amexio-body>
   </amexio-card>
   <amexio-notification [data]="clickMsgArray" vertical-position="top" horizontal-position="right" auto-dismiss-msg="true" auto-dismiss-msg-interval="1000"></amexio-notification>

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

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
    this.user=false;
    this.shop=true;
    this.payment=false;
    this.confirmation=false;
  }

// step box click event
  stepBlockClick(event:any){
    if(event.label=="User"){
      this.showMsg("Step 1 User");
      this.updateFlag(true,false,false,false);
    }else if(event.label=="Shop"){
      this.showMsg("Step 2 Shop");
      this.updateFlag(false,true,false,false);
    }else if(event.label=="Payment"){
      this.updateFlag(false,false,true,false);
      this.showMsg("Step 3 Payment");
    }else if(event.label=="Confirmation"){
      this.showMsg("Step 4 Confirmation");
      this.updateFlag(false,false,false,true);
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
