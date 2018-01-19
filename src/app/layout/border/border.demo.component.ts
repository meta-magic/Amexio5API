/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
 selector: 'border-demo',
 template: `
   <amexio-card header="true">
     <amexio-header>
       <h2>Border Layout</h2>
     </amexio-header>
     <amexio-body>
       <p>A border layout lays out a container, arranging and resizing its components to fit in five regions: north, south, east, west, and center.</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <h4>Border Layout</h4>
           <amexio-borderlayout>
             <amexio-borderlayout-item position="north">
               <amexio-card><amexio-body>NORTH</amexio-body></amexio-card>
             </amexio-borderlayout-item>
             <amexio-borderlayout-item position="east">
               <amexio-card><amexio-body>EAST</amexio-body></amexio-card>
             </amexio-borderlayout-item>
             <amexio-borderlayout-item position="center">
               <amexio-card><amexio-body>CENTER</amexio-body></amexio-card>
             </amexio-borderlayout-item>
             <amexio-borderlayout-item position="west">
               <amexio-card><amexio-body>WEST</amexio-body></amexio-card>
             </amexio-borderlayout-item>
             <amexio-borderlayout-item position="south">
               <amexio-card><amexio-body>SOUTH</amexio-body></amexio-card>
             </amexio-borderlayout-item>
           </amexio-borderlayout>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                            [httpmethod]="'get'"
                            [httpurl]="'assets/apireference/border/border.json'"
                            [datareader]="'properties'"
                            [enabledatafilter]="false" >
             <amexio-data-table-column [width]="15" [dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'type'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'default'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
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

export class BorderDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  constructor(private http: Http) {
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
    this.http.get('assets/data/code/border/border.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/border/border.text').subscribe(data => {
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
