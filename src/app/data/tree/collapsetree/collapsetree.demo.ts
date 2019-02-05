/**
 * Created by sagar on 9/1/18.
 */

import { Component, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioTreeViewComponent } from 'amexio-ng-extensions';
import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'collapsetree-demo',
  templateUrl :'./collapsetree.demo.html',
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
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
   

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

  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Collapseable And Expandable Tree ';
    this.customSourceData.description = 'A Collapse and Expandable Tree component which create Tree View based on standard datasource attached.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/collapsetree/collapsetree.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/tree/collapsetree/collapsetree.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-collapseble-tree?embed=1&file=app/collapsetree/simpletree/simpletree.demo.html&view=editor';
  }

  getNodeData(data: any) {
    this.selectedData = data;
  }
  getNodeDataClick(data: any) {
    this.expandSelectedData = data;
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
