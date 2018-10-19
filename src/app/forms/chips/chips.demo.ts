/**
 * Created by rashmi on 19/10/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'chips-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Chips
      </amexio-header>
      <amexio-body>
        <p>Chips allow users to enter information, make selections, filter content, or trigger actions. Chips appear dynamically as a group of multiple interactive elements.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>

              <amexio-column [size]="6">
                <amexio-card [header]="true">
                  <amexio-header>
                    Vertical Checkbox With Http Url
                  </amexio-header>
                  <amexio-body>
                    <amexio-checkbox-group [field-label]="'Vertical Checkbox'" name="language"
                                           [data-reader]="'data'"
                                           [display-field]="'language'"
                                           [value-field]="'checked'"
                                           [http-method]="'get'"
                                           [http-url]="'assets/data/componentdata/checkgroup.json'">
                    </amexio-checkbox-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                     Horizontal Checkbox
                  </amexio-header>
                  <amexio-body>
                    <amexio-checkbox-group [field-label]="'Horizontal Checkbox'" name="language"
                                           [data-reader]="'response.data'"
                                           [display-field]="'language'"
                                           [horizontal]="true"
                                           [value-field]="'checked'"
                                           (onSelection)="selectedCheckboxgroup($event)"
                                           [data]="checkboxGroupdata">
                    </amexio-checkbox-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>

            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                    Horizontal Checkbox with disabled single item.
                  </amexio-header>
                  <amexio-body>
                    <amexio-checkbox-group [field-label]="'Horizontal Checkbox'" name="language"
                                           [data-reader]="'response.data'"
                                            [display-field]="'language'"
                                           [horizontal]="true"
                                           [value-field]="'checked'"
                                           [data]="checkboxGroupdatadisabled">
                    </amexio-checkbox-group>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column size="6">
              <amexio-card header="true">
                <amexio-header>
                  Horizontal Checkbox with disabled all item.
                </amexio-header>
                <amexio-body>
                  <amexio-checkbox-group [field-label]="'Horizontal Checkbox with disable'" name="language"
                                         [data-reader]="'response.data'"
                                         [display-field]="'language'"
                                         [horizontal]="true"
                                         name="disabledcheckbox"
                                         [disabled]="true"
                                         [value-field]="'checked'"
                                         [data]="checkboxGroupdatadisabledallitem">
                  </amexio-checkbox-group>
                </amexio-body>
              </amexio-card>
            </amexio-column>
            </amexio-row>

          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-chips>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/chips.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="45" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/chips.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
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
           Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class ChipsDemo {
    htmlCode: string;
    typeScriptCode: string;
    dataSource: string;
    copyMsgArray: any[];
    checkboxGroupdata: any;
    checkboxGroupdatadisabled: any;
    checkboxGroupdatadisabledallitem: any;
    //selected Checkbox event
    selectedCheckboxgroup(data: any) {
        //make some operation here
    }
    constructor(private http: HttpClient) {
        this.checkboxGroupdata = {
            response: {
                data: [{
                    language: 'Angular 2', checked: false, disabled: false
                }, {
                    language: 'JAVA', checked: true, disabled: false
                }, {
                    language: 'C++', checked: false, disabled: false
                }]
            }
        };
        this.checkboxGroupdatadisabled = {
            response: {
                data: [{
                    language: 'Angular 2', checked: false, disabled: false
                }, {
                    language: 'JAVA', checked: true, disabled: true
                }, {
                    language: 'C++', checked: false, disabled: false
                }]
            }
        };
        this.checkboxGroupdatadisabledallitem = {
            response: {
                data: [{
                    language: 'Angular 2', checked: false
                }, {
                    language: 'JAVA', checked: true
                }, {
                    language: 'C++', checked: false
                }]
            }
        };
        this.getHtmlAndTypeScriptCode();
    }

    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
        let responseHtml: any;
        let responseTs: any;
        let responseData: any;
        //HTML FILE
        this.http.get('assets/data/code/forms/chips/form.html', { responseType: 'text' }).subscribe(data => {
            responseHtml = data;
        }, error => {
        }, () => {
            this.htmlCode = responseHtml;
        });

        //TS FILE
        this.http.get('assets/data/code/forms/chips/form.text', { responseType: 'text' }).subscribe(data => {
            responseTs = data;
        }, error => {
        }, () => {
            this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/componentdata/chips.json', { responseType: 'text' }).subscribe(data => {
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
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        } else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    }
}


