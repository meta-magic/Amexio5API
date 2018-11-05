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
                  Chips  with Data Input
                </amexio-header>
                <amexio-body>
                <amexio-chips [data] = "sampledatachips" (selectedchipsData)="onChipsLabelClick($event)"(onCloseClick)="onCloseClick($event)"></amexio-chips>
                <pre><code>{{emitdatachips | json}}</code></pre>
                </amexio-body>
              </amexio-card>
              <amexio-card header="true">
                <amexio-header>
                  Chip with multiple Inputs 
                </amexio-header>
                <amexio-body>
                <amexio-chips *ngFor="let item of sampledatachip">
                      <amexio-chip [icon]="item.icon" [label]= "item.label" [color]= "item.color" [badge]= "item.badge" [closable]= "item.closable" (labelClick)="onChipLabelClick($event)" (closeClick)="onCloseClick($event)">
                      </amexio-chip>
                </amexio-chips>
                <pre><code>{{emitdatachip | json}}</code></pre> 
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
            <amexio-datagrid title="Properties<amexio-chip>" [enable-column-fiter]="false"
              [http-method]="'get'"
              [http-url]="'assets/apireference/forms/chip.json'"
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
            <amexio-datagrid title="Events<amexio-chips>" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/chips.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20"[data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [width]="80" [data-index]="'description'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <amexio-datagrid title="Events<amexio-chip>" [http-method]="'get'"
                             [http-url]="'assets/apireference/forms/chip.json'" [data-reader]="'events'"
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
    sampledatachips: any;
    sampledatachip:any;
    emitdatachips: any;
    emitdatachip: any;
    constructor(private http: HttpClient) {
      this.sampledatachips = [{
        icon: 'fa fa-home',
        label: 'Home',
        color: 'turquoise',
        badge: 4,
        closable: true
      },
      {
        icon: 'fa fa-download',
        label: "Download",
        color:'lightblue',
        badge: 5,
        closable: false
      }, {
        icon: 'fa fa-camera',
        label: "Camera",
        color: 'lightgreen',
        badge: 6,
        closable: true
      }, {
        icon: 'fa fa-fire-extinguisher',
        label: "Fire Extinguisher",
        color: 'yellow',
        badge: 7,
        closable: true
      }, {
        icon: 'fa fa-ambulance',
        label: "Emergency",
        color: 'pink',
        badge: 8,
        closable: true
      }
      ]
      this.sampledatachip = [{
        icon: 'fa fa-linkedin-square',
        label: 'Linkedin',
        color: 'pink',
        badge: 4,
        closable: true
      },
      {
        icon: 'fa fa-internet-explorer',
        label: "Internet-Explorer",
        color:'lightblue',
        badge: 5,
        closable: false
      }, {
        icon: 'fa fa-github',
        label: "Github",
        color: 'lightgreen',
        badge: 6,
        closable: true
      }, {
        icon: 'fa fa-twitter',
        label: "Twitter",
        color: 'lightblue',
        badge: 7,
        closable: true
      }, {
        icon: 'fa fa-reddit',
        label: "Reddit",
        color: '',
        badge: 8,
        closable: true
      }
      ]
        this.getHtmlAndTypeScriptCode();
    }
    onChipsLabelClick(event: any){
      this.emitdatachips  = event;
    }
    onChipLabelClick(event: any){
      this.emitdatachip = event;
    }

    onCloseClick(event: any){
      this.emitdatachip = event;
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


