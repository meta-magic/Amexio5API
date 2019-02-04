/**
 * Created by ankita on 5/6/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'toolbar-demo',
  templateUrl :'./toolbar.demo.html',
})
export class ToolbarDemo implements OnInit {
  firstName: string;
  lastName: string;
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  toggleMsgArray: any[];
  payment: any[];
  showBasicWindowNonMateialToolbar:boolean;
  ngOnInit() {

  }
  constructor(private http: HttpClient) {
    this.toggleMsgArray = [];
    this.getHtmlAndTypeScriptCode();
    this.payment=[
      {"label": "Open With", "icon": "fa fa-arrows-alt "},
      {"label": "Make a Copy", "icon": "fa fa-files-o","separator":"true"},
      {"label": "Refresh", "icon": "fa fa-refresh"},
      {"label": "Add Star", "icon": "fa fa-star"},
      {"label": "download", "icon": "fa fa-download"},
      {"label": "bookmark", "icon": "fa fa-bookmark"}
    ];

  }

  //Square Toggle click event
  onSquareToggleClick(data: any) {
    this.toggleMsgArray.push('Square Toggle Click');
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/toolbar/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/toolbar/form.text', { responseType: 'text' }).subscribe(data => {
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
  toggleBasicWindow(data: any){
    this.showBasicWindowNonMateialToolbar= !this.showBasicWindowNonMateialToolbar;
  }
}



