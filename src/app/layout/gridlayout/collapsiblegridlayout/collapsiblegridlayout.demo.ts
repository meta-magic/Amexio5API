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
  gridDesktop: GridConfig;

  customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.customSourceData = new ComponentDataStructure();
    this.createLayouts();
    this._gridlayoutService.createLayout(this.gridDesktop);
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
    this.gridDesktop = new GridConfig('collapsiblegridlayoutdemo', GridConstants.Desktop)
      .addlayout(["west", "north", "north", "north", "north", "east"])
      .addlayout(["west", "center", "center", "center", "center", "east"])
      .addlayout(["west", "south", "south", "south", "south", "east"]);
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

