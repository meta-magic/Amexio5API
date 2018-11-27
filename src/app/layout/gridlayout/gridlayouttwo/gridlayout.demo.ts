/**
 * Created by rashmi on 2/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from "amexio-ng-extensions";

@Component({
  selector: 'gridlayout-demo-exp2', templateUrl: 'gridlayout.demo.html'
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
    this._gridlayoutService.createLayout('Layout2', 'desktop')
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridheader1", "gridheader1", "gridheader2", "gridheader2"])
      .addlayout(["gridleft", "gridmain", "gridmain", "gridright"])
      .addlayout(["gridleft", "gridmain", "gridmain", "gridright"])
      .addlayout(["gridleft", "gridfooter", "gridfooter1", "gridfooter1"]);

    this._gridlayoutService.createLayout('Layout2', 'tab')
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridheader2", "gridheader2", "gridright", "gridright"])
      .addlayout(["gridheader2", "gridheader2", "gridright", "gridright"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter"])
      .addlayout(["gridfooter1", "gridfooter1", "gridfooter1", "gridfooter1"])
      .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"]);

    this._gridlayoutService.createLayout('Layout2', 'mobile')
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridright", "gridright", "gridright", "gridright"])
      // .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter"])
      .addlayout(["gridfooter1", "gridfooter1", "gridfooter1", "gridfooter1"])
      .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"]);

    this._gridlayoutService.createLayout('gridimagelayout', 'desktop')
      .addlayout(["gridimage1", "gridimage2", "gridimage3", "gridimage4"]);
    this._gridlayoutService.createLayout('gridimagelayout', 'tab')
      .addlayout(["gridimage1", "gridimage2", "gridimage3", "gridimage4"]);
    this._gridlayoutService.createLayout('gridimagelayout', 'mobile')
      .addlayout(["gridimage1", "gridimage1", "gridimage2", "gridimage2"])
      .addlayout(["gridimage3", "gridimage3", "gridimage4", "gridimage4"]);
    this._gridlayoutService.createLayout('leftlayout', 'desktop')
      .addlayout(["leftlayout1", "leftlayout1", "leftlayout1", "leftlayout1"])
      .addlayout(["leftlayout2", "leftlayout2", "leftlayout2", "leftlayout2"])
      .addlayout(["leftlayout3", "leftlayout3", "leftlayout3", "leftlayout3"])
      .addlayout(["leftlayout4", "leftlayout4", "leftlayout4", "leftlayout4"]);
    this._gridlayoutService.createLayout('leftlayout', 'tab')
      .addlayout(["leftlayout1", "leftlayout2", "leftlayout3", "leftlayout4"]);

    this._gridlayoutService.createLayout('leftlayout', 'mobile')
      .addlayout(["leftlayout1", "leftlayout1", "leftlayout2", "leftlayout2"])
      .addlayout(["leftlayout3", "leftlayout3", "leftlayout4", "leftlayout4"]);

    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp2.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp2.text', { responseType: 'text' }).subscribe(data => {
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
  onClick() {

  }

  onRowSelect(data: any) {
    this.selectedData = data;
  }
}

