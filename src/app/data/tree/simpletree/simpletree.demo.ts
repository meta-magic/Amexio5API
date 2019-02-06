/**
 * Created by sagar on 9/1/18.
 */

import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioTreeViewComponent } from 'amexio-ng-extensions';

import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'simpletree-demo', 
  templateUrl :'./simpletree.demo.html',
})
export class SimpleTreeDemo implements OnInit{
 
  dataCustomSource: string;
  copyMsgArray: any[];
  selectedData: any;
  treeLocalData: any;
  selectedCustomData: any;
  expandSelectedData: any;
  customArrayLocalData: any;


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
  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'simple Tree';
    this.customSourceData.description = 'A Expandable Tree Component for Angular, having Checkbox functionality.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/simpletree/simpletree.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/tree/simpletree/simpletree.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treeview.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-simple-tree?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor';
  }

  getNodeData(data: any) {
    this.selectedData = data;
  }

  getCustomNodeData(data: any) {
    this.selectedCustomData = data;
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


