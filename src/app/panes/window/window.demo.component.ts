/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
           <amexio-card [header]="true">
             <amexio-header> Material Pattern</amexio-header>
             <amexio-body>
           <amexio-row>
            
                 
               
             <amexio-column [size]="4">
               <amexio-button type="success"
                              (onClick)="toggleBasicWindow('material')"
                              label="Basic Window"></amexio-button>
               <amexio-window
                 [body-height]="40"
                 [(show)]="showBasicWindowMaterial"
                 [close-on-escape]="true"
                 [material-design]="true"
                 [footer]="true"
                 [vertical-position]="'top'"
                 [horizontal-position]="'center'">
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
                   <amexio-button [type]= "'default'"(onClick)="showBasicWindowMaterial = false" label="Cancel"></amexio-button>
                    &nbsp;&nbsp;&nbsp; <amexio-button [type]="'theme-color'" (onClick)="showBasicWindowMaterial = false" label="Save"></amexio-button>
                 </amexio-action>

               </amexio-window>
               <amexio-row>
                 <amexio-column [size]="'12'">
                   <amexio-label>
                     (Horizontal and Vertical positioning enabled)
                   </amexio-label>
                 </amexio-column>
               </amexio-row>
             </amexio-column>
             <amexio-column [size]="4">
               <amexio-button type="warning" (onClick)="toggleMaxWindow('material')" label="Maximizable Window"></amexio-button>
               <amexio-window  [(show)]="showMaxWindowMaterial"
                               [footer]="true"
                               [material-design]="true"
                               [maximize]="true">
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
                   <amexio-button (onClick)="showMaxWindowMaterial = false" label="Close"></amexio-button>
                 </amexio-action>

               </amexio-window>
             </amexio-column>
             <amexio-column [size]="4">
               <amexio-button type="red" (onClick)="toggleClosable('material')" label="Closable Window"></amexio-button>
               <amexio-window   [(show)]="showClosableMaterial"
                                [close-on-escape]="false"
                                [material-design]="true"
                                [closable]="true"  >
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
               <amexio-row>
                 <amexio-column [size]="'12'">
                   <amexio-label size="small">
                     (Escape functionality disabled)
                   </amexio-label>
                 </amexio-column>
               </amexio-row>
             </amexio-column>
              
           </amexio-row>
             </amexio-body>
           </amexio-card>
           
           <amexio-card [header]="true">
             <amexio-header>Non Material Pattern </amexio-header>
             <amexio-body>
             <amexio-row>
               
               <amexio-column [size]="4">
                 <amexio-button type="success"
                                (onClick)="toggleBasicWindow('nonmaterial')"
                                label="Basic Window"></amexio-button>
                 <amexio-window
                   [body-height]="40"
                   [(show)]="showBasicWindowNonMaterial"
                   [close-on-escape]="true"
                   [material-design]="false"
                   [footer]="true"
                   [vertical-position]="'top'"
                   [horizontal-position]="'center'">
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
                     <amexio-button [type]= "'default'"(onClick)="showBasicWindowNonMaterial = false" label="Cancel"></amexio-button>
                     <amexio-button [type]="'theme-color'" (onClick)="showBasicWindowNonMaterial = false" label="Save"></amexio-button>
                   </amexio-action>

                 </amexio-window>
                 <amexio-row>
                   <amexio-column [size]="'12'">
                     <amexio-label>
                       (Horizontal and Vertical positioning enabled)
                     </amexio-label>
                   </amexio-column>
                 </amexio-row>
               </amexio-column>
               <amexio-column [size]="4">
                 <amexio-button type="warning" (onClick)="toggleMaxWindow('nonmaterial')" label="Maximizable Window"></amexio-button>
                 <amexio-window  [(show)]="showMaxWindowNonMaterial"
                                 [footer]="true"
                                 [material-design]="false"
                                 
                                 [maximize]="true">
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
                     <amexio-button (onClick)="showMaxWindowNonMaterial = false" label="Close"></amexio-button>
                   </amexio-action>

                 </amexio-window>
               </amexio-column>
               <amexio-column [size]="4">
                 <amexio-button type="red" (onClick)="toggleClosable('nonmaterial')" label="Closable Window"></amexio-button>
                 <amexio-window   [(show)]="showClosableNonMaterial"
                                  [close-on-escape]="false"
                                  [material-design]="false"
                                  [closable]="true">
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
                 <amexio-row>
                   <amexio-column [size]="'12'">
                     <amexio-label size="small">
                       (Escape functionality disabled)
                     </amexio-label>
                   </amexio-column>
                 </amexio-row>
               </amexio-column>

             </amexio-row>
             </amexio-body>
           </amexio-card>
           <amexio-card [header]="true">
           <amexio-header>Non Material Pattern with Toolbar </amexio-header>
           <amexio-body>
           <amexio-row>
             
             <amexio-column [size]="4">
               <amexio-button type="success"
                              (onClick)="toggleBasicWindow('nonmaterialtoolbar')"
                              label="Basic Window"></amexio-button>
               <amexio-window
                 [body-height]="40"
                 [(show)]="showBasicWindowNonMateialToolbar"
                 [close-on-escape]="true"
                 [material-design]="false"
                 [footer]="true"
                 [vertical-position]="'top'"
                 [horizontal-position]="'center'">
                 <amexio-header>
                <amexio-window-header>
                <amexio-toolbar >
                <amexio-toolbar-item position-left>
                <amexio-label size="small" >
                 Registration
                </amexio-label>
              </amexio-toolbar-item>
               
                <amexio-toolbar-item position-right [seperator-position]="'left'">
                <i class="fa fa-th" aria-hidden="true"></i>
                </amexio-toolbar-item>
                <amexio-toolbar-item position-right [seperator-position]="'left'">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                </amexio-toolbar-item>
                <amexio-toolbar-item position-right [seperator-position]="'left'">
                <i class="fa fa-question-circle" aria-hidden="true"></i>
                </amexio-toolbar-item>
                <amexio-toolbar-item position-right [seperator-position]="'left'">
                <i class="fa fa-cog" aria-hidden="true"></i>
                </amexio-toolbar-item>
             </amexio-toolbar>
                </amexio-window-header>
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
                   <amexio-button [type]= "'default'"(onClick)="showBasicWindowNonMaterial = false" label="Cancel"></amexio-button>
                   <amexio-button [type]="'theme-color'" (onClick)="showBasicWindowNonMaterial = false" label="Save"></amexio-button>
                 </amexio-action>

               </amexio-window>
              
             </amexio-column>
             <amexio-column [size]="4">
            
             </amexio-column>
             <amexio-column [size]="4">
              
               <amexio-row>
                 <amexio-column [size]="'12'">
                
                 </amexio-column>
               </amexio-row>
             </amexio-column>

           </amexio-row>
           </amexio-body>
         </amexio-card>
           
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
           <amexio-datagrid title="Events" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/panes/window/window.json'"
           [data-reader]="'events'" [enable-data-filter]="false">
           <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
           <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
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

  showBasicWindowMaterial: boolean;
  showBasicWindowNonMaterial: boolean;
  showBasicWindowNonMateialToolbar: boolean;

  showMaxWindowMaterial: boolean;
  showMaxWindowNonMaterial: boolean;

  showClosableMaterial: boolean;
  showClosableNonMaterial: boolean;

  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
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
    this.http.get('assets/data/code/pane/window/window.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/window/window.text', { responseType: 'text' }).subscribe(data => {
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
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }

  toggleBasicWindow(data: any) {
    if (data == 'material') {
      this.showBasicWindowMaterial = !this.showBasicWindowMaterial;
    }
    else if (data == 'nonmaterial') {
      this.showBasicWindowNonMaterial = !this.showBasicWindowNonMaterial;

    }
    else {
      this.showBasicWindowNonMateialToolbar = !this.showBasicWindowNonMateialToolbar;
    }
  }
  toggleMaxWindow(data: any) {
    if (data == 'material') {
      this.showMaxWindowMaterial = !this.showMaxWindowMaterial;
    }
    else {
      this.showMaxWindowNonMaterial = !this.showMaxWindowNonMaterial;
    }
  }


  toggleClosable(data: any) {
    if (data == 'material') {
      this.showClosableMaterial = !this.showClosableMaterial;
    }
    else {
      this.showClosableNonMaterial = !this.showClosableNonMaterial;
    }
  }


}
