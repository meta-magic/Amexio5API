/**
 * Created by pratik on 16/1/18.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'window-demo',
  templateUrl:'./window.demo.component.html'
})

export class WindowDemoComponent {

  showBasicWindowMaterial: boolean;
  showBasicDraggableWindowMaterial: boolean;
  showBasicWindowNonMaterial: boolean;
  showBasicWindowNonMateialToolbar: boolean;

  showMaxWindowMaterial: boolean;
  showMaxWindowNonMaterial: boolean;

  showClosableMaterial: boolean;
  showClosableNonMaterial: boolean;
  showDraggableNonMaterial: boolean;

  showBasicMinimizeWindowMaterial: boolean;


  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;
  radioGroupData: any;
  checkboxGroupdata: any;
  constructor() {
    this.radioGroupData = {
      response:{
        data:[{
          gender:'Male',
          genderId:'male'
        },{
          gender:'Female',
          genderId:'female',
        },
        ]
      }
    };
    this.checkboxGroupdata = {
      response:{
        data:[{
          hobbieName:'Learning',
          checked: false,
          disabled : false
        },{
          hobbieName:'Shopping',
          checked: false,
          disabled : false
        },{
          hobbieName:'Fishing',
          checked: false,
          disabled : false
        }
        ]}};
    
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
  toggleDraggableWindow(data: any) {
    if (data == 'material') {
      this.showBasicDraggableWindowMaterial = !this.showBasicDraggableWindowMaterial;
    }
    else if(data == 'nonmaterial') {
      this.showDraggableNonMaterial =! this.showDraggableNonMaterial;
    }
    
  }
  toggleMinimizeWindow(data: any) {
    if (data == 'material') {
      this.showBasicMinimizeWindowMaterial = !this.showBasicMinimizeWindowMaterial;
    }
  }
 
}
