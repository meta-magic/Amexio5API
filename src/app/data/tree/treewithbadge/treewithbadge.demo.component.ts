/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'treewithbadge-demo', 
  templateUrl : './treewithbadge.demo.component.html',
})
export class TreeWithBadgeDemo {
  
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
            "badge": 1,
            "children": [
              {
                "leaf": true,
                "text": "Application.js",
              }
            ]
          },
          {
            "text": "button",
            "expand": true,
            "badge": 3,
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
            "badge": 3,
            "children": [
              {
                "leaf": true,
                "text": "ButtonGroup.js",
              },
              {
                "leaf": true,
                "text": "Container.js",
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
            "badge": 1,
            "children": [
              {
                "text": "dom",
                "expand": true,
                "badge": 2,
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
    this.customSourceData.title = 'Tree With Badge';
    this.customSourceData.description = 'A Expandable Tree Component for Angular, having Checkbox functionality.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/treewithbadge/tree.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/tree/treewithbadge/tree.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/treeviewwithbadge.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-tree-with-badge?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor';
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


