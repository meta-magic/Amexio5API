/**
 * Created by rashmi on 20/6/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'dragdroptree-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Tree with Drag Drop Functionality 
      </amexio-header>
      <amexio-body>
        <p>A Expandable Tree component which create Tree View based on standard datasource attached and having functionality of drag and drop: within Tree</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-card [header]="true">
                  <amexio-header>
                     Drag Drop Functionality within Tree
                  </amexio-header>
                  <amexio-body>
                  <amexio-treeview [data-reader]="'data'" [enable-drag]="true" [enable-drop]="true" [data]="treeLocalData">
                  </amexio-treeview>
                  </amexio-body>
                </amexio-card>
              </amexio-column>
</amexio-row>

          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties<amexio-treeview>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/data/tree.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="15" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="20" [data-index]="'version'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Version'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'type'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'default'" [width]="10" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="45" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/data/tree.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-simple-tree?embed=1&file=app/tree/simpletree/simpletree.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class WithinTreeDemo {

    htmlCode: string;
    typeScriptCode: string;
    dataSource: string;
    copyMsgArray: any[];
    selectedData: any;
    treeLocalData: any;

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

    }

    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
        let responseHtml: any;
        let responseTs: any;

        //HTML FILE
        this.http.get('assets/data/code/draganddrop/withintree/tree.html', { responseType: 'text' }).subscribe(data => {
            responseHtml = data;
        }, error => {
        }, () => {
            this.htmlCode = responseHtml;
        });

        //TS FILE
        this.http.get('assets/data/code/draganddrop/withintree/tree.text', { responseType: 'text' }).subscribe(data => {
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