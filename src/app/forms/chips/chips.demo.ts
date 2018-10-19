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
             
              <amexio-column size="12">
              <amexio-card header="true">
                <amexio-header>
                  Chips
                </amexio-header>
                <amexio-body>
                <amexio-chips [data] = "sampledata" (selectedchipData)="onLabelClick($event)"></amexio-chips>
                <pre><code>{{emitdata | json}}</code></pre>
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
    sampledata: any;
    emitdata: any;
    constructor(private http: HttpClient) {
      this.sampledata = [{
        icon: 'fa fa-camera',
        label: 'Camera',
        closable: true
      },
      {
        icon: 'fa fa-fire-extinguisher',
        label: "Fire-Safety",
        closable: false
      }, {
        icon: 'fa fa-wifi',
        label: "Wifi",
        closable: true
      }, {
        icon: 'fa fa-taxi',
        label: "Parking-Area",
        closable: false
      }, {
        icon: 'fa fa-ambulance',
        label: "Emergency",
        closable: true
      }
      ]
        this.getHtmlAndTypeScriptCode();
    }
    onLabelClick(event: any){
      this.emitdata = event;
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
        this.http.get('assets/data/code/forms/chips/datasource.json', { responseType: 'text' }).subscribe(data => {
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


