/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
 selector: 'window-demo',
 template: `
   <amexio-card header="true">
     <amexio-header>
       <h2>Window Pane</h2>
     </amexio-header>
     <amexio-body>
       <p>Window Pane component is a customizable Modal Pane in which user can enter custom content</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <amexio-row>
             <amexio-column [size]="4">
               <amexio-button type="primary" (onClick)="toggleBasicWindow()" label="Basic Window"></amexio-button>
               <amexio-window [showWindow]="showBasicWindow" type="window" [closable]="false">
                 <amexio-header>
                  Employee Form
                 </amexio-header>
                 <amexio-body>
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
                 </amexio-body>
                 <amexio-action>
                   <amexio-button (onClick)="showBasicWindow = false" label="Close"></amexio-button>
                 </amexio-action>
                
               </amexio-window>
             </amexio-column>
           
           
          
             <amexio-column [size]="4">
               <amexio-button type="primary" (onClick)="toggleMaxWindow()" label="Maximizable Window"></amexio-button>
               <amexio-window [showWindow]="showMaxWindow" [closable]="false" type="window" [maximize]="true">
                 <amexio-header>
                   Employee Form
                 </amexio-header>
                 <amexio-body>
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
                 </amexio-body>
                 <amexio-action>
                   <amexio-button (onClick)="showMaxWindow = false" label="Close"></amexio-button>
                 </amexio-action>

               </amexio-window>
             </amexio-column>
                  
      
             <amexio-column [size]="4">
               <amexio-button type="primary" (onClick)="toggleClosable()" label="Closable Window"></amexio-button>
               <amexio-window [showWindow]="showClosable" [closable]="true" type="window">
                 <amexio-header>
                   Employee Form
                 </amexio-header>
                 <amexio-body>
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
                 </amexio-body>
               </amexio-window>
             </amexio-column>

         
             <amexio-column [size]="4">
              <amexio-button type="primary" (onClick)="toggleDialog()" label="Dialog Window"></amexio-button>
               <amexio-window [showWindow]="showDialog" [dialog]="true">
                 <amexio-header>
                   Confirm Dialogue
                 </amexio-header>
                 
                 <amexio-body>
                   <span>Do you want to confirm action</span>
                 </amexio-body>
                 <amexio-action>
                   <amexio-button (onClick)="showDialog = false" label="Yes"></amexio-button>
                   <amexio-button (onClick)="showDialog = false" label="Cancel"></amexio-button>
                 </amexio-action>
               </amexio-window>
               
             </amexio-column>
           </amexio-row>
        
           
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                            [httpmethod]="'get'"
                            [httpurl]="'assets/apireference/layout/window/window.json'"
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

export class WindowDemoComponent {

  showBasicWindow : boolean;
  showMaxWindow : boolean;
  showClosable : boolean;
  showDialog : boolean;
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
    this.http.get('assets/data/code/layout/window/window.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/window/window.text').subscribe(data => {
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

  toggleBasicWindow(){
   this.showBasicWindow = !this.showBasicWindow;
  }

  toggleMaxWindow(){
    this.showMaxWindow = !this.showMaxWindow;
  }

  toggleClosable(){
    this.showClosable = !this.showClosable;
  }

  toggleDialog(){
    this.showDialog = !this.showDialog;
  }
}
