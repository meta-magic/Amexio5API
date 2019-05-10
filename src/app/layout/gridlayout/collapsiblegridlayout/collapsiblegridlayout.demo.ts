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
  selector: 'collapsible-gridlayout-demo', templateUrl: 'collapsiblegridlayout.demo.html'
})
export class CollapsibleGridLayoutDemo implements OnInit {

  copyMsgArray: any[];
  selectedData: any;
  data: any[];
  gridDesktop1: GridConfig;
  gridDesktop2: GridConfig;
  gridDesktop3: GridConfig;

  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.customSourceData = new ComponentDataStructure();
    this.createLayouts();

  }


  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Grid Layout';
    this.customSourceData.description = 'CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/gridlayout/collapsiblegridlayout.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/gridlayout/collapsiblegridlayout.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-gridlayoutbasic?embed=1&file=app/layouts/gridlayout/gridlayoutbasic/gridlayout.demo.html&view=editor';
  }

  createLayouts() {

    this.gridDesktop1 = new GridConfig('collapsiblegridlayoutdemo1', GridConstants.Desktop)
      .addlayout(["eastblock", "centertopblock", "centertopblock", "centertopblock", "centertopblock", "westblock"])
      .addlayout(["eastblock", "centerbottomblock", "centerbottomblock", "centerbottomblock", "centerbottomblock", "westblock"]);
     

    this.gridDesktop2 = new GridConfig('collapsiblegridlayoutdemo2', GridConstants.Desktop)
      .addlayout(["west", "north", "north", "north", "north", "east"])
      .addlayout(["west", "center", "center", "center", "center", "east"])
      .addlayout(["west", "south", "south", "south", "south", "east"]);


    this.gridDesktop3 = new GridConfig('collapsiblegridlayoutdemo3', GridConstants.Desktop)
      .addlayout(["north", "north", "north", "north", "north", "north"])
      .addlayout(["west", "center", "center", "center", "center", "east"])
      .addlayout(["south", "south", "south", "south", "south", "south"]);

    this._gridlayoutService.createLayout(this.gridDesktop1);
    this._gridlayoutService.createLayout(this.gridDesktop2);
    this._gridlayoutService.createLayout(this.gridDesktop3);
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

