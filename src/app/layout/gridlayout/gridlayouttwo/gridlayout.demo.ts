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
  selector: 'gridlayout-demo-exp2', templateUrl: 'gridlayout.demo.html'
})
export class GridLayoutDemoTwo implements OnInit {

  copyMsgArray: any[];
  selectedData: any;
  data: any[];
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;

  leftGridDesktop: GridConfig;
  leftGridTablet: GridConfig;
  leftGridMobile: GridConfig;

  imageGridDesktop: GridConfig;
  imageGridTablet: GridConfig;
  imageGridMobile: GridConfig;

  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
   
    this.customSourceData = new ComponentDataStructure();
   
    this.createLayouts();
    this._gridlayoutService.createLayout(this.imageGridDesktop);
    this._gridlayoutService.createLayout(this.imageGridTablet);
    this._gridlayoutService.createLayout(this.imageGridMobile);

    this._gridlayoutService.createLayout(this.leftGridDesktop);
    this._gridlayoutService.createLayout(this.leftGridTablet);
    this._gridlayoutService.createLayout(this.leftGridMobile);

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
    this.customSourceData.sourceMetadata.htmlUrl = 'data/gridlayout/gridlayoutexp2.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/gridlayout/gridlayoutexp2.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-gridlayouttwo?embed=1&file=app/layouts/gridlayout/gridlayouttwo/gridlayout.demo.html&view=editor';
  }



  createLayouts() {
    this.gridDesktop = new GridConfig('Layout2', GridConstants.Desktop)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridheader1", "gridheader1", "gridheader2", "gridheader2"])
      .addlayout(["gridleft1", "gridmain", "gridmain", "gridright"])
      .addlayout(["gridleft1", "gridmain", "gridmain", "gridright"])
      .addlayout(["gridleft1", "gridfooter", "gridfooter1", "gridfooter1"]);

    this.gridTablet = new GridConfig('Layout2', GridConstants.Tablet)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridheader2", "gridheader2", "gridright", "gridright"])
      .addlayout(["gridheader2", "gridheader2", "gridright", "gridright"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter"])
      .addlayout(["gridfooter1", "gridfooter1", "gridfooter1", "gridfooter1"])
      .addlayout(["gridleft1", "gridleft1", "gridleft1", "gridleft1"]);

    this.gridMobile = new GridConfig('Layout2', GridConstants.Mobile)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridright", "gridright", "gridright", "gridright"])
      .addlayout(["gridmain", "gridmain", "gridmain", "gridmain"])
      .addlayout(["gridfooter", "gridfooter", "gridfooter", "gridfooter"])
      .addlayout(["gridfooter1", "gridfooter1", "gridfooter1", "gridfooter1"])
      .addlayout(["gridleft1", "gridleft1", "gridleft1", "gridleft1"]);

    this.imageGridDesktop = new GridConfig('gridimagelayout', GridConstants.Desktop)
      .addlayout(["gridimage1", "gridimage2", "gridimage3", "gridimage4"]);

    this.imageGridTablet = new GridConfig('gridimagelayout', GridConstants.Tablet)
      .addlayout(["gridimage1", "gridimage2", "gridimage3", "gridimage4"]);

    this.imageGridMobile = new GridConfig('gridimagelayout', GridConstants.Mobile)
      .addlayout(["gridimage1", "gridimage1", "gridimage2", "gridimage2"])
      .addlayout(["gridimage3", "gridimage3", "gridimage4", "gridimage4"]);

    this.leftGridDesktop = new GridConfig('leftlayout', GridConstants.Desktop)
      .addlayout(["leftlayout1", "leftlayout1", "leftlayout1", "leftlayout1"])
      .addlayout(["leftlayout2", "leftlayout2", "leftlayout2", "leftlayout2"])
      .addlayout(["leftlayout3", "leftlayout3", "leftlayout3", "leftlayout3"])
      .addlayout(["leftlayout4", "leftlayout4", "leftlayout4", "leftlayout4"]);

    this.leftGridTablet = new GridConfig('leftlayout', GridConstants.Tablet)
      .addlayout(["leftlayout1", "leftlayout2", "leftlayout3", "leftlayout4"]);

    this.leftGridMobile = new GridConfig('leftlayout', GridConstants.Mobile)
      .addlayout(["leftlayout1", "leftlayout1", "leftlayout2", "leftlayout2"])
      .addlayout(["leftlayout3", "leftlayout3", "leftlayout4", "leftlayout4"]);
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

