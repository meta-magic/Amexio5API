/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'window-demo',
  templateUrl:'./window.demo.component.html'
})

export class WindowDemoComponent {

  showBasicWindowMaterial: boolean;
  showBasicWindowNonMaterial: boolean;
  showBasicWindowNonMateialToolbar: boolean;

  showMaxWindowMaterial: boolean;
  showMaxWindowNonMaterial: boolean;

  showClosableMaterial: boolean;
  showClosableNonMaterial: boolean;

  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  constructor(private http: HttpClient) {
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
    this.http.get('assets/data/code/pane/window/window.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/window/window.text', { responseType: 'text' }).subscribe(data => {
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

  toggleBasicWindow(data: any) {
    if (data == 'material') {
      this.showBasicWindowMaterial = !this.showBasicWindowMaterial;
    }
    else if (data == 'nonmaterial') {
      this.showBasicWindowNonMaterial = !this.showBasicWindowNonMaterial;

    }
    else {
      this.showBasicWindowNonMateialToolbar = !this.showBasicWindowNonMateialToolbar;
    }
  }
  toggleMaxWindow(data: any) {
    if (data == 'material') {
      this.showMaxWindowMaterial = !this.showMaxWindowMaterial;
    }
    else {
      this.showMaxWindowNonMaterial = !this.showMaxWindowNonMaterial;
    }
  }


  toggleClosable(data: any) {
    if (data == 'material') {
      this.showClosableMaterial = !this.showClosableMaterial;
    }
    else {
      this.showClosableNonMaterial = !this.showClosableNonMaterial;
    }
  }


}
