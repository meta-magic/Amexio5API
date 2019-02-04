/**
 * Created by sagar on 9/1/18.
 */

import { Component, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioTreeViewComponent } from 'amexio-ng-extensions';

@Component({
  selector: 'simpletree-demo', 
  templateUrl :'./simpletree.demo.html',
})
export class SimpleTreeDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  dataCustomSource: string;
  copyMsgArray: any[];
  selectedData: any;
  treeLocalData: any;
  selectedCustomData: any;
  expandSelectedData: any;
  customArrayLocalData: any;


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

  getNodeData(data: any) {
    this.selectedData = data;
  }

  getCustomNodeData(data: any) {
    this.selectedCustomData = data;
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/tree/simpletree/simpletree.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/tree/simpletree/simpletree.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/treeview.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSource = responseTs;
    });
    this.http.get('assets/data/componentdata/treecustomview.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataCustomSource = responseTs;
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


