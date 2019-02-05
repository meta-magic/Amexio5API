/**
 * Created by rashmi on 20/6/18.
 */

import { Component, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'dragdroptree-demo',
  templateUrl :'./treedragdrop.demo.html',
})
export class DragDropTreeDemo {

  @ViewChild('tree') treeRef: any;
  @ViewChild('tree1') treeRef1: any;

 
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  treeLocalData: any;
  treeLocalData1: any;
  treeData: any;

  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
   

    this.treeData = {
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

  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'drag and drop Tree';
    this.customSourceData.description = 'A Expandable Tree Component for Angular, having Checkbox functionality.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/dragdroptree/dragdroptree.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/tree/dragdroptree/dragdroptree.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dragdrop?embed=1&file=app/tree/acrosstree/acrosstree.demo.html&view=editor';
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

  getDropData(event: any) {
    this.treeRef.removeNode(event);
  }

  getDropData1(event: any) {
    this.treeRef1.removeNode(event);
  }
  drag(data: any) {
    data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
  }

  dragOver(event: any) {
    event.preventDefault();
  }

  drop(event: any) {
    event.preventDefault();
    this.selectedData = JSON.parse(event.dataTransfer.getData('dragdata'))
  }
}
