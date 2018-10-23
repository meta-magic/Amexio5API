/**
 * Created by sagar on 9/1/18.
 */

import { Component, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioTreeViewComponent } from 'amexio-ng-extensions';

@Component({
  selector: 'simpletree-demo', template: `
  <amexio-card header="true">
    <amexio-header>
        Simple Tree
    </amexio-header>
    <amexio-body>
        <p>A Simple Expandable Tree component which create Tree View based on standard datasource attached.</p>
    
        <amexio-tab-view>
            <amexio-tab title="Demo" active="true">
                <amexio-row>
                    <amexio-column size="6" [fit]="true">
                        <amexio-card [header]="true" >
                            <amexio-header>
                                Simple Tree
                            </amexio-header>
                            <amexio-body>
                                <amexio-treeview [data-reader]="'data'"   [data]="treeLocalData" (nodeClick)="getNodeData($event)">
                                </amexio-treeview>
                            </amexio-body>
                        </amexio-card>
                    </amexio-column>
                    <amexio-column size="6" [fit]="true">
                        <amexio-card [header]="true" >
                            <amexio-header>
                                Selected Data
                            </amexio-header>
                            <amexio-body>
                                <pre><code>{{selectedData | json}}</code></pre>
                            </amexio-body>
                        </amexio-card>
                    </amexio-column>
                </amexio-row>
               
                
                <amexio-card header="true">
                <amexio-header>
               Dynamically Changes Tree Data
                </amexio-header>
                <amexio-body>
              
                <p> By Default Tree consumes standard JSON structure i.e to display node/leaf “Text” Key 
                should be present in JSON && array with “Children” Key present in JSON. 
                Now with 5.2.x release Amexio-tree component can consume user defined data structure and 
                pass what is key for node/leaf and what is key for children array.
                </p>
                <amexio-row>
                    <amexio-column size="6" [fit]="true">
                        <amexio-card [header]="true" >
                            <amexio-header>
                               Tree with user define keys 
                            </amexio-header>
                            <amexio-body>
                           
                                <amexio-treeview [data-reader]="'customArray'" [display-key]="'demo'" [child-array-key]="'object'"  [data]="customArrayLocalData" (nodeClick)="getCustomNodeData($event)">
                                </amexio-treeview>
                            </amexio-body>
                        </amexio-card>
                    </amexio-column>
                    <amexio-column size="6" [fit]="true">
                        <amexio-card [header]="true" >
                            <amexio-header>
                                Selected Data
                            </amexio-header>
                            <amexio-body>
                                <pre><code>{{selectedCustomData | json}}</code></pre>
                            </amexio-body>
                        </amexio-card>
                    </amexio-column>
                </amexio-row>
                </amexio-body>
                </amexio-card>


            </amexio-tab>

            <amexio-tab title="API Reference">
                <amexio-datagrid title="Properties<amexio-treeview>" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/data/tree.json'"
                    [data-reader]="'properties'" [enable-data-filter]="false">
                    <amexio-data-table-column [data-index]="'name'" [width]="24" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
                   <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'Version'"></amexio-data-table-column>
                   
                    <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false" [text]="'Type'"></amexio-data-table-column>
                    <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false" [text]="'Default'"></amexio-data-table-column>
                    <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
                </amexio-datagrid>
                <br>
                <amexio-datagrid title="Events" [http-method]="'get'" [http-url]="'assets/apireference/data/tree.json'" [data-reader]="'events'"
                    [enable-data-filter]="false">
                    <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
                    <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'Version'"></amexio-data-table-column>
                   
                    <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
                </amexio-datagrid>

                <amexio-datagrid title="Methods" [http-method]="'get'" [http-url]="'assets/apireference/data/tree.json'" [data-reader]="'methods'"
            [enable-data-filter]="false">
            <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
            <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'Version'"></amexio-data-table-column>
            <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
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
                        <amexio-tab title="DataSource">
                            <ng-container *ngIf="dataSource">
                                <prism-block [code]="dataSource" [language]="'json'"></prism-block>
                            </ng-container>
                        </amexio-tab>
                        <amexio-tab title="DataCustomSource">
                        <ng-container *ngIf="dataCustomSource">
                            <prism-block [code]="dataCustomSource" [language]="'json'"></prism-block>
                        </ng-container>
                    </amexio-tab>
                    </amexio-vertical-tab-view>
                </div>
            </amexio-tab>
            <amexio-tab title="Live">
                <p align="center">Amexio Sandbox</p>
                <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-simple-tree?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor"
                    frameborder="0" allowfullscren="allowfullscren"></iframe>
            </amexio-tab>
        </amexio-tab-view>
    </amexio-body>
</amexio-card>
  `
})
export class SimpleTreeDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  dataCustomSource: string;
  copyMsgArray: any[];
  selectedData: any;
  treeLocalData: any;
  selectedCustomData: any;
  expandSelectedData: any;
  customArrayLocalData: any;


  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();

    this.treeLocalData = {
      "data": [{
        "text": "Web App",
        "expand": true,
        "children": [
          {
            "text": "app",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "Application.js"
              }
            ]
          },
          {
            "text": "button",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "Button.js"
              },
              {
                "leaf": true,
                "text": "Cycle.js"
              },
              {
                "leaf": true,
                "text": "Split.js"
              }
            ]
          },
          {
            "text": "container",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "ButtonGroup.js"
              },
              {
                "leaf": true,
                "text": "Container.js"
              },
              {
                "leaf": true,
                "text": "Viewport.js",
                "expand": true,
                "children": [],
                "lazy": {
                  "http-url": "data/treeview.json",
                  "http-method": "get"
                }
              }
            ]
          },
          {
            "text": "core",
            "expand": true,
            "children": [
              {
                "text": "dom",
                "expand": true,
                "children": [
                  {
                    "leaf": true,
                    "text": "Element.form.js"
                  },
                  {
                    "leaf": true,
                    "text": "Element.static-more.js"
                  }

                ]
              }
            ]
          }
        ]
      }]
    };

    this.customArrayLocalData = {
      "customArray": [{
        "demo": "Web App",
        "expand": true,
        "object": [
          {
            "demo": "app",
            "expand": true,
            "object": [
              {
                "leaf": true,
                "demo": "Application.js"
              }
            ]
          },
          {
            "demo": "button",
            "expand": true,
            "object": [
              {
                "leaf": true,
                "demo": "Button.js"
              },
              {
                "leaf": true,
                "demo": "Cycle.js"
              },
              {
                "leaf": true,
                "demo": "Split.js"
              }
            ]
          },
          {
            "demo": "container",
            "expand": true,
            "object": [
              {
                "leaf": true,
                "demo": "ButtonGroup.js"
              },
              {
                "leaf": true,
                "demo": "Container.js"
              },
              {
                "leaf": true,
                "demo": "Viewport.js",
                "expand": true,
                "object": [],
                "lazy": {
                  "http-url": "data/treeview.json",
                  "http-method": "get"
                }
              }
            ]
          },
          {
            "demo": "core",
            "expand": true,
            "object": [
              {
                "demo": "dom",
                "expand": true,
                "object": [
                  {
                    "leaf": true,
                    "demo": "Element.form.js"
                  },
                  {
                    "leaf": true,
                    "demo": "Element.static-more.js"
                  }

                ]
              }
            ]
          }
        ]
      }]
    };

  }

  getNodeData(data: any) {
    this.selectedData = data;
  }

  getCustomNodeData(data: any) {
    this.selectedCustomData = data;
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/tree/simpletree/simpletree.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/tree/simpletree/simpletree.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/treeview.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSource = responseTs;
    });
    this.http.get('assets/data/componentdata/treecustomview.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataCustomSource = responseTs;
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


