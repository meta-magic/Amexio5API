/**
 * Created by rashmi on 20/6/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'dragdroptree-demo', 
    templateUrl: './withintree.demo.component.html',
})
export class WithinTreeDemo {

    htmlCode: string;
    typeScriptCode: string;
    dataSource: string;
    copyMsgArray: any[];
    selectedData: any;
    treeLocalData: any;

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

    }

    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
        let responseHtml: any;
        let responseTs: any;

        //HTML FILE
        this.http.get('assets/data/code/draganddrop/withintree/tree.html', { responseType: 'text' }).subscribe(data => {
            responseHtml = data;
        }, error => {
        }, () => {
            this.htmlCode = responseHtml;
        });

        //TS FILE
        this.http.get('assets/data/code/draganddrop/withintree/tree.text', { responseType: 'text' }).subscribe(data => {
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
}
