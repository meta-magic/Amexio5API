/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { GoogleMapOverlays } from 'amexio-ng-extensions';
import { HttpClient } from "@angular/common/http";
import {PropertyGridModel} from 'amexio-ng-extensions';

@Component({
  selector: 'floatingpanel-demo',
  templateUrl :'./floatingpanel.demo.html'
})

export class FloatingPanelDemoComponent {
 
  copyMsgArray: any[];
 
  refreshDialogue: boolean;
  rightclickdata: any;
  topLeftPanel: boolean = false;
  topRightPanel: boolean = false;
  bottomRightPanel: boolean = false;
  bottomLeftPanel: boolean  =false;
  showFloatingButton : boolean = false;
  showRelativePanel : boolean = false;
  showRelativePanel1 : boolean = false;
  showDragPanel = false;
  showResizePanel= false;
  data : GoogleMapOverlays[];
  markerdata1 : GoogleMapOverlays;
  markerdata2 : GoogleMapOverlays;
  companyKeyValueData: any[] = [];
  constructor(private http: HttpClient) {
    this.data = [];
    this.data.push(new GoogleMapOverlays(43.653225,-79.383186,'Toronto, Canada',true,null,{country:'Canada', capital:'', population:'20, Million'}));
    this.data.push(new GoogleMapOverlays(51.507351,-0.127758,'London, UK',true,null,{country:'UK', population:'30, Million'}));
    this.data.push(new GoogleMapOverlays(20.593683,78.962883,'Mumbai, India',true,null,{country:'India', population:'120, Million'}));
    this.data.push(new GoogleMapOverlays(61.524010,105.318756,'Russia, Moscow',true,null,{country:'Russia', population:'40, Million'}));
    this.data.push(new GoogleMapOverlays(-33.868820,151.209290,'Australia, Sydney',true,null,{country:'Australia', population:'10, Million'}));
    this.createCompanyGrid();
   
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
  showTopLeftPanel() {
    this.topLeftPanel = !this.topLeftPanel;
  }
  showTopRightPanel() {
   this.topRightPanel = !this.topRightPanel;
  }

  showBottomRightPanel () {
   this.bottomRightPanel = !this.bottomRightPanel;
  }
  
  showBottomLeftPanel () {
    this.bottomLeftPanel = !this.bottomLeftPanel;
   }

   onCloseTopLeftPanel(event: any) {
   this.topLeftPanel = event.showPanel;
   }
   onCloseTopRightPanel(event: any) {
     this.topRightPanel = event.showPanel;
  }
  onCloseBottomRightPanel(event: any) {
     this.bottomRightPanel = event.showPanel;
  }
  onCloseBottomLeftPanel(event: any) {
    this.bottomLeftPanel = event.showPanel;
  }
  onMarkerClick1(event:GoogleMapOverlays){
    this.markerdata1 = event;
  }
  onMarkerClick2(event:GoogleMapOverlays){
    this.markerdata2 = event;
  }
  onshowRelativePanel() {
    this.showRelativePanel = !this.showRelativePanel;
  }
  onshowRelativePanelWithToolTip() {
    this.showRelativePanel1 = !this.showRelativePanel1;
  }
  onCloseRelativePanel1(event: any) {
    this.showRelativePanel1 = event.showRelativePanel1
  }
  onCloseRelativePanel(event: any) {
    this.showRelativePanel = event.showRelativePanel;
  }


  onshowDragPanel() {
    this.showDragPanel = !this.showDragPanel;
  }
  onshowResizePanel() {
    this.showResizePanel = !this.showResizePanel;

  }

  onCloseResizePanel1(event:any){
    this.showResizePanel = false;
  }

  onCloseDraggablePanel1(event:any){
    this.showDragPanel = false;
  }
  
  createCompanyGrid() {
    this.companyKeyValueData = [];
    this.companyKeyValueData.push(new PropertyGridModel('Company Name', 'MetaMagic global' , '', false));
    this.companyKeyValueData.push(new PropertyGridModel('Address', 'office 329, Amanora Chamber, Amanora Mall, Hadapsar', '', false));
    this.companyKeyValueData.push(new PropertyGridModel('City', 'Pune', '', false));
    this.companyKeyValueData.push(new PropertyGridModel('Country','India', '', false));
    this.companyKeyValueData.push(new PropertyGridModel('Pincode', '411028', '', false));
  }
}
