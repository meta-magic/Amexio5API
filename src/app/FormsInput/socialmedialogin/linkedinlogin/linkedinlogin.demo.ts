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
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  linkedinLoginData: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  onLoginClick(data: any) {
    this.linkedinLoginData = data;
  }

  // TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    // HTML FILE
    this.http.get('assets/data/code/forms/linkedinlogin/form.html', {responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/forms/linkedinlogin/form.text', {responseType: 'text'}).subscribe(data => {
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


