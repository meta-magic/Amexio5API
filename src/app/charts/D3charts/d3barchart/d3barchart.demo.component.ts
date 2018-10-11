import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amexio-d3-chart-bar-demo',
  templateUrl: './d3barchart.demo.component.html'
})
export class AmexioD3BarChartDemoComponent implements OnInit {

  htmlCode: string;
  typeScriptCode: string;
  userDataSourceCode: string;
  dataSourceCode: string;
  copyMsgArray: any[];
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;
  sourceData: any;
  userDataSource: any;
  barChartWithColorData: any;
  barData: any;

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }


  ngOnInit() {
    this.userDefineColors =
      [
        "#4040a1",
        "#e06377",
        " #7e4a35",
        "#6b5b95",
        "#feb236",
        "#d64161",
        "#ff7b25"
      ]
    this.defultColorData = [
      ['year', 'performance'],
      ['2011', 1020],
      ['2012', 590],
      ['2013', 1260],
      ['2014', 830],
      ['2015', 1030],
      ['2016', 209],
      ['2017', 1006]
    ];

    this.userDefineColorData =
    [
      ['city', 'population'],
      ['Mumbai', 94423],
      ['Kochi', 69932],
      ['Delhi', 91345],
      ['Chennai', 46467],
      ['Pune', 31244],
      ['Jaipur', 30461],
      ['Ranchi', 84436]
    ];

      this.barData = 
      [
        ['year', 'production'],
        ['2011', 300],
        ['2012', 500],
        ['2013', 700],
        ['2014', 400],
        ['2015', 600],
        ['2016', 500],
        ['2017', 200]
      ];
       
  }

  onDefaultLegendClick(event: any) {

    this.sourceData = event;

  }

  onDefaultChartClick1(event: any) {
    this.sourceData = event;
  }
  

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick(event: any) {

    this.userDataSource = event;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    //HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barchart/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    // TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barchart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    // DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barchart/datasource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });

    // User DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barchart/usersource.json', { responseType: 'text' }).subscribe(data => {
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
