import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amexio-d3-chart-bar-stack-demo',
  templateUrl: './d3barstackchart.demo.component.html'
})
export class AmexioD3BarStackChartDemoComponent implements OnInit {

  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode: string;
  sourceData: any;
  userDataSourceCode: string;
  copyMsgArray: any[];
  userDataSource: any;
  userDataSource1: any;
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;
  colorArray = [ "blue",
  "yellow",
  "green"];


  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();

  }


  ngOnInit() {

    this.userDefineColorData = [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 375],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
      ['2018', 900, 600, 275],
      ['2019', 600, 1000, 400]
    ];
  }

  onUserDefineLegendClick(event: any) {
    this.userDataSource = event;
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick1(event: any) {
    this.userDataSource1 = event;
  }

  onDefaultChartClick1(event: any) {
    this.userDataSource1 = event;
  }

  // TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    // HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //  TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    // DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/datasource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });

    // User DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barstackchart/usersource.json', { responseType: 'text' }).subscribe(data => {
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