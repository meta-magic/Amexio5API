/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'card-image-demo',
  templateUrl: './cardimage.demo.component.html'
})
export class CardImageDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  flag: boolean;
  constructor(private http: HttpClient) {
    this.flag = true;
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs:any;

    //HTML FILE
    this.http.get('assets/data/code/layout/card/cardimage/layout.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/card/cardimage/layout.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
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


