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
      {
        "label": "2011",
        "value": 1020,
        "textcolor": "blue"
      },
      {
        "label": "2012",
        "value": 590
      },
      {
        "label": "2013",
        "value": 1260
      },
      {
        "label": "2014",
        "value": 830
      },
      {
        "label": "2015",
        "value": 1030
      },
      {
        "label": "2016",
        "value": 209
      },
      {
        "label": "2017",
        "value": 1006
      }
    ];


    this.userDefineColorData =
      [
        {
          "label": "Mumbai",
          "value": 94423
        },
        {
          "label": "Hyderabad",
          "value": 69932
        },
        {
          "label": "Delhi",
          "value": 91345
        },
        {
          "label": "Chennai",
          "value": 46467
        },
        {
          "label": "Pune",
          "value": 31244
        },
        {
          "label": "Jaipur",
          "value": 30461
        },
        {
          "label": "Bangalore",
          "value": 84436
        }
      ]

  }

  onDefaultLegendClick(event: any) {

    this.sourceData = event;

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