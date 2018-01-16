/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';

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
                            [httpUrl]="'assets/apireference/layout/accordion/acc.json'"
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


           <amexio-datagrid title="Events" [columnToggle]="false"
                            [httpMethod]="'get'"
                            [httpUrl]="'assets/apireference/layout/accordion/acc_event.json'"
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

export class FieldSetDemoComponent implements OnInit {
 constructor() { }

 ngOnInit() { }
}
