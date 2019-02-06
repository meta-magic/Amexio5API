/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'button-demo',
  templateUrl: './button.demo.html',

})
export class ButtonDemo implements OnInit{
  copyMsgArray: any[];



  customSourceData: ComponentDataStructure;
  constructor() {
    this.customSourceData = new ComponentDataStructure();

  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'button';
    this.customSourceData.description = 'A button component with various modes and configurations.';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/button/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/button/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-button?embed=1&file=app/forms/button/button.demo.html&view=editor';
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


