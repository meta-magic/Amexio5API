/**
 * Created by kedar kokil on 22/11/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveform.demo.html',
})

export class HtmlReactiveFormComponent implements OnInit {

  htmlCode; typeScriptCode; checkboxGroupdata: any;
  copyMsgArray: any = [];
  age: number;
  radioGroupData: any[] = [];
  employeeForm: FormGroup;
  employeeFormInsideForm: FormGroup;
  addressForm: FormGroup;
  address: Address;
  employeeFormGroup: FormGroup;
  enableFieldSet: boolean;
  emplpoyeeRegistration: EmplpoyeeRegistration;
  registration:Registration;
  registration1:Registration;
  dynamicFormsReg:DynamicFormsReg;
  // TO DYNAMIC FORMS
  dynamicEmployeeForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.address = new Address();
    this.emplpoyeeRegistration = new EmplpoyeeRegistration();
    this.registration1 = new Registration();
    this.registration = new Registration();
    this.dynamicFormsReg = new DynamicFormsReg();
    this.radioGroupData = [{
      genderName: 'Male',
      genderId: 'male'
    }, {
      genderName: 'Female',
      genderId: 'female'
    }];

    this.getHtmlAndTypeScriptCode();
  }
  ngOnInit() {
    this.employeeForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      Gender: ['', [Validators.required]],
      Agree: ['', [Validators.required, Validators.requiredTrue]]
    });


    //HERE EMP FORM VALIDATION ADDED
    this.employeeFormInsideForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      Gender: ['', [Validators.required]],
      Agree: ['', [Validators.required, Validators.requiredTrue]]
    });

    //HERE INNER ADDRESS FORM VALIDATION ADDED
    this.addressForm = this.fb.group({
      TemporaryAddress: ['', [Validators.required]],
      PermanentAddress: ['', [Validators.required]]
    });

    // froms inside group

    this.employeeFormGroup = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      Gender: ['', [Validators.required]],
      Agree: ['', [Validators.required, Validators.requiredTrue]],
      AddressFormGroup: new FormGroup({
        temporaryAddress: new FormControl('', Validators.required),
        permanentAddress: new FormControl('', Validators.required)
      })
    });

    this.dynamicEmployeeForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      Gender: ['', [Validators.required]],
      Agree: ['', [Validators.required, Validators.requiredTrue]],
      phones : this.fb.array([])
    });
  }

  // GET PHONE FORMS
  get phoneForms() {
    return this.dynamicEmployeeForm.get('phones') as FormArray;
  }

  // ADD PHONE NUMBER
  addPhone() {
    const phone = this.fb.group({
      phoneLabel: ['', [Validators.required]],
      countryCode: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[0-9 ]*')]]
    });
    this.phoneForms.push(phone);
  }

  // THIS EVENT FIRE WHEN USER ADD PHONE NUMBER
  addPhoneClick() {
    this.enableFieldSet = true;
    this.dynamicFormsReg.add(new Phone());
    this.addPhone();
  }
  //THIS METHOD IS USED FOR MAKING PERMANENT ADDRESS AS TEMP ADDRESS BASE UPON CHECKED
  onCheckClick1(data: any) {
    if (data) {
      this.registration.address.perAddress = this.registration.address.tempAddress;
    }
  }

  onCheckClick2(data: any) {
    if (data) {
      this.registration1.address.perAddress = this.registration1.address.tempAddress;
    }
  }

  onDeleteClick(index: number) {
    this.phoneForms.removeAt(index);
  }

  onAddClick(data:any) {
    this.dynamicFormsReg.add(data);
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/pane/html-form/reactiveform/form.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/html-form/reactiveform/form.text', { responseType: 'text' }).subscribe(data => {
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


}


//THIS MODEL CLASS IS USED FOR BINDING TO EMPLOYEE ADDRESS
export class Address {
  tempAddress: string;
  perAddress: string;
}


export class EmplpoyeeRegistration {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  agree: any;
  constructor() {
  }
}

export class Registration extends EmplpoyeeRegistration{
  address :Address;
  constructor(){
    super();
    this.address = new Address();
  }
}

export class DynamicFormsReg extends EmplpoyeeRegistration {
  phones: Phone[];
  constructor() {
    super();
    this.phones = [];
  }
  add(phone:Phone) {
    this.phones.push(phone);
  }
}

export class Phone {
  phoneLabel:string;
  countryCode:string;
  phoneNumber:string;
}
