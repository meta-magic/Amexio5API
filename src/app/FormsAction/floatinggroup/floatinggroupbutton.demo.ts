/**
 * Created by sagar on 9/1/18.
 */

import {Component, OnInit} from '@angular/core';
import { ComponentDataStructure } from '../../apimetadata/models/component.structure';

@Component({
  selector: 'floating-group-button-demo',
  templateUrl :'./floatinggroupbutton.demo.html',
})
export class FloatingGroupButtonDemo implements OnInit {
  asyncFlag : boolean;
  floatingbuttongroup : any[];
  customSourceData: ComponentDataStructure;
  constructor() {
    this.customSourceData = new ComponentDataStructure();


      this.floatingbuttongroup = [
        {'label':'Facebook', 'icon':'fa fa-facebook','type':'yellow'},
        {'label':'Twitter', 'icon':'fa fa-twitter','type':'green'},
        {'label':'Google', 'icon':'fa fa-google-plus','type':'theme-color'}
      ];
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }
  createCustomSourceData() {
    this.customSourceData.title = 'floating group button';
    this.customSourceData.description = 'A Floating group button component with various position options (vertical/horizontal/top/bottom/left/right)    ';
    this.customSourceData.sourceMetadata.htmlUrl = 'forms/floatinggroupbutton/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'forms/floatinggroupbutton/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v41-floatingbuttongroup?embed=1&file=app/forms/floatingbuttongroup/floatingbuttongroup.demo.html&view=editor';
  }

  onFloatingClick(event:any){
  }

}


