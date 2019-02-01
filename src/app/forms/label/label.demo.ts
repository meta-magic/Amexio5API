/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'label-demo',
  templateUrl: './label.demo.html',
})
export class LabelDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  age:number=10;
  comData: ComDataStructure;
  constructor(private http: HttpClient) {
    this.comData = new ComDataStructure()
    this.http.get('assets/test.json').subscribe(
      (res: any) => {
        debugger;
       this.comData = res;
      }
    );
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
 

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




export class ComDataStructure {
  title: string;
  description: string;
  apiRefMetadata: any[] = [];
  sourceMetadata: any;
  liveMetadata: any;
}