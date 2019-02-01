/**
 * Created by ankita on 11/10/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioCreditCardModel } from 'amexio-ng-extensions';

@Component({
  selector: 'credit-card-demo',
  templateUrl: './creditcard.demo.html',
})
export class CreditCardDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  refreshDialogue: boolean;
  creditcard: AmexioCreditCardModel;
  constructor(private http: HttpClient) {
    this.creditcard = new AmexioCreditCardModel();
    this.getHtmlAndTypeScriptCode();
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
    this.http.get('assets/data/code/forms/creditcard/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/forms/creditcard/form.text', { responseType: 'text' }).subscribe(data => {
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

  refreshData() {
    this.refreshDialogue = !this.refreshDialogue;
  }

}


