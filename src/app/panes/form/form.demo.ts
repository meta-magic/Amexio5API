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

            <amexio-form form-name="validateForm" header="true" show-error="true">
               <amexio-form-header>
                  Validation Form
               </amexio-form-header>
            <amexio-form-body>
              <amexio-row>
                <amexio-column [size]="6">
                    <amexio-text-input [min-length]="3" [max-length]="5" [allow-blank]="false" field-label="Firstname" name="name1" place-holder="Enter firstname" icon-feedback="true">
                    </amexio-text-input>
                </amexio-column>
                <amexio-column [size]="6">
                    <amexio-text-input enable-popover="true" field-label="Lastname" name="name" place-holder="Enter lastname" allow-blank="false" error-msg="Please enter last name" min-length="3" min-error-msg="Minimum 3 char required" max-length="10" max-error-msg="Maximum 10 char allowed" icon-feedback="true">
                    </amexio-text-input>
                </amexio-column>
              </amexio-row>

              <amexio-textarea-input [disabled]="false" [field-label]="'Address'" name="Address" [place-holder]="'Enter address'" [error-msg]="'Please enter address'" [icon-feedback]="true" [rows]="'1'" [columns]="'2'" [allow-blank]="false" [enable-popover]="true"></amexio-textarea-input>
              <amexio-row>
                  <amexio-column [size]="4">
                      <amexio-tag-input [data-reader]="'response.data'" [http-url]="'assets/data/componentdata/countryy.json'" [has-label]="true" [http-method]="'get'" [key]="'countryName'" [allow-blank]="false" [display-field]="'countryName'" [field-label]="'Having visa'">
                      </amexio-tag-input>
                  </amexio-column>
                  <amexio-column [size]="4">
                      <amexio-dropdown [place-holder]="'Choose City'" name="city" [allow-blank]="false" [data-reader]="'response.data'" [field-label]="'City'" [http-url]="'assets/data/componentdata/cities.json'" [http-method]="'get'" [search]="'true'" [display-field]="'cityName'" [value-field]="'cityName'">
                      </amexio-dropdown>
                  </amexio-column>
                <amexio-column [size]="4">
                    <amexio-radio-group name="name" [field-label]="'Gender'" [horizontal]="true" [allow-blank]="false" [data-reader]="'response.data'" [display-field]="'gender'" [value-field]="'genderId'" [data]="radioGroupData">
                    </amexio-radio-group>
                </amexio-column>
              </amexio-row>
              <amexio-row>
                <amexio-column size="6">
                    <amexio-number-input [enable-popover]="true" [field-label]="'Age'" [place-holder]="'Enter age'" [allow-blank]="false" [error-msg]="'Please enter age'" [min-value]="1" [min-error-msg]="'age can not be less than 1'" [max-value]="100" [max-error-msg]="'age can not be greater than 100'" [icon-feedback]="true">
                    </amexio-number-input>
                </amexio-column>
                <amexio-column [size]="6">
                    <amexio-date-time-picker [field-label]="'Date Of Birth'" [time-picker]="false" [date-picker]="true" [required]="true">
                    </amexio-date-time-picker>
                </amexio-column>
              </amexio-row>

              <amexio-row>
                <amexio-column [size]="6">
                    <amexio-email-input [field-label]="'Email Id'" name="email" [place-holder]="'Enter Email Id'" [allow-blank]="false" [error-msg]="'Please Enter Email Id'" [enable-popover]="true" [icon-feedback]="true">
                    </amexio-email-input>
                </amexio-column>
                <amexio-column [size]="6">
                    <amexio-password-input [enable-popover]="true" [field-label]="'Password Input'" name="password" [place-holder]="'Enter Password'" [allow-blank]="false" [error-msg]="'Please enter password'" [min-length]="6" [min-error-msg]="'Minimum 6 char required'" [max-length]="32" [max-error-msg]="'Maximum 32 char allowed'" [icon-feedback]="true">
                    </amexio-password-input>
                </amexio-column>
              </amexio-row>

              <amexio-checkbox [field-label]="'Agree'" [required]="true">
              </amexio-checkbox>
            </amexio-form-body>
              <amexio-form-action>
                <amexio-button [disabled]="true" [label]="'OK'" [type]="'primary'" [tooltip]="'Save'" [form-bind]="'validateForm'">
                </amexio-button>
                <amexio-button [label]="'Cancel'"
                                  [type]="'theme-backgroundcolor'"
                                  [tooltip]="'Cancel'">
                  </amexio-button>
                <!-- <amexio-btn-group>
                  <amexio-button [label]="'Disabled'"
                                  [type]="'theme-color'"
                                  [tooltip]="'Disabled'"
                                  [disabled]="'true'"
                                  [form-bind]="'validateForm'">
                  </amexio-button>
                  <amexio-button [label]="'Enabled'"
                                  [type]="'theme-color'"
                                  [tooltip]="'Enabled'">
                  </amexio-button>
                </amexio-btn-group> -->

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
              
            <amexio-datagrid title="Properties <amexio-form-header>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/panes/form.action.component.json'"
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
            </amexio-datagrid><br/>

            <amexio-datagrid title="Properties <amexio-form-body>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/panes/form.action.component.json'"
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
            <amexio-datagrid title="Properties <amexio-form-action>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/panes/form.action.component.json'"
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
            </amexio-datagrid><br/>



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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
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
  constructor(private http: HttpClient) {
    this.radioGroupData = {
      response:{
        data:[{
          gender:'Male',
          genderId:'male'
        },{
          gender:'Female',
          genderId:'female',
          disabled : true
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
