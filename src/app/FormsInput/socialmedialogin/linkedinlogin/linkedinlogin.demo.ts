/**
 * Created by sagar on 25/1/19.
 */
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'linkedin-login-demo', 
  templateUrl :'./linkedinlogin.demo.html',
})
export class LinkedinLoginDemo {
 
  copyMsgArray: any[];
  linkedinLoginData: any;
  constructor(private http: HttpClient) {

  }

  onLoginClick(data: any) {
    this.linkedinLoginData = data;
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


