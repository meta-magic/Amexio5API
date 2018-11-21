/**
 * Created by anaghak07 on 16/4/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'form-demo',
  template: `
      <amexio-card header="true">
      <amexio-header>
         Form
      </amexio-header>
      <amexio-body>
        <p> Amexio Form can be used basically for validation purposes
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
          <h2>Demo: Form </h2>
          <amexio-form form-name="validateForm" header="true" show-error="true">
          <amexio-form-header style="width:100%">
             Form
          </amexio-form-header>
          <amexio-form-body>
             <amexio-row>
                <amexio-column [size]="6">
                   <amexio-text-input [min-length]="3"
                   [(ngModel)]="userRegistration.firstName"
                   [max-length]="5" [allow-blank]="false"
                   field-label="First Name" name="Firstname"
                   place-holder="Enter first name"
                   icon-feedback="true">
                   </amexio-text-input>
                </amexio-column>
                <amexio-column [size]="6">
                   <amexio-text-input field-label="Last Name" name="lastName"
                   [(ngModel)]="userRegistration.lastName" place-holder="Enter last name(not mandatory)"
                   allow-blank="true" error-msg="Please enter last name"
                   [min-length]="3" min-error-msg="Minimum 3 char required"
                   [max-length]="10" max-error-msg="Maximum 10 char allowed"
                   icon-feedback="true">
                   </amexio-text-input>
                </amexio-column>
             </amexio-row>
             <amexio-textarea-input [disabled]="false" [field-label]="'Address'" name="Address"
             [(ngModel)]="userRegistration.address" [place-holder]="'Enter address'"
             [error-msg]="'Please enter address'" [icon-feedback]="true" [rows]="'1'"
             [columns]="'2'" [allow-blank]="false" [enable-popover]="true"></amexio-textarea-input>
             <amexio-row>
                <amexio-column [size]="6">
                   <amexio-radio-group
                   [name]="'genderList'"
                   [field-label]="'Gender'"
                   [horizontal]="true"
                   [allow-blank]="false"
                   [(ngModel)]="userRegistration.gender"
                   [data-reader]="'response.data'"
                   [display-field]="'gender'"
                   [value-field]="'genderId'"
                   [data]="radioGroupData">
                   </amexio-radio-group>
                </amexio-column>
                <amexio-column [size]="6">
                   <amexio-checkbox-group
                   [field-label]="'Hobbies'"
                   name="hobbies"
                   [(ngModel)]="userRegistration.hobbies"
                   [horizontal]="true"
                   [required] = "true"
                   [disabled]= "false"
                   [data-reader]="'response.data'"
                   [display-field]="'hobbieName'"
                   [value-field]="'checked'"
                   [data]="checkboxGroupdata">
                   </amexio-checkbox-group>
                </amexio-column>
             </amexio-row>
             <amexio-row>
                <amexio-column [size]="6">
                   <amexio-tag-input [data-reader]="'response.data'"
                   [http-url]="'assets/data/componentdata/countryy.json'"
                   [has-label]="true" [http-method]="'get'"
                   [key]="'countryName'"
                   [allow-blank]="false"
                   [display-field]="'countryName'"
                   [field-label]="'Having visa'">
                   </amexio-tag-input>
                </amexio-column>
                <amexio-column [size]="6">
                   <amexio-dropdown [place-holder]="'Choose City'"
                   name="city"
                   [(ngModel)]="userRegistration.city"
                   [allow-blank]="false"
                   [data-reader]="'response.data'"
                   [field-label]="'City'"
                   [http-url]="'assets/data/componentdata/cities.json'"
                   [http-method]="'get'" [search]="'true'"
                   [display-field]="'cityName'"
                   [value-field]="'cityName'">
                   </amexio-dropdown>
                </amexio-column>
             </amexio-row>
             <amexio-row>
                <amexio-column size="6">
                   <amexio-number-input
                   [name]="'age'"
                   [(ngModel)]="userRegistration.age"
                   [enable-popover]="true"
                   [field-label]="'Age'" [place-holder]="'Enter age'"
                   [allow-blank]="false"
                   [error-msg]="'Please enter age'"
                   [min-value]="18"
                   [min-error-msg]="'age can not be less than 18'"
                   [max-value]="100"
                   [max-error-msg]="'age can not be greater than 100'"
                   [icon-feedback]="true">
                   </amexio-number-input>
                </amexio-column>
                <amexio-column [size]="6">
                   <amexio-date-time-picker
                   [(ngModel)]="userRegistration.dateOfBirth"
                   name="dateOfBirth"
                   [field-label]="'Date Of Birth'"
                   [time-picker]="false"
                   [date-picker]="true"
                   [required]="true" >
                   </amexio-date-time-picker>
                </amexio-column>
             </amexio-row>
             <amexio-row>
                <amexio-column [size]="6">
                   <amexio-email-input [field-label]="'Email Id'"
                   name="email"
                   [(ngModel)]="userRegistration.email"
                   [place-holder]="'Enter Email Id'"
                   [allow-blank]="false"
                   [error-msg]="'Please Enter Email Id'"
                   [enable-popover]="true"
                   [icon-feedback]="true">
                   </amexio-email-input>
                </amexio-column>
                <amexio-column [size]="6">
                   <amexio-password-input [enable-popover]="true"
                   [field-label]="'Password Input'"
                   name="password"
                   [(ngModel)]="userRegistration.password"
                   [place-holder]="'Enter Password'"
                   [allow-blank]="false"
                   [error-msg]="'Please enter password'"
                   [min-length]="6" [min-error-msg]="'Minimum 6 char required'"
                   [max-length]="32" [max-error-msg]="'Maximum 32 char allowed'"
                   [icon-feedback]="true">
                   </amexio-password-input>
                </amexio-column>

             </amexio-row>
             <amexio-checkbox [field-label]="'Agree'" name="agree" [required]="true" [(ngModel)]="userRegistration.agree">
             </amexio-checkbox>
          </amexio-form-body>
          <amexio-form-action>
             <amexio-button [disabled]="false" [label]="'OK'" [type]="'primary'" [tooltip]="'Save'" [form-bind]="'validateForm'">
             </amexio-button>
             <amexio-button [label]="'Cancel'"
             [type]="'theme-backgroundcolor'"
             [tooltip]="'Cancel'">
             </amexio-button>
          </amexio-form-action>
       </amexio-form>
  <b>Model Data </b>:
  {{userRegistration|json}}
  <h2>Demo:Form with Toolbar</h2>
  <amexio-form form-name="validateForm" header="true" show-error="true">
  <amexio-form-header style="width:100%">
     <amexio-toolbar>
        <amexio-toolbar-item position-left >
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
  </amexio-form-header>
  <amexio-form-body>
     <amexio-row>
        <amexio-column [size]="6">
           <amexio-text-input [min-length]="3"
           [(ngModel)]="firstName"
           [max-length]="5" [allow-blank]="false"
           field-label="First Name" name="Firstname"
           place-holder="Enter first name"
           icon-feedback="true">
           </amexio-text-input>
        </amexio-column>
        <amexio-column [size]="6">
           <amexio-text-input field-label="Last Name" name="lastName"
           [(ngModel)]="lastName" place-holder="Enter last name(not mandatory)"
           allow-blank="true" error-msg="Please enter last name"
           [min-length]="3" min-error-msg="Minimum 3 char required"
           [max-length]="10" max-error-msg="Maximum 10 char allowed"
           icon-feedback="true">
           </amexio-text-input>
        </amexio-column>

     </amexio-row>
  </amexio-form-body>
  <amexio-form-action>
     <amexio-button  [label]="'Save'" [type]="'primary'" [tooltip]="'Save'" [form-bind]="'validateForm'">
     </amexio-button>
     <amexio-button [label]="'Cancel'"
     [type]="'theme-backgroundcolor'"
     [tooltip]="'Cancel'">
     </amexio-button>
  </amexio-form-action>
</amexio-form>
          </amexio-tab>

          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-form>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/panes/form.component.json'"
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
             <br/>



            <amexio-datagrid title="Events <amexio-form>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/panes/form.component.json'"
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
            </div>

          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})

export class FormDemoComponent{
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  refreshDialogue: boolean;
  radioGroupData : any;
  checkboxGroupdata : any;
  currentDate : Date = new Date();
  payment :any;
  userRegistration:UserRegistration;
  firstName:string;
  lastName:string;
  constructor(private http: HttpClient) {
    this.userRegistration = new UserRegistration();
   this.checkboxGroupdata = {
      response:{
        data:[{
          hobbieName:'Learning',
          checked: false,
          disabled : false
        },{
          hobbieName:'Shopping',
          checked: false,
          disabled : false
        },{
          hobbieName:'Fishing',
          checked: false,
          disabled : false
        }
        ]}};
        this.payment=[
          {"label": "Open With", "icon": "fa fa-arrows-alt "},
          {"label": "Make a Copy", "icon": "fa fa-files-o","separator":"true"},
          {"label": "Refresh", "icon": "fa fa-refresh"},
          {"label": "Add Star", "icon": "fa fa-star"},
          {"label": "download", "icon": "fa fa-download"},
          {"label": "bookmark", "icon": "fa fa-bookmark"}
        ];

    this.radioGroupData = {
      response:{
        data:[{
          gender:'Male',
          genderId:'male'
        },{
          gender:'Female',
          genderId:'female',
        },
        ]
      }
    };
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
    this.http.get('assets/data/code/pane/form/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/form/form.text',{responseType: 'text'}).subscribe(data => {
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

  refreshData() {
    this.refreshDialogue = !this.refreshDialogue;
  }
}

export class UserRegistration {
  firstName:string;
  lastName:string;
  agree:boolean;
  address:string;
  gender:string;
  hobbies:any[]=[];
  city:string;
  age:number;
  dateOfBirth:any;
  email:string;
  password:string;
}
