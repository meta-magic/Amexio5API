/**
 * Created by rashmi on 5/6/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'dropdowntemplate',
  templateUrl: './dropdowntemplate.demo.html',
})
export class DropDownTemplateDemo {
  
  clickedRowData: any;
  
  id: string;
  copyMsgArray: any[];



  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();

  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Dropdown With Template ';
    this.customSourceData.description = 'Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select.';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/dropdowntemplate/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/dropdowntemplate/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-dropdown-template?embed=1&file=app/forms/dropdown/dropdown.demo.html&view=editor';
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

  getRowData(data: any) {
    this.clickedRowData = data;
  }
}


