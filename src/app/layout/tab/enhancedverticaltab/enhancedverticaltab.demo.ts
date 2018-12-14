/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core'
import { Http } from "@angular/http";
import { DyanmicVerticalTabComponent } from './dynamicverticaltabdemo.component';

@Component({
  selector: 'enhanced-vertical-tab-demo', templateUrl: 'enhancedverticaltab.demo.html'
})
export class EnhancedVerticalTabDemo {
  htmlCode: string;
  typeScriptCode: string;
  typeScriptCode2: string;
  copyMsgArray: any[];
  constructor(private http: Http) {
    this.getHtmlAndTypeScriptCode();
  }
  // title = 'component';
  tabcountleft: number = 4;
  tabcountright:number =4;
  addtab(tab: any) {
    this.tabcountleft++;
    let title = 'Tab ' + this.tabcountleft;
    let cmp = tab.addDynamicTab(title, "red", true, DyanmicVerticalTabComponent);
    cmp.content = "Content of " + title;
  }
  addrighttab(tab1: any) {
    this.tabcountright++;
    let title = 'Tab ' + this.tabcountright;
    let cmp = tab1.addDynamicTab(title, "red", true, DyanmicVerticalTabComponent);
    cmp.content = "Content of " + title;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let code: any;

    //HTML FILE
    this.http.get('assets/data/code/layout/tab/enhancedverticaltab/tab.html').subscribe(data => {
      responseHtml = data.text();
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/tab/enhancedverticaltab/tab.text').subscribe(data => {
      responseTs = data.text();
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
      //TS FILE
      this.http.get('assets/data/code/layout/tab/enhancedverticaltab/dynamictab.text').subscribe(data => {
        code = data.text();
    }, error => {
    }, () => {
        this.typeScriptCode2 = code;
    });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }
  
}


