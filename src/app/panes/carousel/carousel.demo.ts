/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
 selector: 'carousel-demo',
 
 templateUrl : './carousel.demo.html',
})

export class CarouselDemoComponent{
 
  copyMsgArray: any[];
  asyncFlag : boolean;
  constructor() {
  
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
