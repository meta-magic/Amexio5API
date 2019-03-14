/**
 * Created by Ashwini on 13/03/19.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  ,Validators, FormControl} from "@angular/forms";
@Component({
  selector: 'form-ce-demo', templateUrl: './form.demo.html'
})
export class CreativeFormDemo implements OnInit{
  radioGroupData : any;
  checkboxGroupdata : any;
  currentDate : Date = new Date();
  departmentData : any;
  userRegistration:UserRegistration;
  login:LoginModel;
  userLoginModel:UserLoginModel;
  registrationModel:RegistrationModel;
  constructor(private fb:FormBuilder) {
      this.userRegistration = new UserRegistration();
      this.login = new LoginModel();
      this.userLoginModel = new UserLoginModel();
      this.registrationModel = new RegistrationModel();
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
 ngOnInit(){
  
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
export class RegistrationModel{
    email:String;
    password:string;
    repeatpassword:String;
    constructor(){

    }
}
export class LoginModel {
  userId: string;
  password:string;
  subscribe:boolean;
  constructor() {
    
   }
  }
export class UserLoginModel{
  password:string;
  constructor(){

  }  
}