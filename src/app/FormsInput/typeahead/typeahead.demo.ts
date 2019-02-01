/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'typeahead-demo',
  templateUrl :'./typeahead.demo.html',
})
export class TypeAheadDemo {
  country: any;
  copyMsgArray: any[];
  typeAHeadData: any;
  name: string;
  constructor() {
    this.typeAHeadData = {
      "data": [{"sportName": "Cricket", "code": "Ck"}, {"sportName": "Swimming", "code": "Sw"}, {
        "sportName": "Golf",
        "code": "Glf"
      }, {"sportName": "Hockey", "code": "Hky"}, {"sportName": "Soccer", "code": "Scr"}, {
        "sportName": "Formula One",
        "code": "F1"
      }]
    };
  }

  onTypeheadClick(data:any){
    this.name=data.name;
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


