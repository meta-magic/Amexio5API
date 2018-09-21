/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'chart-d3-page', template: `
   

          <amexio-row>
          <amexio-column size="6">
                  <amexio-card [header]="true" [show]="'true'">
                          <amexio-header>
                                  amexio D3-bar chart
                          </amexio-header>
                          <amexio-body>
                                  <amexio-d3-chart-bar [title]="'Population of Cities in India'" [color]="userDefineColors"
                                          [data]="userDefineColorData">
                                  </amexio-d3-chart-bar>
                          </amexio-body>
                  </amexio-card>
          </amexio-column>
  
          <amexio-column size="6">
                  <amexio-card [header]="true" [show]="'true'">
                          <amexio-header>
                                  amexio D3-stack bar chart
                          </amexio-header>
                          <amexio-body>
                          <amexio-d3-chart-line [title]="'Popularity Of XYZ & PQR'" [data]="doubleLineData">
                          </amexio-d3-chart-line>
                          </amexio-body>
                  </amexio-card>
          </amexio-column>
  </amexio-row>
  
  
  
  <amexio-row>
  
          <amexio-column size="6">
                  <amexio-card [header]="true" [show]="'true'">
                          <amexio-header>
                                  amexio D3-donut chart
                          </amexio-header>
                          <amexio-body>
                          <amexio-d3-chart-donut [title]="'Visiter Visit Browse Ratio'" [color]="donutDataColor"
                          [data]="donutData">
                  </amexio-d3-chart-donut>
                          </amexio-body>
                  </amexio-card>
          </amexio-column>

          <amexio-column size="6">
          <amexio-card [header]="true" [show]="'true'">
                  <amexio-header>
                          amexio D3-pie chart
                  </amexio-header>
                  <amexio-body>
                          <amexio-d3-chart-pie [title]="'Visiter Visit Country Ratio'" [color]="donutDataColor"
                                  [data]="pieData">
                          </amexio-d3-chart-pie>
                  </amexio-body>
          </amexio-card>
  </amexio-column>
  </amexio-row>
  

  `
})
export class ChartD3Demo implements OnInit{
  htmlCode: string;
  typeScriptCode: string;
  userDefineColorData: any;
  userDefineColors: any;
  sourceData: any;
  stackData: any;
  copyMsgArray: any[];
  donutData: any;
  pieData: any;
  donutDataColor: any;
  doubleLineData: any;
  multiData: any;

  constructor(private http: HttpClient) {

    
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
    this.userDefineColorData =
      [
        {
          "label": "Mumbai",
          "value": 94423
        },
        {
          "label": "Kochi",
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
          "label": "Ranchi",
          "value": 84436
        }
      ]
    
  }
  ngOnInit() {

    this.donutDataColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

    this.donutData = [
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
    

    this.pieData = [
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
  
    this.multiData = [
      ['date', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
      ['2018', 1090, 740, 450],
      ['2019', 1050, 640, 350]
    ];

    this.doubleLineData =[[{"datatype":"number","label":"Day"},{"datatype":"number","label":"XYZ"},{"datatype":"number","label":"PQR"}],[0,0,0],[1,10,5],[2,23,15],[3,17,9],[4,18,10],[5,9,5],[6,11,3],[7,27,19],[8,33,25],[9,40,32],[10,32,24],[11,35,27],[12,30,22],[13,40,32],[14,42,34],[15,47,39]]
  
    this.stackData =[
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
      ['2019', 1090, 740, 450],
      ['2019', 1050, 640, 350]
    ];
  }
  

}


