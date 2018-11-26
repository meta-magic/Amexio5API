/**
 * Created by rashmi on 2/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from "amexio-ng-extensions";

@Component({
  selector: 'gridlayout-demo-exp1', templateUrl: 'gridlayout.demo.html'
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
    this._gridlayoutService.createLayout('Layout1', 'desktop')
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridright1"])
      .addlayout(["gridleft", "gridmenu2", "gridmenu3", "gridright2"])
      .addlayout(["gridleft", "gridmenu4", "gridmenu4", "gridright3"])
      .addlayout(["gridleft", "gridmenu4", "gridmenu4", "gridright4"]);

    this._gridlayoutService.createLayout('Layout1', 'tab')
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridmenu1", "gridmenu1"])
      .addlayout(["gridright1", "gridmenu2", "gridmenu2", "gridmenu3", "gridmenu3"])
      .addlayout(["gridright1", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridright2", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridright3", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridright4", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"]);

    this._gridlayoutService.createLayout('Layout1', 'mobile')
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu1", "gridmenu1", "gridmenu1", "gridmenu1"])
      .addlayout(["gridmenu2", "gridmenu2", "gridmenu2", "gridmenu2"])
      .addlayout(["gridmenu3", "gridmenu3", "gridmenu3", "gridmenu3"])
      .addlayout(["gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"])
      .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
      .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"])
      .addlayout(["gridright4", "gridright4", "gridright4", "gridright4"]);

    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp1.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp1.text', { responseType: 'text' }).subscribe(data => {
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

