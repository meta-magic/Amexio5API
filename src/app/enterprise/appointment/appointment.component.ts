/**
 * Created by pratik on 18/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AvailableSlotsModel } from 'amexio-ng-extensions';

@Component({
  selector: 'ee-appointment', template: `
    <amexio-card header="true">
      <amexio-header>
      Appointment
      </amexio-header>
      <amexio-body>
        <p>An appointment component used to schedule appointment with available dates and time.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-card header="true">
              <amexio-header> Appointment Demo: Single Select Date </amexio-header>
              <amexio-body>
              <amexio-ee-appointment
              [height]="'200px'" [date]="date"  (onSingleSelect) = "onSingleSelect($event)"
              [start-time]="10"
               [end-time]="15" [available-slots]="availableslots">
               </amexio-ee-appointment>
              </amexio-body>
            </amexio-card>
            <amexio-card header="true">
            <amexio-header> Selected Date-Time </amexio-header>
            <amexio-body>
            <pre><code>{{singleSelectedData | json}}</code></pre>
            </amexio-body>
          </amexio-card>
          <br>
          <amexio-card header="true">
          <amexio-header> Appointment Demo: Multi Select Date </amexio-header>
          <amexio-body>
          <amexio-ee-appointment
          [height]="'200px'" [date]="date" [multi-select]="true" (onMultiSelect) = "onMultiSelect($event)"
          [start-time]="12"
           [end-time]="17" [available-slots]="multipleAvailableslots">
           </amexio-ee-appointment>
          </amexio-body>
        </amexio-card>
        <amexio-card header="true">
        <amexio-header> Selected Date-Time </amexio-header>
        <amexio-body>
        <pre><code>{{multiSelectedData | json}}</code></pre> 
        </amexio-body>
      </amexio-card>
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-ee-appointment>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/enterprise/appointment.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'version'" 
              [data-type]="'string'" [hidden]="false"[text]="'version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="40" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/enterprise/appointment.json'"
                             [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'version'" 
              [data-type]="'string'" [hidden]="false"[text]="'version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
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
            Work in Progress
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})

export class EEAppointmentDemoComponent implements OnInit {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  date =  new Date();
  availableslots: AvailableSlotsModel[];
  multipleAvailableslots: AvailableSlotsModel[];
  singleSelectedData: any;
  multiSelectedData: any;

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    const atr = [10,12];
    const atr_1 = [13,15];

    this.availableslots = [];
    this.availableslots.push(new AvailableSlotsModel(new Date(),atr));
    this.availableslots.push(new AvailableSlotsModel(new Date(this.date.getTime() + (24 * 60 * 60 * 1000)),atr_1));

    const atr1 = [12,14,15];
    const atr2 = [13,14,17];

    this.multipleAvailableslots = [];
    this.multipleAvailableslots.push(new AvailableSlotsModel(new Date(),atr1));
    this.multipleAvailableslots.push(new AvailableSlotsModel(new Date(this.date.getTime() + (24 * 60 * 60 * 1000)),atr2));
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/enterprise/appointment/ee.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/enterprise/appointment/ee.text',{responseType: 'text'}).subscribe(data => {
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

  ngOnInit() {
  }

  onSingleSelect(event: any) {
    this.singleSelectedData = event;
  }

  onMultiSelect(event: any) {
    this.multiSelectedData = event;
  }
}
