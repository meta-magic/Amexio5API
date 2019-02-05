/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'buttongroup-demo',
  templateUrl:'./buttongroup.demo.html',
})
export class ButtonGroupDemo {

 

  customSourceData: ComponentDataStructure;
  constructor() {
    this.customSourceData = new ComponentDataStructure();

  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Button Group';
    this.customSourceData.description = 'A Button Group component with various modes and configurations.';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/buttongroup/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/buttongroup/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-buttongroup?embed=1&file=app/forms/buttongroup/buttongroup.demo.html&view=editor';
  }


}

