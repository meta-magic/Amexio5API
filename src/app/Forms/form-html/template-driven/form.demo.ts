/**
 * Created by anaghak07 on 16/4/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmplpoyeeRegistration } from './employee.registration';
@Component({
  selector: 'form-demo',
  templateUrl: 'form.demo.html',
})

export class HtmlFormDemoComponent {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag : boolean;
  refreshDialogue: boolean;
  radioGroupData : any;
  checkboxGroupdata : any;
  currentDate : Date = new Date();
  payment :any;
  userRegistration:UserRegistration;
  emplpoyeeRegistration: EmplpoyeeRegistration;
  firstName:string;
  lastName:string;
  departmentData: any;
  constructor(private http: HttpClient) {
    this.userRegistration = new UserRegistration();
    this.emplpoyeeRegistration = new EmplpoyeeRegistration();
    this.departmentData = [{
      'deptId':'1',
      'deptName' :'Engineering'
    },{
      'deptId':'2',
      'deptName' :'Tech Suppport'
    },{
      'deptId':'3',
      'deptName' :'HR'
    }]
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
        this.payment=[
          {"label": "Open With", "icon": "fa fa-arrows-alt "},
          {"label": "Make a Copy", "icon": "fa fa-files-o","separator":"true"},
          {"label": "Refresh", "icon": "fa fa-refresh"},
          {"label": "Add Star", "icon": "fa fa-star"},
          {"label": "download", "icon": "fa fa-download"},
          {"label": "bookmark", "icon": "fa fa-bookmark"}
        ];

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
    this.http.get('assets/data/code/pane/html-form/form/form.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/html-form/form/form.text',{responseType: 'text'}).subscribe(data => {
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

  refreshData() {
    this.refreshDialogue = !this.refreshDialogue;
  }
}

export class UserRegistration {
  firstName: string;
  lastName: string;
  agree: boolean;
  address: string;
  gender: string;
  hobbies: any[];
  city: string;
  age: number;
  dateOfBirth = new Date();
  email: string;
  password: string;
  constructor() {
    this.hobbies = [];
  }
 }
