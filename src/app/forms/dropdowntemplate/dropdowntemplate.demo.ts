/**
 * Created by rashmi on 5/6/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dropdowntemplate', template: `
    <amexio-card header="true">
      <amexio-header>
         Dropdown with Template 
      </amexio-header>
      <amexio-body>
        <p>Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template.
          Data-set can be configured using HTTP call OR Define fix number of dropdown-items.
          User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi
          select.
        </p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="6">
                <amexio-card header="true">
                  <amexio-header>
                     Dropdown with Template 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column size="12">
                      <amexio-dropdown [(ngModel)]="id"
                      [place-holder]="'Choose'"
                      name="id"
                      [data-reader]="'data'"
                      [field-label]="'Choose Country'"
                      [http-url]="'assets/data/componentdata/gridtemplate.json'"
                      [http-method]="'get'"
                      [search]="true"
                      [display-field]="'name'"
                      [value-field]="'id'"
                      (onSingleSelect)="getRowData($event)">
                      <ng-template #amexioBodyTmpl let-column let-row="row">
                      <amexio-label>
                        <amexio-image [width]="100" [path]="'http://amexio.org/showcaseapp/v3/assets/images/flags/flags/'+row.flag_32"></amexio-image>
                      </amexio-label>
                      <amexio-label>{{row.name}}</amexio-label>
                      <amexio-label>( {{row.name_official}} )</amexio-label>
                      </ng-template>
                      
                      </amexio-dropdown>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card header="true">
                  <amexio-header>
                    Selected Record Data
                  </amexio-header>
                  <amexio-body>
                  {{clickedRowData|json}}
                  </amexio-body>
                </amexio-card>
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-dropdown>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/dropdown.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
            <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="45" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/dropdown.json'" [data-reader]="'events'"
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
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-dropdown-multiselect?embed=1&file=app/forms/dropdownmulti/dropdownmulti.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class DropDownTemplateDemo {
  htmlCode: string;
  clickedRowData: any;
  typeScriptCode: string;
  dataSource: string;
  id: string;
  copyMsgArray: any[];

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData: any;
    //HTML FILE
    this.http.get('assets/data/code/forms/dropdowntemplate/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/dropdowntemplate/form.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //TS FILE
    this.http.get('assets/data/componentdata/gridtemplate.json',{responseType: 'text'}).subscribe(data => {
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

  getRowData(data: any) {
    this.clickedRowData = data;
  }
}


