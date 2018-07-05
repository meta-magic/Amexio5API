/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'date-picker-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Date Time Picker 
      </amexio-header>
      <amexio-body>
        <p>This component is flexible for both Date and time picker with all required configurations in Style.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-card [header]="true" [footer]="true" [footer-align]="'center'">
                  <amexio-header>
                    Inline Date Picker with min,max and disabled date
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                       <!-- ---1--- -->
                       <amexio-date-time-picker
                       [inline-datepicker]="true"
                         [field-label]="'Date Of Birth'"
                         [time-picker]="false"
                         [date-picker]="true"
                         [min-date]="'22-Mar-2016'" 
                         [max-date]="'22-Feb-2019'"
                         [disabled-date]="disabledDate"
                         [(ngModel)]="currentDate1">
                       </amexio-date-time-picker>
     




                      </amexio-column>
                    </amexio-row>
                    
                  </amexio-body>
                  <amexio-action>
                     {{currentDate1}} 
                  </amexio-action>
                </amexio-card>
               
              </amexio-column>
              <amexio-column [size]="6">
              <!-- -2- -->
                <amexio-card [header]="true" [footer]="true" [footer-align]="'center'">
                  <amexio-header>
                     Time Picker 
                  </amexio-header>
                  <amexio-body>
                    <amexio-row>
                      <amexio-column [size]="12">
                        <amexio-date-time-picker
                          [field-label]="'Time Of Birth'"
                          [time-picker]="true"
                          [date-picker]="false"
                          [min-date]="'Thu Jul 25 2017 00:00:00 GMT+0530 (IST)'"
                          [ngModel]="time"
                          (change)="onChangeTime($event)">
                        </amexio-date-time-picker>
                      </amexio-column>
                    </amexio-row>
                  </amexio-body>
                  <amexio-action>
                     {{time}} 
                  </amexio-action>
                </amexio-card>
               
              </amexio-column>

            </amexio-row>
            <amexio-row>
            <amexio-column [size]="'6'">
         <amexio-card [header]="true" [footer]="true" [footer-align]="'center'">
            <amexio-header>
            Date Picker with min,max date
            </amexio-header>
            <amexio-body>
              <amexio-row>
                <amexio-column [size]="12">
                 <!-- --3-- -->
                  
                 <amexio-date-time-picker
                    [field-label]="'Date Of Birth'"
                   [time-picker]="false"
                   [date-picker]="true"
                   [min-date]="'22-Mar-2016'" 
                   [max-date]="'22-Feb-2019'"
                   [(ngModel)]="currentDate">
                 </amexio-date-time-picker>




                </amexio-column>
              </amexio-row>
              
            </amexio-body>
            <amexio-action>
               {{currentDate}} 
            </amexio-action>
          </amexio-card>
            </amexio-column>
            <!-- ------4---------- -->
            <amexio-column [size]="'6'">
            <amexio-card [header]="true" [footer]="true" [footer-align]="'center'">
            <amexio-header>
               Date Picker with month dropdown and disabled date
            </amexio-header>
            <amexio-body>
              <amexio-row>
                <amexio-column [size]="12">
              
                <amexio-date-time-picker
                [dropdown-datepicker]="true"
                  [field-label]="'Date Of Birth'"
                  [time-picker]="false"
                  [date-picker]="true" 
                  [disabled-date]="disabledDate"
                  [(ngModel)]="currentDate2">
                </amexio-date-time-picker>
                </amexio-column>
              </amexio-row>
              
            </amexio-body>
            <amexio-action>
               {{currentDate2}} 
            </amexio-action>
          </amexio-card>
            </amexio-column>
            </amexio-row>


            </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-date-time-picker>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/datepicker.json'"
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
                             [http-url]="'assets/apireference/forms/datepicker.json'" [data-reader]="'events'"
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
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
                      <p align="center">Amexio Sandbox</p>
<iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-datepicker?ctl=1&embed=1&file=app/forms/datepicker/datepicker.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
    <!--<amexio-notification [data]="copyMsgArray"></amexio-notification>-->

  `
})
export class DateTimePickerDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  currentDate: any;
  currentDate1: any;
  currentDate2: any;

  time: any;
  disabledDate: any[];
  date = new Date("March 21, 2018 01:15:00");

  onChangeTime(data: any) {
    this.time = data;
  }

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.disabledDate = [
      {
        "from": "13-Jul-2018",
        "to": "15-Jul-2018"
      },
      {
        "from": "20-Jul-2018",
        "to": "23-Jul-2018"
      },
      {
        "from": "15-Jun-2018",
        "to": "19-Jun-2018"
      },
      {
        "from": "27-Jun-2018",
        "to": "29-Jun-2018"
      },
      {
        "from": "23-Aug-2018",
        "to": "28-Aug-2018"
      },
      {
        "from": "17-Aug-2018",
        "to": "19-Aug-2018"
      },
      {
        "from": "19-Sep-2018",
        "to": "21-Sep-2018"
      },
      {
        "from": "25-Sep-2018",
        "to": "28-Sep-2018"
      } 
    ];
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/datepicker/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/datepicker/form.text', { responseType: 'text' }).subscribe(data => {
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
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }
}


