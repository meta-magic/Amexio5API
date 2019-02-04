/**
 * Created by kedar on 29/5/18.
 */

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dropdownmenu', 
  templateUrl :'./dropdownmenu.demo.html',
})
export class DropDownMenuDemo {

  sourceData: any ;
  htmlCode: string;
  typeScriptCode: string;
  dataSource: string;
  copyMsgArray: any[];
  countryCode1: string;
  payment: any[];
  transport: any[];

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();

  
    this.payment = [
      {"label": "Visa", "icon": "fa fa-cc-visa"},
      {"label": "Paypal", "icon": "fa fa-paypal", "separator": true},
      {"label": "Google wallet", "icon": "fa fa-google-wallet"},
      {"label": "Stripe", "icon": "fa fa-cc-stripe", "separator": true},
      {"label": "Mastercard", "icon": "fa fa-cc-mastercard"},
      {"label": "JCB", "icon": "fa fa-cc-jcb"}

    ];


    this.transport = [
      {"label": "Motorcycle", "icon": "fa fa-motorcycle"},
      {"label": "Plane", "icon": "fa fa-plane"},
      {"label": "Ship", "icon": "fa fa-ship"},
      {"label": "Space shuttle", "icon": "fa fa-space-shuttle"},
      {"label": "Bicycle", "icon": "fa fa-bicycle"},
      {"label": "Rocket", "icon": "fa fa-rocket"}
    ];
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtmlData: any;
    let responseTs: any;
    let responseData: any;
    //HTML FILE
    this.http.get('assets/data/code/navigation/dropdownmenu/form.html', {responseType: 'text'}).subscribe(data => {
      responseHtmlData = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtmlData;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/dropdownmenu/form.text', {responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

    //TS FILE
    // this.http.get('assets/data/componentdata/country.json',{responseType: 'text'}).subscribe(data => {
    //   responseData = data;
    // }, error => {
    // }, () => {
    //   this.dataSource = responseData;
    // });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  onDropDownMenuClick(event: any) {
    
    let jsonData={
      'icon':'',
      'label':'',
      'labelalign':'',
      'iconalign':'',
      'separator':''
    };


    if(event.this.icon ){
      jsonData.icon=event.this.icon;
    }
    if(event.this.label){
      jsonData.label=event.this.label;
    }
    if(event.this.labelalign){
      jsonData.labelalign=event.this.labelalign;
    }
    if(event.this.iconalign){
      jsonData.iconalign=event.this.iconalign;
    }
    if(event.this.separator  ){
      jsonData.separator=event.this.separator;
    }

    this.sourceData = jsonData;
  }
}


