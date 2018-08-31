import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
    selector : 'amexio-d3-chart-pie-demo',
    templateUrl:'./d3piechart.demo.component.html'
})
export class AmexioD3PieChartDemoComponent implements OnInit
{

    htmlCode: string;
    typeScriptCode: string;
    dataSourceCode: string;
    copyMsgArray: any[];
    pieChartData: any;
    pieChartColor: any;
  
  constructor(private http: HttpClient) { 
    this.getHtmlAndTypeScriptCode();
      
  }

 
  ngOnInit() {
    this.pieChartColor = ["#98abc5", "#8a8906", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

    this.pieChartData = [
      {
          "label": "A",
          "value": 180,
          "textcolor": "blue"
      },
      {
          "label": "B",
          "value": 100
      },
      {
          "label": "C",
          "value": 56
      },
      {
          "label": "D",
          "value": 120
      },
      {
          "label": "E",
          "value": 90
      },
      {
          "label": "F",
          "value": 140
      },
      {
          "label": "G",
          "value": 130
      },
      {
          "label": "H",
          "value": 110
      },
      {
          "label": "I",
          "value": 70
      },
      {
          "label": "J",
          "value": 170
      }
    ];

  }


  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource:any;
    //HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3piechart/d3chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3piechart/d3chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
     //DataSource FILE
     this.http.get('assets/data/code/charts/D3Charts/d3piechart/datasource.json',{responseType: 'text'}).subscribe(data => {
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
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }



}