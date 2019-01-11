/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GoogleMapOverlays } from 'amexio-ng-extensions';


@Component({
  selector: 'googlemap-demo',
  templateUrl: './googlemap.demo.html'
})
export class GoogleMapDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  overlays : GoogleMapOverlays[];
  markerdata : GoogleMapOverlays;

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.overlays = [];
    this.overlays.push(new GoogleMapOverlays(43.653225,-79.383186,'Toronto, Canada',true,null,{country:'Canada', population:'20, Million'}));
    this.overlays.push(new GoogleMapOverlays(51.507351,-0.127758,'London, UK',true,null,{country:'UK', population:'30, Million'}));
    this.overlays.push(new GoogleMapOverlays(20.593683,78.962883,'Mumbai, India',true,null,{country:'India', population:'120, Million'}));
    this.overlays.push(new GoogleMapOverlays(61.524010,105.318756,'Russia, Moscow',true,null,{country:'Russia', population:'40, Million'}));
    this.overlays.push(new GoogleMapOverlays(-33.868820,151.209290,'Australia, Sydney',true,null,{country:'Australia', population:'10, Million'}));

  }

  onMarkerClick(event:GoogleMapOverlays){
    this.markerdata = event;
  }
  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/forms/button/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/button/form.text', { responseType: 'text' }).subscribe(data => {
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
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }
}


