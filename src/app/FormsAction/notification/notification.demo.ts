/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'notification-demo', 
  templateUrl: './notification.demo.html',
})
export class NotificationDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  verticalLeftMessageArray:any=[];
  verticalCenterMessageArray:any=[];
  verticalRightMessageArray:any=[];

  horizontalLeftMessageArray:any=[];
  horizontalCenterMessageArray:any=[];
  horizontalRightMessageArray:any=[];


  verticalLeftNotification(){
    this.verticalLeftMessageArray.push('There are unsaved changes')
  }
  verticalCenterNotification(){
    this.verticalCenterMessageArray.push('We have to update security policy')
  }
  verticalRightNotification(){
    this.verticalRightMessageArray.push('top Right Notification!!!');
  }

  horizontalLeftNotification(){
    this.horizontalLeftMessageArray.push('Order Submitted ')
  }
  horizontalCenterNotification(){
    this.horizontalCenterMessageArray.push('Event Registered')
  }
  horizontalRightNotification(){
    this.horizontalRightMessageArray.push('We use cookies to help our site work, to understand how it is used and analytics cookies to learn more and track the websites performance. By continuing to use this site,you accept our use of cookies.')
  }
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/navigation/notification/navigation.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/notification/navigation.text',{responseType: 'text'}).subscribe(data => {
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

  closeCookie()
  {
    this.horizontalRightMessageArray =[];
  }
}


