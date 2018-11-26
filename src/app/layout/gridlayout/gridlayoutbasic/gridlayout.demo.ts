/**
 * Created by rashmi on 2/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AmexioGridLayoutService} from "amexio-ng-extensions";

@Component({
  selector: 'gridlayout-demo', templateUrl: 'gridlayout.demo.html'
})
export class GridLayoutDemo {
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  data:any[];
  data1:any[];
  data2:any[];
  localData :any;
  areaChartData: any;
  sidenavData: any;

  constructor(private http: HttpClient,private _gridlayoutService : AmexioGridLayoutService) {
    this._gridlayoutService.createLayout('LayoutSample1','desktop')
    .addlayout(["gridmenu", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmain", "gridmain", "gridmain", "gridright", "gridright"])
    .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridright", "gridright"]);
    this._gridlayoutService.createLayout('LayoutSample1','mobile')
    .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu"])
    .addlayout(["gridmain", "gridmain", "gridmain", "gridmain", "gridmain", "gridmain"])
    .addlayout(["gridright", "gridright", "gridright", "gridright", "gridright", "gridright"])
    .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
    this._gridlayoutService.createLayout('LayoutSample1','tab')
    .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
    .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
    .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
    
    this._gridlayoutService.createLayout('LayoutSample2','desktop')
    .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridright", "gridright"])
    .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
    this._gridlayoutService.createLayout('LayoutSample2','mobile')
    .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu", "gridmenu"])
    .addlayout(["gridmain", "gridmain", "gridmain", "gridmain", "gridmain", "gridmain"])
    .addlayout(["gridright", "gridright", "gridright", "gridright", "gridright", "gridright"])
    .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);
    this._gridlayoutService.createLayout('LayoutSample3','tab')
    .addlayout(["gridmenu", "gridmenu", "gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridmenu", "gridmenu", "gridmain", "gridmain", "gridmain", "gridmain"])
    .addlayout(["gridmenu", "gridmenu", "gridright", "gridright", "gridright", "gridright"])
    .addlayout(["gridmenu", "gridmenu", "gridfooter", "gridfooter", "gridfooter", "gridfooter"]);

    

    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayout.text',{responseType: 'text'}).subscribe(data => {
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
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  onRowSelect(data: any) {
    this.selectedData = data;
  }
}

