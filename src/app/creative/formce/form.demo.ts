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
  userRegistration:UserRegistration;
  login:LoginModel;
  userLoginModel:UserLoginModel;
  employeeFormModel:EmployeeFormModel
  employeeForm:FormGroup;
  constructor(private fb:FormBuilder) {
      this.userRegistration = new UserRegistration();
      this.login = new LoginModel();
      this.userLoginModel = new UserLoginModel();
      this.employeeFormModel = new EmployeeFormModel();
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
  this.employeeForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Subject: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
       Message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000000)]],
    });
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

export class EmployeeFormModel{
  firstName:string;
  email:string;
  subject:string;
  message:String;
  constructor(){

  }  
}