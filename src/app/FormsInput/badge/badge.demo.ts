/**
 * Created by sagar on 04/02/19.
 */

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'badge-demo',
  templateUrl: './badge.demo.html'
})
export class BadgeDemo {
  
  copyMsgArray: any[];
  constructor(private http: HttpClient) {
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


