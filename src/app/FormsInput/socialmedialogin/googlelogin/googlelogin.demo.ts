/**
 * Created by sagar on 25/1/19.
 */
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'google-login-demo',
  templateUrl: './googlelogin.demo.html',
})
export class GoogleLoginDemo {
  
  copyMsgArray: any[];
  googleLoginData: any;
  constructor(private http: HttpClient) {
 
  }

  onLoginClick(data: any) {    
    this.googleLoginData = data;
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


