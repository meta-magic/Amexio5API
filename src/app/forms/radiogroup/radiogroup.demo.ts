/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'radiogroup-demo', template: `
    <amexio-card header="true">
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
                <amexio-card header="true">
                  <amexio-header>
                    <h4>Horizontal Radio Group</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-radio-group [fieldlabel]="'Horizontal Radio Group'" name ="gender"
                                        [datareader]="'response.data'"
                                        [displayfield]="'gender'"
                                        [valuefield]="'genderId'"
                                        [horizontal]="true"
                                        [data]="radioGroupData"
                                        (onSelection)="setSelectedGender($event)">
                    </amexio-radio-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    <h4>Vertical Radio Group With Http Url</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-radio-group [fieldlabel]="'Vertical RadioGroup'" name ="gender"
                                        [datareader]="'data'"
                                        [displayfield]="'gender'"
                                        [valuefield]="'genderId'"
                                        [httpmethod]="'get'"
                                        [httpurl]="'assets/data/componentdata/radiogroup.json'"
                                        (onSelection)="setSelectedGender($event)">
                    </amexio-radio-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>

          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [enablecolumnfiter]="false"
                             [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/radiogroup.json'"
                             [datareader]="'properties'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [width]="15" [dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'type'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [dataindex]="'default'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [httpmethod]="'get'"
                             [httpurl]="'assets/apireference/forms/radiogroup.json'" [datareader]="'events'"
                             [enabledatafilter]="false">
              <amexio-data-table-column [width]="20"[dataindex]="'name'" [datatype]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [dataindex]="'description'" [datatype]="'string'" [hidden]="false"
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
              <amexio-tab title="Data Source">
                <ng-container *ngIf="dataSource">
                  <prism-block [code]="dataSource" [language]="'json'"></prism-block>
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
  dataSource:string;
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
    let responseData:any;
    //HTML FILE
    this.http.get('assets/data/code/forms/radiogroup/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/radiogroup/form.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
  //JSON FILE
    this.http.get('assets/data/componentdata/radiogroup.json').subscribe(data => {
      responseData = data.text();
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


