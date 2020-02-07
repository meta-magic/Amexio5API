/**
 * Created by kedar on 1/11/19.
 */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'browserpanel-demo',
  templateUrl: 'browser-panel.demo.html',
})

export class BrowserPanelDemoComponent {

  copyMsgArray: any[];
  link: any;
  showInfoWindow= false;
  currentNews: any;
  d1: any;
  d2: any;
  constructor(private http: HttpClient) {
    
    this.http.get('assets/apireference/data/browser-panel.json').subscribe((res) => {
      this.currentNews = res;
    })
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

  openTab(data: any){
    this.showInfoWindow = !this.showInfoWindow;
    this.link = data.link;
  }
}
