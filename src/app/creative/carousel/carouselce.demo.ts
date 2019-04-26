/**
 * Created by kedar on 24/4/19.
 */
import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
 selector: 'carousel-ce-demo',
 
 templateUrl : './carouselce.demo.html',
})

export class CreativeCarouselComponent{
 
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
