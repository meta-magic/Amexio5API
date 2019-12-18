/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';
import {MultiselectDataModel} from '../../models/multiselect.checkbox.model';

@Component({
  selector: 'dropdownmulti',
  templateUrl: './dropdownmulti.demo.html',
})
export class DropDownMultiDemo implements OnInit{
  
  copyMsgArray: any[];
  listOfFriut: any = [];
  listOfFruits:any =[]
  multiSelectModel:MultiselectDataModel;
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
    this.multiSelectModel = new MultiselectDataModel();
  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Dropdown Multi Select ';
    this.customSourceData.description = 'Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/dropdownmulti/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/dropdownmulti/form.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/fruits.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown-multiselect?embed=1&file=app/forms/dropdownmulti/dropdownmulti.demo.html&view=editor';
  }

  onMultiSelectValue(data: any) {
    this.listOfFriut=[];
    data.forEach((obj) => {
      this.listOfFriut.push(obj);
    });
  }
  onMultiSelectValueData(data:any) {
    this.listOfFruits=[];
    data.forEach((obj) => {
      this.listOfFruits.push(obj);
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
}


