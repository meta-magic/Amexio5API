/**
 * Created by sagar on 9/1/18.
 */

import {Component, ViewChild, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ComponentDataStructure} from "../../apimetadata/models/component.structure";


@Component({
  selector: 'itemselector-demo', 
  templateUrl : './itemselector.demo.html',
})
export class ItemSelectorDemo implements OnInit{
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
    this.customSourceData.title = 'Amexio Item-Selector';
    this.customSourceData.description = 'ItemSelector is a specialized MultiSelect field that renders as a pair of MultiSelect field, one with available options and the other with selected options. A set of buttons in between allows items to be moved between the fields and reordered within the selection.';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/itemselector/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/itemselector/form.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-itemselector?embed=1&file=app/data/itemselector/itemselector.demo.html&view=editor';
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


