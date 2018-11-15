/**
 * Created by sagar on 9/1/18.
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'navbar-demo', 
  templateUrl:'./navbar.demo.html',
  
})
export class NavbarDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  dataSource:any;
  topMenuData:any;
  constructor(private http: HttpClient) {
    this.topMenuData = JSON.parse(`[{
      "text": "About Us",
      "submenus": [{
        "text": "Amexio Canvas",
        "link": "https://amexio.tech/amexio-canvas"
      }, {
        "text": "Amexio Themes",
        "link": "https://amexio.tech/amexio-themes"
      }]
    }]
`);

    this.getHtmlAndTypeScriptCode();
  }

  onClick(event:any){
  }

  externalLink(event:any){
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
  let datasourceData:any;
    //HTML FILE
    this.http.get('assets/data/code/navigation/navbar/navigation.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/navigation/navbar/navigation.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //TS FILE
    this.http.get('assets/data/componentdata/navbar.json',{responseType: 'text'}).subscribe(data => {
      datasourceData = data;
    }, error => {
    }, () => {
      this.dataSource = datasourceData;
    });

    this.dataSource = "";
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
}


