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
  dataSourceCode: string;
  copyMsgArray: any[];
  barChartColor: any;
  barChartData: any;
  barD: any;
  sourceData: any;

  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
  }


  ngOnInit() {
    this.barChartColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

    this.barChartData = [
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

  }

  onLegendItemClick(event: any) {
    
    this.sourceData = event;

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

    //TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barchart/d3chart.text', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/D3Charts/d3barchart/datasource.json', { responseType: 'text' }).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
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