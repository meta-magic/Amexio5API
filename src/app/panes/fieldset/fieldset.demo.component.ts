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
        Fieldset 
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
                    <amexio-text-input [field-label]="'Name'" name="country"
                                       [place-holder]="'Enter name'"
                                       [enable-popover]="true"
                                       [icon-feedback]="true"
                                       [allow-blank]="false" [error-msg]="'Please enter name'"
                                       [min-length]="3" [max-length]="15" [min-error-msg]="'Name should be minimum 3 characters'"
                                       [max-error-msg]="'Name should be less than 15 characters'"
                    >
                    </amexio-text-input>
                  </amexio-column>
                  <amexio-column [size]="6">
                    <amexio-text-input [field-label]="'Surname'" name="name"
                                       [place-holder]="'Enter surname'"
                                       [enable-popover]="true"
                                       [icon-feedback]="true"
                                       [allow-blank]="false" [error-msg]="'Please enter Surname'"
                                       [min-length]="3" [max-length]="15" [min-error-msg]="'Surname should be minimum 3 characters'"
                                       [max-error-msg]="'Surname should be less than 15 characters'"
                    >
                    </amexio-text-input>
                  </amexio-column>
                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="6">

                    <amexio-textarea-input [field-label]="'Address'" name="Address"
                                           [place-holder]="'Enter address'"
                                           [error-msg]="'Please enter address'"
                                           [icon-feedback]="true"
                                           [rows]="'4'" [columns]="'2'"
                                           [allow-blank]="false" [enable-popover]="true"

                    >
                    </amexio-textarea-input>


                  </amexio-column>
             
                </amexio-row>

              </amexio-fieldset>
            </amexio-column>
          </amexio-row>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/layout/fieldset/fieldset.json'"
                            [data-reader]="'properties'"
                            [enable-data-filter]="false" >
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
         <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-fieldset?embed=1&file=main.ts" frameborder="0" allowfullscren="allowfullscren"></iframe>
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
