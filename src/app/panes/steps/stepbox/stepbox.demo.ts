/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core'
import {Http} from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'step-box', 
  templateUrl: './stepbox.demo.html',
})
export class StepBoxDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  user:boolean;
  shop:boolean;
  payment:boolean;
  confirmation:boolean;
  clickMsgArray:any=[];

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
    this.user=false;
    this.shop=true;
    this.payment=false;
    this.confirmation=false;
  }

// step box click event
  stepBlockClick(event:any){
    if(event.label=="User"){
      this.showMsg("Step 1 User");
      this.updateFlag(true,false,false,false);
    }else if(event.label=="Shop"){
      this.showMsg("Step 2 Shop");
      this.updateFlag(false,true,false,false);
    }else if(event.label=="Payment"){
      this.showMsg("Step 3 Payment");
      this.updateFlag(false,false,true,false);
    }else if(event.label=="Confirmation"){
      this.showMsg("Step 4 Confirmation");
      this.updateFlag(false,false,false,true);
    }
  }
  updateFlag(user:boolean,shop:boolean,payment:boolean,confirmation:boolean){
    this.user=user;
    this.shop=shop;
    this.payment=payment;
    this.confirmation=confirmation;
  }
  showMsg(msg){
    if(this.clickMsgArray.length>=1){
      this.clickMsgArray=[];
      this.clickMsgArray.push(msg);
    }else{
      this.clickMsgArray.push(msg);
    }
  }
  


  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/layout/steps/steps.html',{ responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/layout/steps/steps.text',{ responseType: 'text' }).subscribe(data => {
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
      this.copyMsgArray.push('Code Copied');
    } else {
      this.copyMsgArray.push('Code Copied');
    }
  }
}


