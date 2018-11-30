/**
 * Created by rashmi on 28/11/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from 'amexio-ng-extensions';
import { GridConstants } from 'amexio-ng-extensions';
import { GridConfig } from 'amexio-ng-extensions';
@Component({
  selector: 'gridlayout-demo', templateUrl: 'gridlayout.demo.html'
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
  gridDesktop1: GridConfig;
  gridTablet1: GridConfig;
  gridMobile1: GridConfig;

  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);

    this._gridlayoutService.createLayout(this.gridDesktop1);
    this._gridlayoutService.createLayout(this.gridTablet1);
    this._gridlayoutService.createLayout(this.gridMobile1);
    this.getHtmlAndTypeScriptCode();
  }

  createLayouts() {
    this.gridDesktop = new GridConfig('LayoutSample1', GridConstants.Desktop)
    .addlayout(["gridmenu", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmain", "gridmain", "gridmain", "gridright", "gridright"])
    .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridright", "gridright"]);
      this.gridTablet = new GridConfig('LayoutSample1', GridConstants.Tablet)
      .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
      .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
      .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
      this.gridMobile = new GridConfig('LayoutSample1', GridConstants.Mobile)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridright", "gridright", "gridright", "gridright", "gridright", "gridright"])
      .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);

      this.gridDesktop1 = new GridConfig('LayoutSample2', GridConstants.Desktop)
      .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
    .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
      this.gridTablet1 = new GridConfig('LayoutSample2', GridConstants.Tablet)
      .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridmenu", "gridmenu", "gridright", "gridright", "gridright", "gridright"])
      .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
      this.gridMobile1 = new GridConfig('LayoutSample2', GridConstants.Mobile)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridright", "gridright", "gridright", "gridright", "gridright", "gridright"])
      .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.text', { responseType: 'text' }).subscribe(data => {
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

