/**
 * Created by rashmi on 20/6/18.
 */

import { Component, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'dragdroptree-demo', template: `
    <amexio-card header="true">
      <amexio-header>
         Tree with Drag Drop Functionality 
      </amexio-header>
      <amexio-body>
        <p>A Expandable Tree component which create Tree View based on standard datasource attached and having functionality of drag and drop : across tree</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>

 <amexio-column size="12">
<amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
    <amexio-header>
        Drag Drop Functionality across Tree
    </amexio-header>
    <amexio-body>
        <amexio-row>
            <amexio-column [size]="6">
                <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
                    <amexio-header>
                        Tree 1
                    </amexio-header>
                    <amexio-body>
                    <amexio-treeview #tree  (onDrop)="getDropData1($event)" [data-reader]="'data'" [enable-drag]="true" [enable-drop]="true" [data]="treeLocalData" [across-tree]="true">
                    </amexio-treeview>
                    </amexio-body>
                </amexio-card>
            </amexio-column>

            <amexio-column [size]="6">
                <amexio-card [header]="true" [footer]="false" [footer-align]="'right'">
                    <amexio-header>
                        Tree 2
                    </amexio-header>
                    <amexio-body>
                    <amexio-treeview #tree1 (onDrop)="getDropData($event)" [data-reader]="'data'" [enable-drag]="true" [enable-drop]="true" [data]="treeLocalData1" [across-tree]="true">
                    </amexio-treeview>
                    </amexio-body>
                </amexio-card>
            </amexio-column>
        </amexio-row>
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
          <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v5-dragdropacrosstree?embed=1&file=app/tree/acrosstree/acrosstree.demo.html&view=editor" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})
export class AcrossTreeDemo {
  @ViewChild('tree') treeRef: any;
  @ViewChild('tree1') treeRef1: any;

  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  treeLocalData: any;
  treeLocalData1: any;
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

    this.treeLocalData1 = {
      "data": [{
        "text": "Web App",
        "expand": true,
        "children": [
          {
            "text": "Grid",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "Column.js"
              },
              {
                "leaf": true,
                "text": "Boolean.js"
              },
              {
                "leaf": true,
                "text": "Check.js"
              }
            ]
          },
          {
            "text": "Layout",
            "expand": true,
            "children": [
              {
                "text": "Component",
                "expand": true,
                "children": [
                  {
                    "leaf": true,
                    "text": "Auto.js"
                  },
                  {
                    "leaf": true,
                    "text": "FieldSet.js"
                  },
                  {
                    "leaf": true,
                    "text": "Dock.js"
                  }
                ]
              }
            ]
          },
          {
            "text": "Tree",
            "expand": true,
            "children": [
              {
                "text": "Plugin",
                "expand": true,
                "children": [
                  {
                    "leaf": true,
                    "text": "TreeViewDragDrop.js"
                  }
                ]
              }
            ]
          },
          {
            "text": "Panel",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "Header.js"
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
    this.http.get('assets/data/code/draganddrop/acrosstree/tree.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/draganddrop/acrosstree/tree.text', { responseType: 'text' }).subscribe(data => {
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

  getNodeData(data: any) {
    this.selectedData = data;
  }

  getDropData(event: any) {
    this.treeRef.removeNode(event);
  }

  getDropData1(event: any) {
    this.treeRef1.removeNode(event);
  }

}
