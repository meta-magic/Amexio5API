/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
 selector: 'fieldset-demo',
 template: `
   <amexio-card enableHeader="true">
     <amexio-header>
       <h2>Fieldset Component</h2>
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
                    <amexio-text-input [fieldLabel]="'Name'" name="country"
                                       [placeholder]="'Enter name'"
                                       [enablePopOver]="true"
                                       [iconFeedBack]="true"
                                       [allowBlank]="false" [errorMsg]="'Please enter name'"
                                       [minLength]="3" [maxLength]="15" [minErrorMsg]="'Name should be minimum 3 characters'"
                                       [maxErrorMsg]="'Name should be less than 15 characters'"
                    >
                    </amexio-text-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-text-input [fieldLabel]="'Surname'" name="name"
                                       [placeholder]="'Enter surname'"
                                       [enablePopOver]="true"
                                       [iconFeedBack]="true"
                                       [allowBlank]="false" [errorMsg]="'Please enter Surname'"
                                       [minLength]="3" [maxLength]="15" [minErrorMsg]="'Surname should be minimum 3 characters'"
                                       [maxErrorMsg]="'Surname should be less than 15 characters'"
                    >
                    </amexio-text-input>
                  </amexio-column>
                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="6">

                    <amexio-textarea-input [fieldLabel]="'Address'" name="Address"
                                           [placeholder]="'Enter address'"
                                           [errorMsg]="'Please enter address'"
                                           [iconFeedBack]="true"
                                           [noOfrows]="'1'" [noOfCols]="'2'"
                                           [allowBlank]="false" [enablePopOver]="true"

                    >
                    </amexio-textarea-input>


                  </amexio-column>
             
                </amexio-row>

              </amexio-fieldset>
            </amexio-column>
          </amexio-row>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [columnToggle]="false"
                            [httpMethod]="'get'"
                            [httpUrl]="'assets/apireference/layout/fieldset/fieldset.json'"
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
