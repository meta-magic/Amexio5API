/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';


@Component({
  selector: 'floating-button-demo',
  templateUrl:  './floatingbutton.demo.html',
})
export class FloatingButtonDemo implements OnInit{
  asyncFlag: boolean;
  toggle1 = false;
  toggle2 = false;
    
  

  customSourceData: ComponentDataStructure;
  constructor() {
    this.customSourceData = new ComponentDataStructure();

  }
  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'Floating button';
    this.customSourceData.description = 'A Floating button component with various position options (vertical/horizontal/top/bottom/left/right)';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/floatingbutton/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/floatingbutton/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v41-floatingbutton?embed=1&file=app/forms/floatingbutton/floatingbutton.demo.html&view=editor';
  }


  onFloatingButtonClick1(event :any){
    this.toggle1 = !this.toggle1;
    this.toggle2 = false;
  }

  onFloatingButtonClick2(event :any){
    this.toggle2 = !this.toggle2;
    this.toggle1 = false;
  }

}


