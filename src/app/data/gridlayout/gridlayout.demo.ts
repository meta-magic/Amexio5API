/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'gridlayout-demo', template: `
    <amexio-card header="true">
      <amexio-header>
      heading
      </amexio-header>
      <amexio-body>
        <p>Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection,Filtering(enable only for string and number type data) user define template for rendering for column header and column data, displaying summation of numeric column.</p>
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
                  <amexio-grid-item style="border: 1px solid red; " [name]="'gheader'">Header</amexio-grid-item>
                  <amexio-grid-item style="border: 1px solid blue" [name]="'gmenu'">Menu</amexio-grid-item>
                  <amexio-grid-item style="border: 1px solid green" [name]="'gmain'">Main </amexio-grid-item>
                  <amexio-grid-item style="border: 1px solid yellow" [name]="'gright'">Right</amexio-grid-item>
                  <amexio-grid-item style="border: 1px solid orange" [name]="'gfooter'">Footer</amexio-grid-item>
              </amexio-grid-component>
                  </amexio-body>
                </amexio-card>
                <amexio-card [header]="true">
                  <amexio-header>
                     Grid Layout with Components
                  </amexio-header>
                  <amexio-body>
                  <amexio-grid-component [data]="data1">
                  <amexio-grid-item style="border: 1px solid red; " [name]="'gheader'">
               
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
                                (onSelection)="setSelectedGender($event)">
                          </amexio-radio-group>
                  </amexio-column>
                  </amexio-row>
                  </amexio-body>
                </amexio-card>
                  
                  </amexio-grid-item>
                  <amexio-grid-item style="border: 1px solid blue" [name]="'gmenu'">
                  <amexio-listbox [enable-checkbox]="true"
                  [height]="400"
                  [header]="'Contacts'"
                  [search-placeholder]="'Search Contacts'"
                  [data]="localData"
                  [filter]="true"
                  [data-reader]="'response.data'"
                  [display-field]="'name_official'"
                  (selectedRows)="getSelectedData($event)">
                  </amexio-listbox>
               
                </amexio-grid-item>
                <amexio-grid-item style="border: 1px solid green" [name]="'gmain'">
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
                                                (onSelection)="selectedCheckboxgroup($event)"
                                                [data]="checkboxGroupdata">
                        </amexio-checkbox-group>
                        </amexio-column>
                      </amexio-row>
                      </amexio-body>
                      </amexio-card>
                </amexio-grid-item>
                <amexio-grid-item style="border: 1px solid orange" [name]="'gfooter'">
                
                        <amexio-card>
                          <amexio-body>
                              <amexio-row>
                                <amexio-column size="3">
                                <amexio-button [label]="'Save'" 
                                [type]="'green'" 
                                [tooltip]="'Green Button'">
                                 </amexio-button>

                                </amexio-column>
                                <amexio-column size="3">
                                <amexio-button [label]="'Delete'" 
                                [type]="'red'" 
                                [tooltip]="'Red Button'">
                                 </amexio-button>

                                </amexio-column>
                              </amexio-row>

                          </amexio-body>
                        </amexio-card>
          
              </amexio-grid-item>
              </amexio-grid-component>
                  </amexio-body>
                </amexio-card>
                <amexio-card [header]="true">
                <amexio-header>
                   Grid Layout 
                </amexio-header>
                <amexio-body>
                <amexio-grid-component [data]="data2">
                <amexio-grid-item style="border: 1px solid red; " [name]="'gheader'">Header</amexio-grid-item>
                <amexio-grid-item style="border: 1px solid blue" [name]="'gmenu'">Menu</amexio-grid-item>
                <amexio-grid-item style="border: 1px solid green" [name]="'gmain'">Main </amexio-grid-item>
                <amexio-grid-item style="border: 1px solid yellow" [name]="'gright'">Right</amexio-grid-item>
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
                <ng-template #amexioBodyTmpl let-column let-row="row">
                  <ng-container *ngIf="row.deprecated">
                    <div style="text-decoration: line-through red;">{{row.name}}</div>
                  </ng-container>
                  <ng-container *ngIf="!row.deprecated">
                    {{row.name}}
                  </ng-container>
                </ng-template>
              </amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-filter-grid?embed=1&file=app/grid/filtergrid/filtergrid.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
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
        ["gmenu", "gfooter", "gfooter", "gfooter", "gfooter", "gfooter"]
      ];
      this.data2 = [
        ["gmenu", "gmenu", "gheader", "gheader", "gright", "gright"],
        ["gmenu", "gmenu", "gmain", "gmain", "gright", "gright"],
        ["gmenu", "gmenu", "gmain", "gmain", "gright", "gright"]
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
              "name": "Sharad Jadhav",
              "name_official": "Sharad Jadhav",
              "profile": "ahutosh.jpg",
              "email" : "XYZ@metamagic.in"
            }
          ]
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
    this.http.get('assets/data/code/data/filter/filter.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/filter/filter.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/datagridgroupby.json',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSource = responseTs;
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
