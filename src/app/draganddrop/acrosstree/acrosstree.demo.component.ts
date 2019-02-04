/**
 * Created by rashmi on 20/6/18.
 */

import { Component, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'dragdroptree-demo', 
  templateUrl :'./acrosstree.demo.component.html',
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
