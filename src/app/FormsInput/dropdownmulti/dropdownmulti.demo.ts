/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dropdownmulti',
  templateUrl: './dropdownmulti.demo.html',
})
export class DropDownMultiDemo {
  
  copyMsgArray: any[];
  listOfFriut: any = [];

  constructor(private http: HttpClient) {
  }

  onMultiSelectValue(data: any) {
    this.listOfFriut=[];
    data.forEach((obj) => {
      this.listOfFriut.push(obj);
    });
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


