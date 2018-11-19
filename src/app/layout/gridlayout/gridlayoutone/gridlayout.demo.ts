/**
 * Created by rashmi on 2/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AmexioGridLayoutService} from "amexio-ng-extensions";

@Component({
  selector: 'gridlayout-demo-exp1', templateUrl: 'gridlayout.demo.html'
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
    this._gridlayoutService.createLayout('Layout1','desktop')
    .addlayout([".", "gridheader", "gridheader", "."])
    .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridright"])
    .addlayout(["gridleft", "gridmenu2", "gridmenu2", "gridright"])
    .addlayout(["gridleft", "gridmenu3", "gridmenu4", "gridright"])
    .addlayout(["gridleft", "gridmenu5", "gridmenu5", "gridright"]);

    this._gridlayoutService.createLayout('Layout1','tab')
    .addlayout([".", "gridheader", "gridheader", "."])
    .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridright"])
    .addlayout(["gridleft", "gridmenu2", "gridmenu2", "gridright"])
    .addlayout(["gridleft", "gridmenu3", "gridmenu3", "gridmenu4"])
    .addlayout(["gridleft", "gridmenu5", "gridmenu5", "gridmenu5"]);

    this._gridlayoutService.createLayout('Layout1','mobile')
   .addlayout([".", "gridheader", "gridheader", "."])
    .addlayout(["gridmenu1", "gridmenu1", "gridmenu1", "gridmenu1"])
    .addlayout(["gridmenu2", "gridmenu2", "gridmenu2", "gridmenu2"])
    .addlayout(["gridmenu3", "gridmenu3", "gridmenu3", "gridmenu3"])
    .addlayout(["gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
    .addlayout(["gridmenu5", "gridmenu5", "gridmenu5", "gridmenu5"])
    .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"])
    .addlayout(["gridright", "gridright", "gridright", "gridright"]);

    this.getHtmlAndTypeScriptCode();
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp1.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/gridlayout/gridlayoutexp1.text',{responseType: 'text'}).subscribe(data => {
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

