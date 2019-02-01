/**
 * Created by ankita on 11/10/18.
 */
import { Component } from '@angular/core';
import { AmexioCreditCardModel } from 'amexio-ng-extensions';

@Component({
  selector: 'credit-card-demo',
  templateUrl: './creditcard.demo.html',
})
export class CreditCardDemo {
  copyMsgArray: any[];
  asyncFlag: boolean;
  creditcard: AmexioCreditCardModel;
  constructor() {
    this.creditcard = new AmexioCreditCardModel();
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


