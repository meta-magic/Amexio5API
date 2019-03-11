/**
 * Created by sagar on 04/02/19.
 */

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'homepage-ce-demo', templateUrl: './homepage.demo.html',
  styles: [
  `
  .homepage-cursor {
    cursor:pointer;
  }
  `
  ],
})
export class HomePageDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  contactList: any = [];
  DEMO_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard?type=';
  constructor(private http: HttpClient) {
      this.getHtmlAndTypeScriptCode();
  }

  onHomePageClick(type: string) {
    window.open(this.DEMO_URL + type, '_blank');
  }
  // TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    // HTML FILE
    this.http.get('assets/data/code/creative/homepage/creative.html', {responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/creative/homepage/creative.text', {responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }
}


