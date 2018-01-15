/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'radiogroup-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Radio Group Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Radio Group input component has been created to render N numbers of radio-button based on data-set configured. 
          Data-set can be configured using HTTP call OR Define fix number of radio-button.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card enableHeader="true">
                  <amexio-header>
                    <h4>Horizontal Radio Group</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-radio-group [fieldLabel]="'Horizontal Radio Group'" name ="gender"
                                        [dataReader]="'response.data'"
                                        [displayField]="'gender'"
                                        [valueField]="'genderId'"
                                        [horizontal]="true"
                                        [data]="radioGroupData"
                                        (selectedValue)="setSelectedGender($event)">
                    </amexio-radio-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true">
                  <amexio-header>
                    <h4>Vertical Radio Group With Http Url</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-radio-group [fieldLabel]="'Vertical RadioGroup'" name ="gender"
                                        [dataReader]="'data'"
                                        [displayField]="'gender'"
                                        [valueField]="'genderId'"
                                        [httpMethod]="'get'"
                                        [httpUrl]="'assets/data/componentdata/radiogroup.json'"
                                        (selectedValue)="setSelectedGender($event)">
                    </amexio-radio-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>

          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/radiogroup.json'"
                             [dataReader]="'properties'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'type'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'default'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [dataIndex]="'description'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/radiogroup.json'" [dataReader]="'events'"
                             [filtering]="false">
              <amexio-data-table-column [dataIndex]="'name'" [dataType]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
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
    <!--<amexio-notification [messageData]="copyMsgArray"></amexio-notification>-->

  `
})
export class RadioGroupDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  radioGroupData: any;
  //selected Checkbox event
  setSelectedGender(data:any){
  //make some operation here
  }
  constructor(private http: Http) {
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

    //HTML FILE
    this.http.get('assets/data/code/forms/radiogroup/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/radiogroup/form.ts').subscribe(data => {
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


