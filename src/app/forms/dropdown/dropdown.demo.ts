/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'dropdownbasic', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Basic Dropdown Component</h2>
      </amexio-header>
      <amexio-body>
        <p>Drop-Down component has been created to render N numbers of drop-down items based on data-set configured.
          Data-set can be configured using HTTP call OR Define fix number of dropdown-items. 
          User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card enableHeader="true">
                  <amexio-header>
                    <h4>Dropdown Component</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="12">
                        <amexio-dropdown [(ngModel)]="sportName"
                                         [placeholder]="'Choose'"
                                         name="sportName"
                                         [dataReader]="'data'"
                                         [fieldLabel]="'Choose Sport'"
                                         [httpUrl]="'assets/data/componentdata/sports.json'"
                                         [httpMethod]="'get'"
                                         [displayField]="'sportName'"
                                         [valueField]="'code'"
                                         (onItemClick)="getSingleVal($event)">
                        </amexio-dropdown>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card>
                  <amexio-body>
                  <ng-container *ngIf="sportName">
                    {{sportName}}
                  </ng-container>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/dropdown.json'"
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
                             [httpUrl]="'assets/apireference/forms/dropdown.json'" [dataReader]="'events'"
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
export class DropDownDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource:string;
  copyMsgArray: any[];
  dropDownDatadata: any;
  sportName:string;
  //selected Checkbox event
  getSingleVal(data:any){
    this.dropDownDatadata=data;
  }
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData:any;
    //HTML FILE
    this.http.get('assets/data/code/forms/dropdown/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/dropdown/form.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //TS FILE
    this.http.get('assets/data/componentdata/sports.json').subscribe(data => {
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


