/**
 * Created by ankita on 19/10/18.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'chips-demo',
    templateUrl:'chips.demo.html'
})
export class ChipsDemo {
    copyMsgArray: any[];
    checkboxGroupdata: any;
    checkboxGroupdatadisabled: any;
    checkboxGroupdatadisabledallitem: any;
    sampledatachips: any;
    sampledatachip:any;
    emitdatachips: any;
    emitdatachip: any;
    multipleemitchips:any;
    multipleemitchip:any
    constructor() {
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
    }
    onChipDataLabelClick(event: any){
      this.emitdatachips  = event;
    }
   
    onChipDataCloseClick(event: any){
      this.emitdatachip = event;
    }
    onChipsLabelClick(event: any){
      this.multipleemitchips  = event;
    }
    onCloseClick(event: any){
      this.multipleemitchip = event;
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


