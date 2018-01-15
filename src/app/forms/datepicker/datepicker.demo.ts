/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'datepicker-demo', template: `
    <amexio-card enableHeader="true">
      <amexio-header>
        <h2>Date Time Picker Component</h2>
      </amexio-header>
      <amexio-body>
        <p>This component flexible both Date and time picker with all required configurations in Style.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true" [enableFooter]="true" [footeralign]="'center'">
                  <amexio-header>
                    <h4>Date Picker</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-date-time-picker
                          [fieldLabel]="'Date Of Birth'"
                          [timepicker]="false"
                          [datepicker]="true"
                          [(ngModel)]="currentDate">
                        </amexio-date-time-picker>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                  <amexio-action>
                    <h4>{{currentDate}}</h4>
                  </amexio-action>
                </amexio-card>
               
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-card [enableHeader]="true" [enableFooter]="true" [footeralign]="'center'">
                  <amexio-header>
                    <h4>Time Picker</h4>
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-date-time-picker
                          [fieldLabel]="'Time Of Birth'"
                          [timepicker]="true"
                          [datepicker]="false"
                          [ngModel]="time"
                          (change)="onChangeTime($event)">
                        </amexio-date-time-picker>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                  <amexio-action>
                    <h4>{{time}}</h4>
                  </amexio-action>
                </amexio-card>
               
              </amexio-column>
            </amexio-row>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties" [columnToggle]="false"
                             [httpMethod]="'get'"
                             [httpUrl]="'assets/apireference/forms/datepicker.json'"
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
                             [httpUrl]="'assets/apireference/forms/datepicker.json'" [dataReader]="'events'"
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
export class DateTimePickerDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  currentDate: any;
  time: any;

  onChangeTime(data: any) {
    debugger;
    this.time=data;
  }

  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/datepicker/form.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/datepicker/form.ts').subscribe(data => {
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


