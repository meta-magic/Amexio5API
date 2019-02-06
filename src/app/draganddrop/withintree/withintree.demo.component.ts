/**
 * Created by rashmi on 20/6/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
    selector: 'dragdroptree-demo', 
    templateUrl: './withintree.demo.component.html',
})
export class WithinTreeDemo implements OnInit{

   
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
        this.customSourceData.title = 'within tree Drag Drop Functionality';
        this.customSourceData.description = 'A within Tree component which create Tree View based on standard datasource attached and having functionality of drag and drop: within Tree.';
        this.customSourceData.sourceMetadata.htmlUrl = 'draganddrop/withintree/tree.html';
        this.customSourceData.sourceMetadata.tsUrl = 'draganddrop/withintree/tree.text';
        this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown-withintree?embed=1&file=app/tree/simpletree/simpletree.demo.html&view=editor';
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
