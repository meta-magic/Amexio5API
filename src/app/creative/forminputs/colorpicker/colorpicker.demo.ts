/**
 * Created by Medha on 30/05/18.
 */
import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
 selector: 'colorpicker-demo',
 
 templateUrl : './colorpicker.demo.html',
})

export class ColorPickerDemoComponent{
  color:string;
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
