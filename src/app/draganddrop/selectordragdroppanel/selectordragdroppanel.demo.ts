/**
 * Created by kedar on 11/9/18.
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'selectordragdrop-panel',
  templateUrl :'./selectordragdroppanel.demo.html',

})
export class ItemSelectorDragdropPanel implements OnInit{
  @ViewChild('item',{ static: false}) itemRef: any;


  copyMsgArray: any[];
  selectedData: any;
 
  selectedPanelData: any; 
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }
  getSelectedData(data: any) {
    this.selectedData = data;
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  
  createCustomSourceData() {
    this.customSourceData.title = 'Tree With Drag Drop Functionality';
    this.customSourceData.description = 'A panel component which create Tree View based on standard datasource attached and having functionality of drag and drop: within Tree.';
    this.customSourceData.sourceMetadata.htmlUrl = 'draganddrop/selectordragdroppanel/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'draganddrop/selectordragdroppanel/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dragdroppanel?embed=1&file=app/tree/acrosstree/acrosstree.demo.html&view=editor';
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
  getDropData(data: any) {   
    data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
  }
  dragOver(event: any){
    event.preventDefault();
  }
  drop(event: any) {
    event.preventDefault();
    this.selectedPanelData = JSON.parse(event.dataTransfer.getData('dragdata'))
  }
}


