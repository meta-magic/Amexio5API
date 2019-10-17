import { Component } from '@angular/core';
@Component({
  selector: 'dynamic-text-demo',
  templateUrl: './dynamic-text.html',
})
export class DynamicTextDemo {
  title = 'routinglink';
  placeholderData: any;

  typeScriptCode: string;
  htmlCode: string;
  sourceData: any;
  stackData: any;
  copyMsgArray: any[];
  inputData: any;
  constructor() {

    this.placeholderData = {
     
        "customer": "John Doe",
        "rs": "877.00",
        "accountNo": "**** 7854",
        "id": "78521",
        "refNo": "7854122896",
        "custcare": "1800 4521 1012 2566",
        "regardsBy" : "HDFC Manager",
        "date": "12-10-2019"
    }

    this.inputData =
    [{
            "name": "placeholder",
            "description": "object can be passed to set dyanmic texts",
            "version": "5.20 onwards",
            "type": "any",
            "default": ""
    }
    ]
  }

}
