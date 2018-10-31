import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amexio-d3-chart-bar-stack-demo',
  templateUrl: './d3multiareachart.demo.component.html'
})
export class AmexioD3MultiAreaChartDemoComponent implements OnInit {

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
  multiAreaData:any=[];
  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  ngOnInit() {

    this.multiAreaData = [
      ["date", "index", "open", "close", "high"],
      ["2014", 58.13, 610, 234, 100],
      ["2015", 53.98, 626, 356, 150],
      ["2016", 99.00, 543, 456, 200],
      ["2017", 130.28, 443, 556, 250],
      ["2018", 58.13, 610, 245, 300],
      ["2019", 53.98, 626, 345, 350],
      ["2020", 99.00, 543, 556, 400],
      ["2021", 130.28, 443, 443, 500]
    ];  
                        
  }

  onMultiAreaLegendClick(event: any) {
    this.userDataSource = event;
  }

   onMultiAreaChartClick(event: any) {
    this.userDataSource = event;
  }
 
  // TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    // HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3multiareachart/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //  TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3multiareachart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    // DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3multiareachart/datasource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });

    // User DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3multiareachart/usersource.json', { responseType: 'text' }).subscribe(data => {
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