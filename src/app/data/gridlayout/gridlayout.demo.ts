/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'gridlayout-demo', template: `
    <amexio-card header="true">
      <amexio-header>
      Grid Layout
      </amexio-header>
      <amexio-body>
        <p>CSS Grid Layout introduces a two-dimensional grid system to CSS. Grids can be used to layout major page areas or small user interface elements.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Grid Layout 
                  </amexio-header>
                  <amexio-body>
                  <amexio-grid-component [data]="data">
                  <amexio-grid-item style="border: 1px dashed black; " [name]="'gheader'">Header</amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gmenu'">Menu</amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gmain'">Main </amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gright'">Right</amexio-grid-item>
                  <amexio-grid-item style="border: 1px dashed black" [name]="'gfooter'">Footer</amexio-grid-item>
              </amexio-grid-component>
                  </amexio-body>
                </amexio-card>
                <br>
                <amexio-card [header]="true">
                  <amexio-header>
                     Grid Layout with Components
                  </amexio-header>
                  <amexio-body>
                  <amexio-grid-component [data]="data1">
                  <amexio-grid-item [name]="'gheader'">
               
                  <amexio-card [header]="true">
                    <amexio-header>
                    Employee's Registration
                    </amexio-header>


                  <amexio-body>
                  <amexio-row>
                    <amexio-column size="6">
                      <amexio-text-input field-label="FirstName"
                                      name="name"
                                      icon-feedback="true">
                      </amexio-text-input>
                      </amexio-column>
                      <amexio-column size="6">
                      <amexio-text-input field-label="LastName"
                                    name="name"
                                    icon-feedback="true">
                      </amexio-text-input>
                    </amexio-column>
                  </amexio-row>
                  <amexio-row>
                  <amexio-column size="6">
                         <amexio-radio-group [field-label]="'Select Gender'"
                                  name ="gender"
                                [data-reader]="'response.data'"
                                [display-field]="'gender'"
                                [value-field]="'genderId'"
                                [horizontal]="true"
                                [data]="radioGroupData"
                                [default-value]="'male'"
                                >
                          </amexio-radio-group>
                  </amexio-column>
                  </amexio-row>
                  </amexio-body>
                </amexio-card>
                  
                  </amexio-grid-item>
                  <amexio-grid-item  [name]="'gmenu'">
                  <amexio-listbox [enable-checkbox]="true"
                  [header]="'Contacts'"
                  [search-placeholder]="'Search Contacts'"
                  [data]="localData"
                  [filter]="true"
                  [data-reader]="'response.data'"
                  [display-field]="'name_official'"
                  >
                  </amexio-listbox>
               
                </amexio-grid-item>
                <amexio-grid-item [name]="'gmain'">
                      <amexio-card>
                      <amexio-body>
                      <amexio-row>
                        <amexio-column size="6">
                        <amexio-email-input [field-label]="'Email Id'" name ="email"
                        [place-holder]="'Enter Email Id'"
                        [allow-blank]="false"
                        [error-msg] ="'Please Enter Email Id'"
                        [enable-popover]="true"
                        [icon-feedback]="true">
                        </amexio-email-input>
                        </amexio-column>
                        <amexio-column size="6">
                        <amexio-checkbox-group [field-label]="''"
                                                name="language"
                                                [data-reader]="'response.data'"
                                                [display-field]="'language'"
                                                [horizontal]="true"
                                                [value-field]="'checked'"
                                                [data]="checkboxGroupdata">
                        </amexio-checkbox-group>
                        </amexio-column>
                      </amexio-row>
                      </amexio-body>
                      </amexio-card>
                </amexio-grid-item>

                <amexio-grid-item [name]="'gfooter'">
                
                   	
<amexio-toolbar>
  <amexio-toolbar-item position-left [seperator-position]="'right'">
    <amexio-label size="medium" font-color="Black">
      Compose
    </amexio-label>
  </amexio-toolbar-item>
  <amexio-toolbar-item position-left [seperator-position]="'right'">
    <amexio-btn-group>
      <amexio-button [size]="'medium'" [label]="''" [type]="''" [tooltip]="'Archive'" [icon]="'fa fa-archive'">
      </amexio-button>
      <amexio-button [size]="'medium'" [label]="''" [type]="''" [tooltip]="'Save'" [icon]="'fa fa-exclamation-circle'">
      </amexio-button>
      <amexio-button [size]="'medium'" [label]="''" [type]="''" [tooltip]="'delete'" [icon]="'fa fa-trash-o'">
      </amexio-button>
    </amexio-btn-group>
  </amexio-toolbar-item>
  <amexio-toolbar-item position-right>
    <amexio-drop-down-menu [icon-align]="'left'" [title]="'Settings'" [padding]="'5px 10px'" [icon]="'fa fa-cog'">
      <amexio-drop-down-menu-item [separator]="true">
        <amexio-box background-color="purple" padding="true">
          <amexio-label size="small-bold">This account is managed by metamagic.in. </amexio-label>
        </amexio-box>
        <amexio-row>
          <amexio-column size="5">
            <amexio-image [height]="'89.75px'" [width]="'89.75px'" [c-class]="'image-round'" path="assets/images/profile/ketan.jpg">
            </amexio-image>
          </amexio-column>
          <amexio-column size="7">
            <amexio-label> Ketan Gote</amexio-label>
            <amexio-label> xyz@metamagic.in</amexio-label>
            <br>
            <amexio-button [label]="'My Account'" [type]="'theme-color'" [tooltip]="'My Account'">
            </amexio-button>
          </amexio-column>
        </amexio-row>
      </amexio-drop-down-menu-item>
      <amexio-drop-down-menu-item [label]="'Settings'" [icon]="'fa fa-folder'">
      </amexio-drop-down-menu-item>
      <amexio-drop-down-menu-item [label]="'Help Center'" [icon]="'fa fa-question-circle'" [separator]="true">
      </amexio-drop-down-menu-item>
      <amexio-drop-down-menu-item [label]="'Location'" [icon]="'fa fa-map-marker'">
      </amexio-drop-down-menu-item>
      <amexio-drop-down-menu-item [label]="'Sign Out'" [icon]="'fa fa-sign-out'">
      </amexio-drop-down-menu-item>
    </amexio-drop-down-menu>
  </amexio-toolbar-item>
  <amexio-toolbar-item position-left [seperator-position]="'left'">
    <amexio-btn-group>
      <amexio-button [size]="'medium'" [tooltip]="'Move to'" [icon]="'fa fa-folder'">
      </amexio-button>
      <amexio-button [size]="'medium'" [tooltip]="'Help'" [icon]="'fa fa-question'">
      </amexio-button>
    </amexio-btn-group>
  </amexio-toolbar-item>
</amexio-toolbar>
          
              </amexio-grid-item>
              </amexio-grid-component>
              
                  </amexio-body>
                </amexio-card>
                <br>
                <amexio-card [header]="true">
                <amexio-header>
                   Grid Layout 
                </amexio-header>
                <amexio-body>
                <amexio-grid-component [data]="data2">
                <amexio-grid-item [name]="'gheader'">
                <amexio-image [path]="'assets/images/soap-bubble.jpg'" ></amexio-image>

                </amexio-grid-item>
                <amexio-grid-item [name]="'gmenu'">
                <amexio-card [header]="false"
             [footer]="true"
             [footer-align]="'right'">
  <amexio-body>
    <amexio-image path="assets/images/carousel/set1/1.jpg"></amexio-image>
    <br/>
    <amexio-label size="small-bold">Let your startup grow!</amexio-label>
    <amexio-label size="small">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
    </amexio-label>
  </amexio-body>
  <amexio-action >
    <amexio-button [label]="'Button'"
                   [type]="'primary'">
    </amexio-button>
  </amexio-action>
</amexio-card>
                </amexio-grid-item>
             
                <amexio-grid-item [name]="'gright'">
                <amexio-panel [header]="false" expanded="true">
                <amexio-label>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </amexio-label>
            </amexio-panel>
                </amexio-grid-item>
            </amexio-grid-component>
                </amexio-body>
              </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-grid-component>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/gridlayout.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'">
              </amexio-data-table-column>
              <amexio-data-table-column [data-index]="'version'" [width]="20" [data-type]="'string'" [hidden]="false"
              [text]="'Version'">
</amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="45" [data-type]="'string'" [hidden]="false"
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
              <amexio-tab title="DataSource">
                <ng-container *ngIf="dataSource">
                  <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
          Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class GridLayoutDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  data:any[];
  data1:any[];
  data2:any[];
  localData :any;
  radioGroupData:any;
  checkboxGroupdata:any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.data = [
        ["gmenu", "gheader", "gheader", "gheader", "gheader", "gheader"],
        ["gmenu", "gmain", "gmain", "gmain", "gright", "gright"],
        ["gfooter", "gfooter", "gfooter", "gfooter", "gright", "gright"]
      ];
      this.data1 = [
        ["gmenu", "gheader", "gheader", "gheader", "gheader", "gheader"],
        ["gmenu", "gmain", "gmain", "gmain", "gmain", "gmain"],
        ["gmenu", "gmain", "gmain", "gmain", "gmain", "gmain"],
        ["gfooter", "gfooter", "gfooter", "gfooter", "gfooter", "gfooter"]
      ];
      this.data2 = [
        ["gmenu", "gmenu", "gheader", "gheader", "gheader", "gheader"],
        ["gmenu", "gmenu", "gheader", "gheader", "gheader", "gheader"],
        ["gmenu", "gmenu", "gright", "gright", "gright", "gright"]
      ];
      this.localData = {
        "response": {
          "success": true,
            "message": "Fetching  Data  Request Succeeded: Profile",
            "data": [
            {
              "name": "Buck Kulkarni",
              "name_official": "Buck Kulkarni",
              "profile": "buck.jpg",
              "email" : "XYZ@metamagic.in"
            },
            {
              "name": "Araf Karsh Hamid",
              "name_official": "Araf Karsh Hamid",
              "profile": "karsh.jpg",
              "email" : "XYZ@metamagic.in"
            },
            {
              "name": "ketan Gote",
              "name_official": "Ketan Gote",
              "profile": "ketan.jpg",
              "email" : "XYZ@metamagic.in"
            },
            {
              "name": "vrushabh Kelwalkar",
              "name_official": "vrushabh Kelwalkar",
              "profile": "sagar.jpg",
              "email" : "XYZ@metamagic.in"
            },
            {
              "name": "Dattaram Gawas",
              "name_official": "Dattaram Gawas",
              "profile": "dats.jpg",
              "email" : "XYZ@metamagic.in"
            },
            {
              "name": "Sagar Jadhav",
              "name_official": "Sagar Jadhav",
              "profile": "sagar.jpg",
              "email" : "XYZ@metamagic.in"
            },
            {
              "name": "Samadhan Pardeshi",
              "name_official": "Samadhan Pardeshi",
              "profile": "dats.jpg",
              "email" : "XYZ@metamagic.in"
            },
            {
              "name": "Nidhi Shah",
              "name_official": "Nidhi Shah",
              "profile": "dats.jpg",
              "email" : "XYZ@metamagic.in"
            },
            
            {
              "name": "Sharad Jadhav",
              "name_official": "Sharad Jadhav",
              "profile": "ahutosh.jpg",
              "email" : "XYZ@metamagic.in"
            }          ]
        }
      }
      this.radioGroupData = {
        response: {
          data: [{
            gender: 'Male', genderId: 'male'
          }, {
            gender: 'Female', genderId: 'female'
          },]
        }
    }
    this.checkboxGroupdata = {
      response: {
        data: [{
          language: 'Angular', checked: false
        }, 
         {
          language: 'Java', checked: false
        },{
          language: 'C++', checked: false
        }
      ]
      }
    }
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.text',{responseType: 'text'}).subscribe(data => {
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

  onRowSelect(data: any) {
    this.selectedData = data;
  }
}
