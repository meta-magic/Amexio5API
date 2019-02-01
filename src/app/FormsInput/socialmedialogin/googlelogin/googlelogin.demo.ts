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
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  googleLoginData: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  onLoginClick(data: any) {
    this.googleLoginData = data;
  }

  // TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    // HTML FILE
    this.http.get('assets/data/code/forms/googlelogin/form.html', {responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/forms/googlelogin/form.text', {responseType: 'text'}).subscribe(data => {
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


