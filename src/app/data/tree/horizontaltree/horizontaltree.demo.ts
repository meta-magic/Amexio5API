/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'horizontal-tree-demo',
  templateUrl : './horizontaltree.demo.html',
})
export class HorizontalTreeDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  treeLocalData: any;
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
                "expand" : true,
                "children":[],
                "lazy":{
                  "http-url":"data/treeview.json",
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
    this.customSourceData.title = 'horizontal Tree';
    this.customSourceData.description = 'A Expandable Tree Component for Angular, having Checkbox functionality.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/horizontaltree/horizontaltree.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/tree/horizontaltree/horizontaltree.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/sidenav.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-horizontal?embed=1&file=app/tree/treehorizontal/treehorizontal.demo.html&view=editor';
  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  getNodeData(data: any) {
    this.selectedData = data;
  }
}


