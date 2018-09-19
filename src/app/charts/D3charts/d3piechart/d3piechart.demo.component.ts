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
    sourceData: any;
    userDataSourceCode: string;
    copyMsgArray: any[];

    userDataSource: any;
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;

    pieChartData: any;
    pieChartColor: any;
  
  constructor(private http: HttpClient) { 
    this.getHtmlAndTypeScriptCode();
      
  }

 
  ngOnInit() {
    this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];


    this.defultColorData = [
      {
        "label": "IE",
        "value": 39.3
      },
      {
        "label": "Chrome",
        "value": 32.52
      },
      {
        "label": "Safari",
        "value": 13.68
      },
      {
        "label": "Firefox",
        "value": 8.71
      },
      {
        "label": "Others",
        "value": 6.01
      }
    ];

    this.userDefineColorData = [
      {
        "label": "India",
        "value": 30.3,
        "color": "pink"
      },
      {
        "label": "Spain",
        "value": 9.52
      },
      {
        "label": "France",
        "value": 13.68
      },
      {
        "label": "Chaina",
        "value": 18.71
      },
      {
        "label": "Germany",
        "value": 8.01
      },
      {
        "label": "U.K",
        "value": 8.01
      },
      {
        "label": "U.S",
        "value": 14.01
      },
      {
        "label": "Korea",
        "value": 4.01
      }
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

  // TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;
    let dataSource:any;
    // HTML FILE
    this.http.get('assets/data/code/charts/D3Charts/d3piechart/d3chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //  TS FILE
    this.http.get('assets/data/code/charts/D3Charts/d3piechart/d3chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
     // DataSource FILE
     this.http.get('assets/data/code/charts/D3Charts/d3piechart/datasource.json',{responseType: 'text'}).subscribe(data => {
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
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }



}