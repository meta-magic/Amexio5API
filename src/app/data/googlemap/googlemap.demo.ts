/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core';
import { GoogleMapOverlays } from 'amexio-ng-extensions';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'googlemap-demo',
  templateUrl: './googlemap.demo.html'
})
export class GoogleMapDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  data : GoogleMapOverlays[];
  markerdata : GoogleMapOverlays;
  script : string;

  constructor(private http: HttpClient) {
    // this.script = "<script type='text/javascript' src='https://maps.google.com/maps/api/js?key=your-key' async=''></script>"
    this.getHtmlAndTypeScriptCode();
    this.data = [];
    this.data.push(new GoogleMapOverlays(43.653225,-79.383186,'Toronto, Canada',true,null,{country:'Canada', capital:'Toronto', population:'20, Million'}));
    this.data.push(new GoogleMapOverlays(39.904202, 116.407394,'Beijing, China',true,null,{country:'China', capital:'Beijing',population:'21, Million'}));
 this.data.push(new GoogleMapOverlays(-6.175110, 106.865036 ,'Jakarta, Indonesia',true,null,{country:'Indonesia', capital:'Jakarta', population:'9, Million'}));
this.data.push(new GoogleMapOverlays(-15.826691, -47.921822,'Brasília, Brazil',true,null,{country:'Brazil', capital:'Brasília', population:'2.41, Million'}));
this.data.push(new GoogleMapOverlays(9.0765, 7.3986,'Abuja, Nigeria',true,null,{country:'Nigeria', capital:'Abuja', population:'776,298'}));
this.data.push(new GoogleMapOverlays(23.8103, 90.4125 ,'Dhaka, Bangladesh',true,null,{country:'Bangladesh', capital:'Dhaka', population:'8, Million'}));
this.data.push(new GoogleMapOverlays(55.7558, 37.6173,'Moscow, Russia',true,null,{country:'Russia', capital:'Moscow', population:'11, Million'}));
this.data.push(new GoogleMapOverlays(35.6895, 139.6917,'Tokyo, Japan',true,null,{country:'Japan', capital:'Tokyo', population:'9.73, Million'}));
this.data.push(new GoogleMapOverlays(19.4326, - 99.1332,'Mexico City, Mexico',true,null,{country:'Mexico', capital:'Mexico City', population:'8.51, Million'}));
this.data.push(new GoogleMapOverlays(14.5995, 120.9842 ,'Manila, Philippines',true,null,{country:'Philippines', capital:'Manila', population:'1.73, Million'}));
this.data.push(new GoogleMapOverlays(8.9806, 38.7578,'Addis Ababa, Ethiopia',true,null,{country:'Ethiopia', capital:'Addis Ababa', population:'33, Lakh'}));
this.data.push(new GoogleMapOverlays(30.0444, 31.2357,'Cairo, Egypt',true,null,{country:'Egypt', capital:'Cairo', population:'19, Million'}));
this.data.push(new GoogleMapOverlays(35.6892, 51.3890,'Tehran, Iran',true,null,{country:'Iran', capital:'Tehran', population:'8.96, Million'}));
this.data.push(new GoogleMapOverlays(52.5200, 13.4050,'Berlin, Germany',true,null,{country:'Germany', capital:'Berlin', population:'3.57, Million'}));
this.data.push(new GoogleMapOverlays(39.9334, 32.8597,'Ankara, Turkey',true,null,{country:'Turkey', capital:'Ankara', population:'5.44, Million'}));
this.data.push(new GoogleMapOverlays(13.7563, 100.5018,'Bangkok, Thailand',true,null,{country:'Thailand', capital:'Bangkok', population:'8, Million'}));
this.data.push(new GoogleMapOverlays(48.8566, 2.3522,'Paris, France',true,null,{country:'France', capital:'Paris', population:'2.2, Million'}));
this.data.push(new GoogleMapOverlays(51.5074, -0.1278,'london, United Kingdom',true,null,{country:'United Kingdom', capital:'london', population:'8.1, Million'}));
this.data.push(new GoogleMapOverlays(41.9028, 12.4964,'Rome, Italy',true,null,{country:'Italy', capital:'Rome', population:',2.8 Million'}));
this.data.push(new GoogleMapOverlays(-33.9249, 18.4241,'Cape Town, South Africa',true,null,{country:'South Africa', capital:'Cape Town', population:',4 Lakh'}));
this.data.push(new GoogleMapOverlays(40.4168, -3.7038,'Madrid, Spain',true,null,{country:'Spain', capital:'Madrid', population:',3.16 Million'}));
this.data.push(new GoogleMapOverlays(50.4501, 30.5234,'Kiev, Ukraine',true,null,{country:'Ukraine', capital:'Kiev', population:',2.8 Million'}));
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
    this.http.get('assets/data/code/data/googlemap/googlemap.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/data/googlemap/googlemap.text', { responseType: 'text' }).subscribe(data => {
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


