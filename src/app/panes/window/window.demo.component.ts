/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
 selector: 'window-demo',
 template: `
   <amexio-card header="true">
     <amexio-header>
        Window Pane 
     </amexio-header>
     <amexio-body>
       <p>Window Pane component is a customizable Modal Pane in which user can enter custom content</p>
       <amexio-tab-view>
         <amexio-tab title="Demo" active="true">
           <amexio-row> 
             <amexio-column [size]="4">
               <amexio-button type="primary" (onClick)="toggleBasicWindow()" label="Basic Window"></amexio-button>
               <amexio-label size="small">(Window pane demo with positioned bottom right and with escape key functionality)</amexio-label>
               <amexio-window [body-height]="40" [show-window]="showBasicWindow" [close-on-escape]="true" [footer]="true" [vertical-position]="'bottom'" [horizontal-position]="'right'" (close)="toggleBasicWindow()">
                 <amexio-header>
                  Employee Form
                 </amexio-header>
                 <amexio-body>
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
                     <amexio-text-input [field-label]="'Description'" name="country"
                                        [place-holder]="'Description'"
                                        [enable-popover]="true"
                                        [icon-feedback]="true"
                                        [allow-blank]="false" [error-msg]="'Please enter name'"
                                        [min-length]="3" [max-length]="15" [min-error-msg]="'Name should be minimum 3 characters'"
                                        [max-error-msg]="'Name should be less than 15 characters'"
                     >
                     </amexio-text-input>
                   </amexio-column>
                   <amexio-column [size]="6">
                     <amexio-text-input [field-label]="'Hobbies'" name="name"
                                        [place-holder]="'Hobbies'"
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
                                              [rows]="'1'" [columns]="'2'"
                                              [allow-blank]="false" [enable-popover]="true"

                       >
                       </amexio-textarea-input>


                     </amexio-column>

                   </amexio-row>


                   <amexio-row>
                   <amexio-column [size]="6">
                     <amexio-text-input [field-label]="'Phone'" name="country"
                                        [place-holder]="'Phone'"
                                        [enable-popover]="true"
                                        [icon-feedback]="true"
                                        [allow-blank]="false" [error-msg]="'Please enter name'"
                                        [min-length]="3" [max-length]="15" [min-error-msg]="'Name should be minimum 3 characters'"
                                        [max-error-msg]="'Name should be less than 15 characters'"
                     >
                     </amexio-text-input>
                   </amexio-column>
                   <amexio-column [size]="6">
                     <amexio-text-input [field-label]="'Email'" name="name"
                                        [place-holder]="'Email'"
                                        [enable-popover]="true"
                                        [icon-feedback]="true"
                                        [allow-blank]="false" [error-msg]="'Please enter Surname'"
                                        [min-length]="3" [max-length]="15" [min-error-msg]="'Surname should be minimum 3 characters'"
                                        [max-error-msg]="'Surname should be less than 15 characters'"
                     >
                     </amexio-text-input>
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
               <amexio-window [show-window]="showMaxWindow" [footer]="true" (close)="toggleMaxWindow()"  [maximize]="true">
                 <amexio-header>
                   Employee Form
                 </amexio-header>
                 <amexio-body>
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
                                              [rows]="'1'" [columns]="'2'"
                                              [allow-blank]="false" [enable-popover]="true"

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
               <amexio-window [show-window]="showClosable"  [closable]="true" (close)="toggleClosable()" >
                 <amexio-header>
                   Employee Form
                 </amexio-header>
                 <amexio-body>
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
                                              [rows]="'1'" [columns]="'2'"
                                              [allow-blank]="false" [enable-popover]="true"

                       >
                       </amexio-textarea-input>


                     </amexio-column>

                   </amexio-row>
                 </amexio-body>
               </amexio-window>
             </amexio-column>
           </amexio-row>
         </amexio-tab>
         <amexio-tab title="API Reference">
           <amexio-datagrid title="Properties <amexio-window>" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/panes/window/window.json'"
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
           <amexio-datagrid title="Properties" [enable-column-fiter]="false"
                            [http-method]="'get'"
                            [http-url]="'assets/apireference/panes/window/window.json'"
                            [data-reader]="'events'"
                            [enable-data-filter]="false" >
             <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>

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
         <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-window?embed=1&file=app/panels/window/window.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
         </amexio-tab>
       </amexio-tab-view>
     </amexio-body>
   </amexio-card>
 `
})

export class WindowDemoComponent {

  showBasicWindow  = false;
  showMaxWindow : boolean;
  showClosable : boolean;
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  constructor(private http: HttpClient) {
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
    this.http.get('assets/data/code/pane/window/window.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/window/window.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
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

}
