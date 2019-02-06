/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'buttondropdown-demo',
  templateUrl: './buttondropdown.demo.html',
  
})
export class ButtonDropDownDemo implements OnInit{
  
  customSourceData: ComponentDataStructure;
  constructor() {
    this.customSourceData = new ComponentDataStructure();

  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Button Dropdown';
    this.customSourceData.description = 'A button component with various modes and configurations.';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/buttondropdown/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/buttondropdown/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-buttondropdown?embed=1&file=app/forms/buttondropdown/buttondropdown.demo.html&view=editor';
  }

}
