/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'rating-demo',
  templateUrl: './rating.demo.html',
})
export class RatingDemo {
  copyMsgArray: any[];
  public max:number = 10;
  public rate:number = 7;
  public profileMaxRate:number = 5;
  public customIconRate:number = 10;
  public customRate:number = 5;
  public profileRate:number = 2;
  public disableProfileRate:number=3;
  public disableProfileMaxRate:number=5;
  public isReadonly:boolean = false;
  titles:any=['Poor','Fair','Average','Good','Excellent'];
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


