import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amexio-d3-chart-combo-demo',
  templateUrl: './d3combochart.demo.component.html'
})
export class AmexioD3ComboChartDemoComponent implements OnInit {

  htmlCode: string;
  typeScriptCode: string;
  userDataSourceCode: string;
  dataSourceCode: string;
  copyMsgArray: any[];
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;
  sourceData: any;
  userDataSourcesc4: any;
  userDataSourcesc1: any;
  userDataSourcesc2: any;
  userDataSourcesc3: any;
  lineArray: any[] = [];
  lineArray2: any[] = [];
  barArray: any[] = [];
  barChartWithColorData: any;
  barData: any;
  sourceData1: any;
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }


  ngOnInit() {
    this.barData = [
      ['State', 'Corn Export', 'Bajra Export', 'Rice Export', 'Wheat Export', 'Jowar Export'],
      ['Andhra Pradesh', 600, 500, 250, 50, 95],
      ['Kerala', 500, 400, 75, 150, 195],
      ['Tamil Nadu', 400, 300, 250, 50, 95],
      ['Assam', 250, 150, 75, 150, 195],
      ['Maharshtra', 300, 200, 250, 50, 95]
    ];
    this.lineArray = [
      { column: "Rice Export", label: true, color: "green" },
      { column: "Jowar Export" },
      { column: "Wheat Export" }
    ];
    this.lineArray2 = [
      { column: "Jowar Export" },
      { column: "Wheat Export", label: true }
    ];
    this.barArray = [
      { column: "Corn Export", label: true },
      { column: "Bajra Export", label: true }];
  }
  //scenario 1 bar + line + data
  onDefaultChartClicksc1(event: any) {
    this.userDataSourcesc1 = event;
  }

  onDefaultLineClicksc1(event: any) {
    this.userDataSourcesc1 = event;
  }

  onUserDefineLegendClicksc1(event: any) {
    this.userDataSourcesc1 = event;
  }

  //scenario 2 line + data
  onDefaultChartClicksc2(event: any) {
    this.userDataSourcesc2 = event;
  }

  onDefaultLineClicksc2(event: any) {
    this.userDataSourcesc2 = event;
  }

  onUserDefineLegendClicksc2(event: any) {
    this.userDataSourcesc4 = event;
  }

  //scenario 3 bar + data
  onDefaultChartClicksc3(event: any) {
    this.userDataSourcesc3 = event;
  }

  onDefaultLineClicksc3(event: any) {
    this.userDataSourcesc3 = event;
  }

  onUserDefineLegendClicksc3(event: any) {

    this.userDataSourcesc3 = event;
  }

  //scenario 4 data
  onDefaultChartClicksc4(event: any) {
    this.userDataSourcesc4 = event;
  }

  onDefaultLineClicksc4(event: any) {
    this.userDataSourcesc4 = event;
  }

  onUserDefineLegendClicksc4(event: any) {

    this.userDataSourcesc4 = event;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    //HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3combochart/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3combochart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    // DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3combochart/datasource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });

    // User DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3combochart/usersource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.userDataSourceCode = responseTs;
    });

  }

  //this code use copy to html code from tabpanel
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }



}
