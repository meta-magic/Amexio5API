/**
 * Created by kedar on 28/8/18.
 */

import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as d3 from 'd3';
// import { AmexioChartD3Module } from 'amexio-chart-d3';


@Component({
  selector: 'amexio-d3-chart-donut-demo',
  templateUrl: './d3donutchart.demo.component.html',
})
export class AmexioD3DonutChartDemoComponent implements OnInit {
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode: string;
  userDataSourceCode: string;
  donutChartColor: any;
  donutData: any;
  copyMsgArray: any[];
  sourceData: any;
  userDataSource: any;
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;


  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }

  ngOnInit() {

    this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00","#b9936c"];

    this.defultColorData = 
    [
      ['browser', 'popularity'],
      ['IE', 300],
      ['Chrome', 500],
      ['Safari', 700],
      ['Firefox', 400],
      ['Others', 600]
    ];

    this.userDefineColorData = 
    [
      ['country', 'ratio'],
      ['India', 30.3],
      ['Spain', 9.52],
      ['France', 13.68],
      ['China', 18.71],
      ['Germany', 8.01],
      ['U.K', 8.01],
      ['U.S', 14.01],
      ['Korea', 4.01]
    ];
  }

  onDefaultLegendClick(event: any) {

    this.sourceData = event;

  }

  onDefaultChartClick1(event: any) {
    this.sourceData = event;
  }
  onUserDefineLegendClick(event: any) {

    this.userDataSource = event;
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource: any;
    //HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3donutchart/d3chart.html', { responseType: 'text' }).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3donutchart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3donutchart/datasource.json', { responseType: 'text' }).subscribe(data => {
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

