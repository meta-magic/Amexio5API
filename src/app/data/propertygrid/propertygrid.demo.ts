/**
 * Created by dattaram on 22/3/19.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PropertyGridModel} from 'amexio-ng-extensions';

@Component({
   selector: 'propert-grid-demo',
   templateUrl: 'propertygrid.demo.html'
})

export class PropertyGridDemoComponent implements OnInit {

  employeeKeyValueData: any[] = []

  companyKeyValueData: any[] = [];


  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._httpClient.get('assets/data/componentdata/propertygrid.json').subscribe(
      (res: any) => {
        this.createCompanyGrid(res.companyDetails);
        this.createEmployeeGrid(res.employeeDetails);
      });
  }

  createEmployeeGrid(employee: any) {
    this.employeeKeyValueData = [];
    this.employeeKeyValueData.push(new PropertyGridModel('Name', employee.personName , '', false));
    this.employeeKeyValueData.push(new PropertyGridModel('Age', employee.personAge, '', false));
    this.employeeKeyValueData.push(new PropertyGridModel('Designation', employee.designation, '', false));
    this.employeeKeyValueData.push(new PropertyGridModel('Mobile No', employee.mobileNo, '', false));
    this.employeeKeyValueData.push(new PropertyGridModel('Address', employee.address, '', false));
    this.employeeKeyValueData.push(new PropertyGridModel('City', employee.city, '', false));
    this.employeeKeyValueData.push(new PropertyGridModel('Country', employee.country, '', false));
    this.employeeKeyValueData.push(new PropertyGridModel('Pincode', employee.pincode, '', false));

  }

  createCompanyGrid(company: any) {
    this.companyKeyValueData = [];
    this.companyKeyValueData.push(new PropertyGridModel('Company Name', company.companyName , '', false));
    this.companyKeyValueData.push(new PropertyGridModel('Address', company.address, '', false));
    this.companyKeyValueData.push(new PropertyGridModel('City', company.city, '', false));
    this.companyKeyValueData.push(new PropertyGridModel('Country', company.country, '', false));
    this.companyKeyValueData.push(new PropertyGridModel('Pincode', company.pincode, '', false));
  }
}
