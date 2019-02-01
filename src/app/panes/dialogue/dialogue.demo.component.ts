/**
 * Created by pratik on 16/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dialogue-demo', 
  templateUrl: './dialogue.demo.component.html',
})

export class DialogueDemoComponent {

  showBasicWindow: boolean;
  showMaxWindow: boolean;
  showClosable: boolean;

  confirmdialoguematerial: boolean;
  confirmdialoguenonmaterial:boolean;

  errordialoguematerial: boolean;
  errordialoguenonmaterial:boolean;

  warningdialoguematerial: boolean;
  warningdialoguenonmaterial: boolean;

  helpdialoguenonmaterial:boolean;
  helpdialoguematerial:boolean;

  customdialoguematerial: boolean;
  customdialoguenonmaterial:boolean;


  helpdialogue: boolean;
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
    this.http.get('assets/data/code/pane/dialogue/dialogue.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/dialogue/dialogue.text',{responseType: 'text'}).subscribe(data => {
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
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }


  toggleConfirm(data: any) {
    if(data=='material'){
      this.confirmdialoguematerial = !this.confirmdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.confirmdialoguenonmaterial = !this.confirmdialoguenonmaterial;

    }
  }

  toggleError(data:any) {
    if(data=='material'){
      this.errordialoguematerial = !this.errordialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.errordialoguenonmaterial = !this.errordialoguenonmaterial;

    }
  }


  toggleWarning(data:any) {
    if(data=='material'){
      this.warningdialoguematerial = !this.warningdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.warningdialoguenonmaterial = !this.warningdialoguenonmaterial;

    }
  }

  toggleHelp(data:any) {
    if(data=='material'){
      this.helpdialoguematerial = !this.helpdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.helpdialoguenonmaterial = !this.helpdialoguenonmaterial;

    }
  }


  toggleCustom(data:any) {
    if(data=='material'){
      this.customdialoguematerial = !this.customdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.customdialoguenonmaterial = !this.customdialoguenonmaterial;

    }
  }

}
