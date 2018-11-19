/**
 * Created by rashmi on 2/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AmexioGridLayoutService} from "amexio-ng-extensions";

@Component({
  selector: 'gridlayout-demo-exp2', templateUrl: 'gridlayout.demo.html'
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
    .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridheader1", "gridheader1", "gridheader2", "gridheader2"])
    .addlayout(["gridleft", "gridmain", "gridmain", "gridright"])
    .addlayout(["gridleft", "gridfooter1", "gridfooter", "gridfooter"]);

    this._gridlayoutService.createLayout('Layout1','tab')
    .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridheader1", "gridheader1", "gridheader2", "gridheader2"])
    .addlayout(["gridmain", "gridmain", "gridmain", "gridright"])
    .addlayout(["gridfooter1", "gridfooter", "gridfooter", "gridfooter"])
    .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"]);

    this._gridlayoutService.createLayout('Layout1','mobile')
    .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
    .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
    .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2"])
    .addlayout(["gridright", "gridright", "gridright", "gridright"])
    .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
    .addlayout(["gridfooter1", "gridfooter", "gridfooter", "gridfooter"])
    .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"]);

    
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

