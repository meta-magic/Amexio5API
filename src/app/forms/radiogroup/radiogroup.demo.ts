/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'radiogroup-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Radio Group
      </amexio-header>
      <amexio-body>
        <p>Radio Group input component has been created to render N numbers of radio-button based on data-set configured.
          Data-set can be configured using HTTP call OR Define fix number of radio-button.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                     Horizontal Radio Group
                  </amexio-header>
                  <amexio-body> 
                    <amexio-radio-group [field-label]="'Horizontal Radio Group'" name ="gender"
                                        [data-reader]="'response.data'"
                                        [display-field]="'gender'"
                                        [value-field]="'genderId'"
                                        [horizontal]="true"
                                        [data]="radioGroupData"
                                        [(ngModel)]="model1"
                                        (onSelection)="setSelectedGender($event)">
                    </amexio-radio-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                     Vertical Radio Group With Http Url
                  </amexio-header>
                  <amexio-body> 
                    <amexio-radio-group [field-label]="'Vertical Radio Group'" name ="gender1"
                                        [data-reader]="'data'"
                                        [display-field]="'gender'"
                                        [value-field]="'genderId'"
                                        [http-method]="'get'"
                                        [(ngModel)]="model2"
                                        [http-url]="'assets/data/componentdata/radiogroup.json'"
                                        (onSelection)="setSelectedGender($event)">
                    </amexio-radio-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>

            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                    Horizontal Radio Group Disabled
                  </amexio-header>
                  <amexio-body> 
                    <amexio-radio-group [field-label]="'Horizontal Radio Group'" name ="gendery"
                                        [data-reader]="'data'"
                                        [display-field]="'gender'"
                                        [value-field]="'genderId'"
                                        [http-method]="'get'"
                                        horizontal="true"
                                        [(ngModel)]="model3"
                                        [http-url]="'assets/data/componentdata/radiogroup.json'"
                                        disabled="true">
                    </amexio-radio-group>
                   

                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
              <amexio-card header="true">
                <amexio-header>
                  Horizontal Radio Group single item disabled
                </amexio-header>
                <amexio-body>
              
                  <amexio-radio-group [field-label]="'Horizontal Radio Group '" name ="genderx"
                                      [data-reader]="'data'"
                                      [(ngModel)]="model4"
                                      [display-field]="'gender'"
                                      [value-field]="'genderId'"
                                      [http-method]="'get'"
                                      horizontal="true"
                                      [http-url]="'assets/data/componentdata/radiogroup_disable.json'"
                                      >
                  </amexio-radio-group>
                  <h2>Radio Group model Binding value </h2>
                  {{model4 | json}}
                </amexio-body>
              </amexio-card>
            </amexio-column>
            </amexio-row>


          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-radio-group>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/radiogroup.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/radiogroup.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
              <amexio-tab title="Data Source">
                <ng-container *ngIf="dataSource">
                  <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
           <p align="center">Amexio Sandbox</p>
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-radiogroup?embed=1&file=app/forms/radiogroup/radiogroup.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class RadioGroupDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  dataSource:string;
  radioGroupData: any;
  model1:  string = 'male';
  model2:  string = 'female';
  model3:  string = 'male';
  model4: string = 'female';

  //selected Checkbox event
  setSelectedGender(data:any){
  //make some operation here

  }
  constructor(private http: HttpClient) {
    this.radioGroupData = {
      response:{
        data:[{
          gender:'Male',
          genderId:'male'
        },{
          gender:'Female',
          genderId:'female'
        },
        ]
      }
    };
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData:any;
    //HTML FILE
    this.http.get('assets/data/code/forms/radiogroup/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/radiogroup/form.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
  //JSON FILE
    this.http.get('assets/data/code/forms/radiogroup/radiogroup.json',{responseType: 'text'}).subscribe(data => {
      responseData = data;
    }, error => {
    }, () => {
      this.dataSource = responseData;
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


