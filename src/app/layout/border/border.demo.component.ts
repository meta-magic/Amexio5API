/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
 selector: 'border-demo',
 template: `
   <amexio-card enableHeader="true">
     <amexio-header>
       <h2>Border Layout Component</h2>
     </amexio-header>
     <amexio-body>
       <p>Accordion provides an easy way to organize big forms by grouping the fields in accordion tabs</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
          <amexio-borderlayout>
            <amexio-borderlayout-item [position]="'north'">
              <div style="border: 1px dashed black;height : 150px;width : 150px;">
                <p>North Position</p>
              </div>
            </amexio-borderlayout-item>
            <amexio-borderlayout-item [position]="'east'">
              <div style="border: 1px dashed black;height : 150px;width : 150px;">
                <p>East Position</p>
              </div>
            </amexio-borderlayout-item>
            <amexio-borderlayout-item [position]="'center'">
              <div style="border: 1px dashed black;height : 150px;width : 150px;">
                <p>Center Position</p>
              </div>
            </amexio-borderlayout-item> 
            <amexio-borderlayout-item [position]="'west'">
              <div style="border: 1px dashed black;height : 150px;width : 150px;">
                <p>West Position</p>
              </div>
            </amexio-borderlayout-item>
            <amexio-borderlayout-item [position]="'south'">
              <div style="border: 1px dashed black;height : 150px;width : 150px;">
                <p>South Position</p>
              </div>
            </amexio-borderlayout-item>
          </amexio-borderlayout>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [columnToggle]="false"
                            [httpMethod]="'get'"
                            [httpUrl]="'assets/apireference/border/border.json'"
                            [dataReader]="'properties'"
                            [filtering]="false" >
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
