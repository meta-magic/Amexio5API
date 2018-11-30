/**
 * Created by rashmi on 2/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from "amexio-ng-extensions";
import { GridConstants } from 'amexio-ng-extensions';
import { GridConfig } from 'amexio-ng-extensions';

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
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;  


  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
      this.createLayouts();
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);

    this.getHtmlAndTypeScriptCode();
  }

  createLayouts() {
    this.gridDesktop = new GridConfig('Home', GridConstants.Desktop)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridtitle", "gridmain", "gridmain", "gridright1"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright2"])
      .addlayout(["gridmenu", "gridmain", "gridmain", "gridright3"]);

      this.gridTablet = new GridConfig('Home', GridConstants.Tablet)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridtitle", "gridtitle", "gridright1", "gridright1"])
      .addlayout(["gridmenu", "gridmenu", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);

      this.gridMobile = new GridConfig('Home', GridConstants.Mobile)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridtitle", "gridtitle", "gridtitle", "gridtitle"])
      .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu"])
      .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
      .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"]);
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

