/**
 * Created by ankita on 11/6/209
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'speechbubble-demo', 
  templateUrl: './speechbubble.demo.html',
})
export class SpeechBubbleDemo {
  
  copyMsgArray: any[];
  menuoption:any;
 
  constructor(private http: HttpClient) {
    this.menuoption = [{
        label: "Reply",
        link: "",
        icon: "fa fa-reply"
      }, {
        label: "Forward Msg",
        link: "",
        icon:"fa fa-forward"
      }, {
        label: "Star Msg",
        link: "",
        icon:"fa fa-star"
      }, {
        label: "Delete Msg",
        link: "",
        icon:"fa fa-trash"
      }]
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