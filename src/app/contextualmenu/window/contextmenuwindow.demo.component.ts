/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'contextmenu-window',
  templateUrl: './contextmenuwindow.demo.component.html',
})

export class ContextMenuWindowDemoComponent {

  showBasicWindowMaterial: boolean;
  showBasicWindowNonMaterial: boolean;

  showMaxWindowMaterial: boolean;
  showMaxWindowNonMaterial: boolean;

  showClosableMaterial: boolean;
  showClosableNonMaterial: boolean;

  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  rightclickdata: any;
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

    this.rightclickdata =
      [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];
  }
  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Window with Context Menu ';
    this.customSourceData.description = 'Window Pane component is a customizable Modal Pane in which user can enter custom content';
    this.customSourceData.sourceMetadata.htmlUrl = 'pane/contextmenuwindow/window.html';
    this.customSourceData.sourceMetadata.tsUrl = 'pane/contextmenuwindow/window.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-window-contextmenu-demo?embed=1&file=src/app/contextualmenu/window/window.demo.component.html&view=editor';
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

  toggleBasicWindow(data: any) {
    if (data == 'material') {
      this.showBasicWindowMaterial = !this.showBasicWindowMaterial;
    }
    else {
      this.showBasicWindowNonMaterial = !this.showBasicWindowNonMaterial;
    }

  }
  toggleMaxWindow(data: any) {
    if (data == 'material') {
      this.showMaxWindowMaterial = !this.showMaxWindowMaterial;
    }
    else {
      this.showMaxWindowNonMaterial = !this.showMaxWindowNonMaterial;
    }
  }


  toggleClosable(data: any) {
    if (data == 'material') {
      this.showClosableMaterial = !this.showClosableMaterial;
    }
    else {
      this.showClosableNonMaterial = !this.showClosableNonMaterial;
    }
  }


}
