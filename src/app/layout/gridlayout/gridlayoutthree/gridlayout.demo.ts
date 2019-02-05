/**
 * Created by rashmi on 2/1/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from "amexio-ng-extensions";
import { GridConstants } from 'amexio-ng-extensions';
import { GridConfig } from 'amexio-ng-extensions';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';


@Component({
  selector: 'gridlayout-demo-exp3', templateUrl: 'gridlayout.demo.html'
})
export class GridLayoutDemoThree implements OnInit {
 
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  data: any[];
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;  

  customSourceData: ComponentDataStructure;


  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.customSourceData = new ComponentDataStructure();
     
    
    this.createLayouts();
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);

  }


  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Grid Layout';
    this.customSourceData.description = 'CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/gridlayout/gridlayoutexp3.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/gridlayout/gridlayoutexp3.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-gridlayoutthree?embed=1&file=app/layouts/gridlayout/gridlayoutthree/gridlayout.demo.html&view=editor';
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

