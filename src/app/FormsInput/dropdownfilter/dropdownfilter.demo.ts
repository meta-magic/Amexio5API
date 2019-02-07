/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'dropdownfilter', 
  templateUrl: './dropdownfilter.demo.html',
})
export class DropDownFilterDemo implements OnInit{
  
  copyMsgArray: any[];
  countryCode1:string;
  sportName: any;
  

  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Dropdown Filter ';
    this.customSourceData.description = 'Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/dropdownfilter/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/dropdownfilter/form.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown-filter?embed=1&file=app/forms/dropdownfilter/dropdownfilter.demo.html&view=editor';
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


