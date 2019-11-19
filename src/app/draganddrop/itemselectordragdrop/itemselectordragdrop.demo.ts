/**
 * Created by kedar on 11/9/18.
 */

import {Component, ViewChild, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'itemselectordragdrop-demo',
  templateUrl: './itemselectordragdrop.demo.html',
})
export class ItemSelectorDragdropDemo implements OnInit{
  @ViewChild('item',{ static: false}) itemRef: any;

 
  copyMsgArray: any[];
  selectedData: any;
  
  selectedData1: any;

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
    this.customSourceData.title = 'itemselector With Drag Drop Functionality';
    this.customSourceData.description = 'ItemSelector is a specialized with drag and drop functionality. Drag and drop is possible from left to right and vice versa and item selector to panel    ';
    this.customSourceData.sourceMetadata.htmlUrl = 'draganddrop/itemselectordragdrop/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'draganddrop/itemselectordragdrop/form.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/selectordata.json';    
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-itemselector-draganddrop?embed=1&file=src/app/itemselector/itemselector.demo.component.html&view=editor';
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
  getDropData(event: any) {
    this.itemRef.removeNode(event);
  }
  drag(data: any) {
    data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
  }

  dragOver(event: any) {
    event.preventDefault();
  }

  drop(event: any) {
    event.preventDefault();
    this.selectedData = JSON.parse(event.dataTransfer.getData('dragdata'))
  }
}


