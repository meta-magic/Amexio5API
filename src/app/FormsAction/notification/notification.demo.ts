/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'notification-demo',
  templateUrl: './notification.demo.html',
})
export class NotificationDemo {
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
  constructor() {}

  closeCookie() {
    this.horizontalRightMessageArray =[];
  }
}


