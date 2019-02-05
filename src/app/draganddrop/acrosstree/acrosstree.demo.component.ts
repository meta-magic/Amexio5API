/**
 * Created by rashmi on 20/6/18.
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
  selector: 'dragdroptree-demo', 
  templateUrl :'./acrosstree.demo.component.html',
})
export class AcrossTreeDemo implements OnInit{
  @ViewChild('tree') treeRef: any;
  @ViewChild('tree1') treeRef1: any;
  selectedData: any;
  treeLocalData: any;
  treeLocalData1: any;
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
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
    this.customSourceData.title = 'Tree With Drag Drop Functionality';
    this.customSourceData.description = 'A Expandable Tree component which create Tree View based on standard datasource attached and having functionality of drag and drop: within Tree.';
    this.customSourceData.sourceMetadata.htmlUrl = 'draganddrop/acrosstree/tree.html';
    this.customSourceData.sourceMetadata.tsUrl = 'draganddrop/acrosstree/tree.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v5-dragdropacrosstree?embed=1&file=app/tree/acrosstree/acrosstree.demo.html&view=editor';
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
