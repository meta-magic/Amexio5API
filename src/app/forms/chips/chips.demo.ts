/**
 * Created by rashmi on 19/10/18.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'chips-demo', templateUrl:'chips.demo.html'
})
export class ChipsDemo {
    htmlCode: string;
    typeScriptCode: string;
    dataSource: string;
    copyMsgArray: any[];
    checkboxGroupdata: any;
    checkboxGroupdatadisabled: any;
    checkboxGroupdatadisabledallitem: any;
    sampledatachips: any;
    sampledatachip:any;
    emitdatachips: any;
    emitdatachip: any;
    constructor(private http: HttpClient) {
      this.sampledatachips = [{
        icon: 'fa fa-home',
        label: 'Home',
        color: 'turquoise',
        badge: 4,
        closable: true
      },
      {
        icon: 'fa fa-download',
        label: "Download",
        color:'lightblue',
        badge: 5,
        closable: false
      }, {
        icon: 'fa fa-camera',
        label: "Camera",
        color: 'lightgreen',
        badge: 6,
        closable: true
      }, {
        icon: 'fa fa-fire-extinguisher',
        label: "Fire Extinguisher",
        color: 'yellow',
        badge: 7,
        closable: true
      }, {
        icon: 'fa fa-ambulance',
        label: "Emergency",
        color: 'pink',
        badge: 8,
        closable: true
      }
      ]
      this.sampledatachip = [{
        icon: 'fa fa-linkedin-square',
        label: 'Linkedin',
        color: 'pink',
        badge: 4,
        closable: true
      },
      {
        icon: 'fa fa-internet-explorer',
        label: "Internet-Explorer",
        color:'lightblue',
        badge: 5,
        closable: false
      }, {
        icon: 'fa fa-github',
        label: "Github",
        color: 'lightgreen',
        badge: 6,
        closable: true
      }, {
        icon: 'fa fa-twitter',
        label: "Twitter",
        color: 'lightblue',
        badge: 7,
        closable: true
      }, {
        icon: 'fa fa-reddit',
        label: "Reddit",
        color: '',
        badge: 8,
        closable: true
      }
      ]
        this.getHtmlAndTypeScriptCode();
    }
    onChipsLabelClick(event: any){
      this.emitdatachips  = event;
    }
    onChipLabelClick(event: any){
      this.emitdatachip = event;
    }

    onCloseClick(event: any){
      this.emitdatachip = event;
    }

    //TO LOAD HTML AND TYPESCRIPT CODE
    getHtmlAndTypeScriptCode() {
        let responseHtml: any;
        let responseTs: any;
        let responseData: any;
        //HTML FILE
        this.http.get('assets/data/code/forms/chips/form.html', { responseType: 'text' }).subscribe(data => {
            responseHtml = data;
        }, error => {
        }, () => {
            this.htmlCode = responseHtml;
        });

        //TS FILE
        this.http.get('assets/data/code/forms/chips/form.text', { responseType: 'text' }).subscribe(data => {
            responseTs = data;
        }, error => {
        }, () => {
            this.typeScriptCode = responseTs;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/chips/datasource.json', { responseType: 'text' }).subscribe(data => {
            responseData = data;
        }, error => {
        }, () => {
            this.dataSource = responseData;
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

}


