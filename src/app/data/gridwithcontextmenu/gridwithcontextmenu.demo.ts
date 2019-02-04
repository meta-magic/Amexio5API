/**
 * Created by rashmi on 29/6/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'grid-context-menu-demo', 
  templateUrl :'./gridwithcontextmenu.demo.html',
})
export class GridWithContextMenuDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  contextMenuColData: any[];
  contextMenuRowData: any[];

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.contextMenuColData=
    [{"text":"Add State","icon":"fa fa-plus","disabled":true},{"text":"Edit","icon":"","seperator":true}
     ,{"text":"Delete","icon":""}];
   this.contextMenuRowData =  [{"text":"Reload","icon":"fa fa-refresh","disabled":false,"seperator":false},{"text":"Save","icon":"fa fa-save","seperator":false}
   ,{"text":"Delete","icon":"fa fa-close"}];
  }


  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/contextmenugrid/contextmenugrid.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/contextmenugrid/contextmenugrid.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    this.http.get('assets/data/componentdata/country.json',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSource = responseTs;
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


