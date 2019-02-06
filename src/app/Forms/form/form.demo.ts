/**
 * Created by anaghak07 on 16/4/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmplpoyeeRegistration } from './employee.registration';

import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
  selector: 'form-demo',
  templateUrl: 'form.demo.html',
})

export class FormDemoComponent {
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

  customSourceData: ComponentDataStructure;
  constructor(private http: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
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
  }

  ngOnInit(): void {
    this.createCustomSourceData();
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Form ';
    this.customSourceData.description = 'Amexio Form can be used basically for validation purposes. amexio-form component gives more power over the html form tag. 1. Shows error messages when form is invalid. 2. User need not to add extra validations to inputs .only add min,max,min-length,max-length in amexio input fields';
    this.customSourceData.sourceMetadata.htmlUrl = 'pane/form/form.html';
    this.customSourceData.sourceMetadata.tsUrl = 'pane/form/form.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html&view=editor';
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
