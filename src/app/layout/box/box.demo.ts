/**
 * Created by anaghak07 on 13/3/18.
 */
import {Component, OnInit} from '@angular/core';
import {RestCallService} from "../../apimetadata/services/restcall.service";

@Component({
  selector: 'box-demo',
  templateUrl: './box.demo.html',
})
export class BoxDemo implements OnInit{
  copyMsgArray: any[];
  comData: any;
  tempData: any;
  constructor(private _rCService: RestCallService) {}

  ngOnInit(): void {
   this.getComponentData();
   this.tempData = [{
    label: "Label1",
    link: ""
  },
  {
    label: "Label1",
    link: ""
  }]
  }

  getComponentData() {
    this._rCService.getCall('assets/test.json').subscribe(
      (res: any) => {
      this.comData = res;
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


