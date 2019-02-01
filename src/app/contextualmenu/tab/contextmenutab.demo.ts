/**
 * Created by rashmi on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'context-menu-tab-demo',
  templateUrl:'contextmenutab.demo.html'

  
})
export class ContextMenuTabDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  rightclickdata : any[];
  constructor(private http: Http) {
    this.rightclickdata = [
      {
        "text": "Back",
        "icon": "fa fa-arrow-left",
        "disabled": true
      },
      {
        "text": "Reload",
        "icon": "fa fa-refresh",
        "seperator": false
      },
      {
        "text": "Save",
        "icon": "fa fa-save"
      }
    ];
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/tab/contextmenutab/tab.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/tab/contextmenutab/tab.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

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




