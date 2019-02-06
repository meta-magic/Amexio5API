/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'contextmenutree-demo', 
  templateUrl :'./contextmenutree.demo.component.html',
})
export class ContextMenuTreeDemo implements OnInit {

  copyMsgArray: any[];
  treeLocalData: any;
  rightclickdata: any;

  
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
   
    this.rightclickdata=
    [{"text":"Add New","icon":"fa fa-plus","disabled":true},{"text":"Edit","icon":"","seperator":true}
     ,{"text":"Send data in email","icon":""}];

   

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
    this.customSourceData.title = 'Tree With Context Menu';
    this.customSourceData.description = 'A Expandable Tree Component for Angular, having Checkbox functionality.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/tree/contextmenutree/tree.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/tree/contextmenutree/tree.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-tree-contextmenu-demo?embed=1&file=src/app/contextualmenu/tree/tree.demo.component.html&view=editor';
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
}


