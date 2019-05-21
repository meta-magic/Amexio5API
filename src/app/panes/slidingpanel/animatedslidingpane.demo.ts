/**
 * Created by Manisha on 17/5/19.
 */

import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PropertyGridModel} from 'amexio-ng-extensions';

@Component({
  selector: 'animatedsliding-demo',
  templateUrl: './animatedslidingpane.demo.html',
})
export class SlidingPanelDemo {
  copyMsgArray: any[];
  profileKeyValueData: any[] = []

  constructor(private _httpClient: HttpClient) {
   
  }
  
  ngOnInit() {
    this.getData();
  }

  getData() {
    this._httpClient.get('assets/data/componentdata/slidingpanelpropertygrid.json').subscribe(
      (res: any) => {
         this.createProfileGrid(res.profileDetails);
      });
  }

  createProfileGrid(profile: any) {
    this.profileKeyValueData = [];
     
    this.profileKeyValueData.push(new PropertyGridModel('Email id',"john.doe@gmail.com", '', false));
    this.profileKeyValueData.push(new PropertyGridModel('Birth date', '28-Feb-1950 ', '', false));
    this.profileKeyValueData.push(new PropertyGridModel('Mobile Number', '+91-1234567890', '', false));
    this.profileKeyValueData.push(new PropertyGridModel('Country', 'INDIA', '', false));

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


