/**
 * Created by kedar on 11/9/18.
 */

import { Component, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'selectordragdrop-panel',
  templateUrl :'./selectordragdroppanel.demo.html',

})
export class ItemSelectorDragdropPanel {
  @ViewChild('item') itemRef: any;

  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  selectedData: any;
  dataSource: string;
  selectedPanelData: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }
  getSelectedData(data: any) {
    this.selectedData = data;
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let responseData: any;
    //HTML FILE
    this.http.get('assets/data/code/draganddrop/selectordragdroppanel/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE 
    this.http.get('assets/data/code/draganddrop/selectordragdroppanel/form.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //JSON FILE
    this.http.get('assets/data/componentdata/selectordata.json', { responseType: 'text' }).subscribe(data => {
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
  getDropData(data: any) {   
    data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
  }
  dragOver(event: any){
    event.preventDefault();
  }
  drop(event: any) {
    event.preventDefault();
    this.selectedPanelData = JSON.parse(event.dataTransfer.getData('dragdata'))
  }
}


