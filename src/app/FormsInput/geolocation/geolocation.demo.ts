/**
 * Created by manisha on 17/6/19.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'geolocation-demo',
  templateUrl :'./geolocation.demo.html',
})
export class GeoLocationDemo {
  copyMsgArray: any[];
  myLocation: any ;
  flag = false;
 
  constructor() {
       
  }

  getCurrentPosition(location: any) { 
   this.myLocation = location;
 
   console.log(this.myLocation);
 
   }

  onClick() {
 this.flag = true;;
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


