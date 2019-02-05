/**
 * Created by sagar on 9/1/18.
 */

import { Component, OnInit } from '@angular/core'

import { HttpClient } from '@angular/common/http';
import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';

 
@Component({
  selector: 'card-form-demo',
  templateUrl: './cardform.demo.html'
})
export class CardFormDemo implements OnInit{
 
  copyMsgArray: any[];
  flag: boolean;
  rightclickdata: any;
  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
    this.rightclickdata =
      [{ "text": "Add New", "icon": "fa fa-plus", "disabled": true }, { "text": "Edit", "icon": "", "seperator": true }
        , { "text": "Send data in email", "icon": "" }];
    this.flag = true;
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }


  createCustomSourceData() {
    this.customSourceData.title = 'Card';
    this.customSourceData.description = 'A Simple Card which renders card based on title, body and actions user has configured.';
    this.customSourceData.sourceMetadata.htmlUrl = 'layout/card/carddemo/layout.html';
    this.customSourceData.sourceMetadata.tsUrl = 'layout/card/carddemo/layout.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-card-form?embed=1&file=app/layouts/cardform/cardform.demo.html&view=editor';
  }




  //Toggle event
  toggle() {
    this.flag = !this.flag;
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
}


