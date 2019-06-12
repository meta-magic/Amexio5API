/**
 * Created by sagar on 25/1/19.
 */
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'github-login-demo',
  templateUrl: './githublogin.demo.html',
})
export class GitHubLoginDemo {
  
  copyMsgArray: any[];
  githubLoginData: any;
  constructor(private http: HttpClient) {
 
  }

  onLoginClick(data: any) {    
    this.githubLoginData = data;
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


