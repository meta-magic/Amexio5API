/**
 * Created by rashmi on 28/11/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from 'amexio-ng-extensions';
import { GridConstants } from 'amexio-ng-extensions';
import { GridConfig } from 'amexio-ng-extensions';

import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';

@Component({
  selector: 'gridlayout-demo', templateUrl: 'gridlayout.demo.html'
})
export class GridLayoutDemo  implements OnInit{
 
  copyMsgArray: any[];
  selectedData: any;
  data: any[];
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;
  gridDesktop1: GridConfig;
  gridTablet1: GridConfig;
  gridMobile1: GridConfig;

  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.customSourceData = new ComponentDataStructure();
    this.createLayouts();
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);

    this._gridlayoutService.createLayout(this.gridDesktop1);
    this._gridlayoutService.createLayout(this.gridTablet1);
    this._gridlayoutService.createLayout(this.gridMobile1);
  }


  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Grid Layout';
    this.customSourceData.description = 'CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/gridlayout/gridlayout.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/gridlayout/gridlayout.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-gridlayoutbasic?embed=1&file=app/layouts/gridlayout/gridlayoutbasic/gridlayout.demo.html&view=editor';
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
      .addlayout(["gridmenu2", "gridmenu2", "gridheader2", "gridheader2", "gridheader2", "gridheader2"])
    .addlayout(["gridmenu2", "gridmenu2", "gridmain2", "gridmain2", "gridright2", "gridright2"])
    .addlayout(["gridmenu2", "gridmenu2", "gridfooter2", "gridfooter2", "gridfooter2", "gridfooter2"]);
      this.gridTablet1 = new GridConfig('LayoutSample2', GridConstants.Tablet)
      .addlayout(["gridmenu2", "gridmenu2", "gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridmenu2", "gridmenu2", "gridmain2", "gridmain2", "gridmain2", "gridmain2"])
      .addlayout(["gridmenu2", "gridmenu2", "gridright2", "gridright2", "gridright2", "gridright2"])
      .addlayout(["gridmenu2", "gridmenu2", "gridfooter2", "gridfooter2", "gridfooter2", "gridfooter2"]);
      this.gridMobile1 = new GridConfig('LayoutSample2', GridConstants.Mobile)
      .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridmenu2", "gridmenu2", "gridmenu2", "gridmenu2", "gridmenu2", "gridmenu2"])
      .addlayout(["gridmain2", "gridmain2", "gridmain2", "gridmain2", "gridmain2", "gridmain2"])
      .addlayout(["gridright2", "gridright2", "gridright2", "gridright2", "gridright2", "gridright2"])
      .addlayout(["gridfooter2", "gridfooter2", "gridfooter2", "gridfooter2", "gridfooter2", "gridfooter2"]);
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

