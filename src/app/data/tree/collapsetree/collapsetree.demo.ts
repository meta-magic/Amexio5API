/**
 * Created by sagar on 9/1/18.
 */

import { Component, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioTreeViewComponent } from 'amexio-ng-extensions';

@Component({
  selector: 'collapsetree-demo', template: `
  <amexio-card header="true">
    <amexio-header>
    Collapseable and Expandable Tree
    </amexio-header>
    <amexio-body>
        <p>A Collapse and Expandable Tree component which create Tree View based on standard datasource attached.</p>
        <amexio-tab-view>
            <amexio-tab title="Demo" active="true">
                <amexio-row>
                    <amexio-column size="6">
                        <amexio-card [header]="true" [footer]="true" [footer-align]="'right'">
                            <amexio-header style="width:100%">
                            <amexio-toolbar>
                            <amexio-toolbar-item position-left >
                            <amexio-image [ngClass]="text" (click)="expandAlldata(id)">
                                 </amexio-image>
                            </amexio-toolbar-item>
                            <amexio-toolbar-item position-left >
                             <label style="margin-top: 0px; font-size: 18px">
                             &nbsp;  &nbsp; Expand all and collapse all function
                             </label>
                            </amexio-toolbar-item>
                            </amexio-toolbar>
                                
                            </amexio-header>
                            <amexio-body>
                                <amexio-treeview #id [data-reader]="'item'" [data]="treeLocalExpandData" (nodeClick)="getNodeDataClick($event)">
                                </amexio-treeview>
                            </amexio-body>
                            <amexio-action>
                                </amexio-action>
                        </amexio-card>
                    </amexio-column>
                    <amexio-column size="6" [fit]='true'>
                        <amexio-card [header]="true">
                            <amexio-header>
                                Selected Data
                            </amexio-header>
                            <amexio-body>
                                <pre><code>{{expandSelectedData | json}}</code></pre>
                            </amexio-body>
                        </amexio-card>
                    </amexio-column>
                </amexio-row>
            </amexio-tab>

            <amexio-tab title="API Reference">
                <amexio-datagrid title="Properties<amexio-treeview>" [enable-column-fiter]="false" [http-method]="'get'" [http-url]="'assets/apireference/data/tree.json'"
                    [data-reader]="'properties'" [enable-data-filter]="false">
                    <amexio-data-table-column [data-index]="'name'" [width]="22" [data-type]="'string'" [hidden]="false" [text]="'Name'"></amexio-data-table-column>
                    <amexio-data-table-column [width]="15" [data-index]="'version'" [data-type]="'string'" [hidden]="false" [text]="'version'"></amexio-data-table-column>
                    <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false" [text]="'Type'"></amexio-data-table-column>
                    <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false" [text]="'Default'"></amexio-data-table-column>
                    <amexio-data-table-column [data-index]="'description'" [width]="55" [data-type]="'string'" [hidden]="false" [text]="'Description'"></amexio-data-table-column>
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
                    </amexio-vertical-tab-view>
                </div>
            </amexio-tab>
            <amexio-tab title="Live">
                <p align="center">Amexio Sandbox</p>
                <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-collapseble-tree?embed=1&file=app/collapsetree/simpletree/simpletree.demo.html&view=editor"
                    frameborder="0" allowfullscren="allowfullscren"></iframe>
            </amexio-tab>
        </amexio-tab-view>
    </amexio-body>
</amexio-card>
  `
})
export class CollapseTreeDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  treeLocalData: any;
  treeLocalExpandData: any;
  expandSelectedData: any;

  public text: string = "fa fa-minus";
  expand: boolean = true;

  expandAlldata(id) {
    if (!this.expand) {
      id.expandAll();
      this.text = "fa fa-minus"
    } else {
      id.collapseAll();
      this.text = "fa fa-plus"
    }
    this.expand = !this.expand;
  }
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();


    this.treeLocalExpandData = {
      "item": [{
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
  }

  getNodeData(data: any) {
    this.selectedData = data;
  }
  getNodeDataClick(data: any) {
    this.expandSelectedData = data;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/tree/collapsetree/collapsetree.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/tree/collapsetree/collapsetree.text', { responseType: 'text' }).subscribe(data => {
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
