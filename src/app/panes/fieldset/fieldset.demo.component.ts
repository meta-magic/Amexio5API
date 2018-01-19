/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
 selector: 'fieldset-demo',
 template: `
   <amexio-card header="true">
     <amexio-header>
       <h2>Fieldset</h2>
     </amexio-header>
     <amexio-body>
       <p>A FieldSet is a great way to visually separate elements of a form. It's normally used when you have a form with fields that can be divided into groups.Fieldset can optionally have a title at the top</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
          <amexio-row>
            <amexio-column [size]="12">
              <amexio-fieldset [collapsible]="true" title="Employee Registration">
                <amexio-row>
                  <amexio-column [size]="6">
                    <amexio-text-input [fieldlabel]="'Name'" name="country"
                                       [placeholder]="'Enter name'"
                                       [enablepopover]="true"
                                       [iconfeedback]="true"
                                       [allowblank]="false" [errormsg]="'Please enter name'"
                                       [minlength]="3" [maxlength]="15" [minerrormsg]="'Name should be minimum 3 characters'"
                                       [maxerrormsg]="'Name should be less than 15 characters'"
                    >
                    </amexio-text-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-text-input [fieldlabel]="'Surname'" name="name"
                                       [placeholder]="'Enter surname'"
                                       [enablepopover]="true"
                                       [iconfeedback]="true"
                                       [allowblank]="false" [errormsg]="'Please enter Surname'"
                                       [minlength]="3" [maxlength]="15" [minerrormsg]="'Surname should be minimum 3 characters'"
                                       [maxerrormsg]="'Surname should be less than 15 characters'"
                    >
                    </amexio-text-input>
                  </amexio-column>
                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="6">

                    <amexio-textarea-input [fieldlabel]="'Address'" name="Address"
                                           [placeholder]="'Enter address'"
                                           [errormsg]="'Please enter address'"
                                           [iconfeedback]="true"
                                           [rows]="'1'" [columns]="'2'"
                                           [allowblank]="false" [enablepopover]="true"

                    >
                    </amexio-textarea-input>


                  </amexio-column>
             
                </amexio-row>

              </amexio-fieldset>
            </amexio-column>
          </amexio-row>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                            [httpmethod]="'get'"
                            [httpurl]="'assets/apireference/layout/fieldset/fieldset.json'"
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

export class FieldSetDemoComponent  {
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
    this.http.get('assets/data/code/layout/fieldset/fieldset.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/fieldset/fieldset.text').subscribe(data => {
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
