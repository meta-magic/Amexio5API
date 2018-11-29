/**
 * Created by rashmi on 2/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from "amexio-ng-extensions";

@Component({
  selector: 'gridlayout-demo-exp3', templateUrl: 'gridlayout.demo.html'
})
export class GridLayoutDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  data: any[];
  data1: any[];
  data2: any[];
  localData: any;
  areaChartData: any;
  sidenavData: any;

  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this._gridlayoutService.createLayout('Home', 'desktop')
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridtitle", "gridmain", "gridmain", "gridright1"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright2"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright3"]);
    this._gridlayoutService.createLayout('Home', 'tab')
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridtitle", "gridtitle", "gridright1", "gridright1"])
      .addlayout(["gridmenu", "gridmenu", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);
    this._gridlayoutService.createLayout('Home', 'mobile')
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridtitle", "gridtitle", "gridtitle", "gridtitle"])
      .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu"])
      .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
      .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);

    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp3.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp3.text', { responseType: 'text' }).subscribe(data => {
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

  onRowSelect(data: any) {
    this.selectedData = data;
  }
}
