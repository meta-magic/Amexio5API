/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'chart-d3-page', 
  template: `
  <amexio-row>
  <amexio-column size="12">
  <amexio-card [header]="false" [show]="'true'">
 
  <amexio-body> 
  <amexio-image [path]="'assets/images/logos/D3_chart_page1.jpg'"[tooltip]="'Image'"></amexio-image>
 
<p><b>D3</b> allows you to bind arbitrary data to a Document Object Model (DOM), 
and then apply data-driven transformations to the document. For example, 
you can use D3 to generate an HTML table from an array of numbers. 
Or, use the same data to create an interactive SVG bar chart with smooth transitions 
and interaction.</p>

<p>D3 is not a monolithic framework that seeks to provide every conceivable feature. 
Instead, D3 solves the crux of the problem: efficient manipulation of documents
based on data. This avoids proprietary representation and affords extraordinary
flexibility, exposing the full capabilities of web standards such as HTML, SVG, and CSS.
With minimal overhead, D3 is extremely fast, supporting large datasets and dynamic 
behaviors for interaction and animation. D3’s functional style allows code reuse 
through a diverse collection of <span style="color: #0000FF"><ins>official</ins></span> and <span style="color: #0000FF"><ins>community-developed</ins></span> modules.</p>

  </amexio-body>
  </amexio-card>
  </amexio-column>
  </amexio-row>


          <amexio-row>
          <amexio-column size="6" [fit]="true">
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
  
          <amexio-column size="6" [fit]="true">
                  <amexio-card [header]="true" [show]="'true'">
                          <amexio-header>
                                  amexio D3-line chart
                          </amexio-header>
                          <amexio-body>
                          <amexio-d3-chart-line [title]="'Popularity Of XYZ & PQR'" [data]="doubleLineData">
                          </amexio-d3-chart-line>
                          </amexio-body>
                  </amexio-card>
          </amexio-column>
  </amexio-row>
  
  
  
  <amexio-row>
  
          <amexio-column size="6" [fit]="true">
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

          <amexio-column size="6" [fit]="true">
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

  <amexio-row>
  <amexio-column size="6" [fit]="true">
  <amexio-card [header]="true" [show]="'true'">
                                    <amexio-header>
                                        Amexio D3-multiseries Chart
                                    </amexio-header>
                                    <amexio-body>
                                        <amexio-d3-chart-multiseries   [data]="stackData" >
                                       </amexio-d3-chart-multiseries>
                                  </amexio-body>
                                </amexio-card>
</amexio-column>

<amexio-column size="6" [fit]="true">
<amexio-card [header]="true" [show]="'true'">
        <amexio-header>
                amexio D3-Stack Bar chart
        </amexio-header>
        <amexio-body>
        <amexio-d3-chart-barstack 
        [data]="stackData"
>
</amexio-d3-chart-barstack> 

        </amexio-body>
</amexio-card>
</amexio-column>
  </amexio-row>
  

  `
})
export class ChartD3Demo implements OnInit {
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
      ['city', 'population'],
      ['Mumbai', 94423],
      ['Kochi', 69932],
      ['Delhi', 91345],
      ['Chennai', 46467],
      ['Pune', 31244],
      ['Jaipur', 30461],
      ['Ranchi', 84436]
    ]
  }
  ngOnInit() {

    this.donutDataColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

    this.donutData =   [
      ['browser', 'activity'],
      ['IE', 39.3],
      ['Chrome', 32.52],
      ['Safari', 13.68],
      ['Firefox', 8.71],
      ['Others', 6.01]
    ];


    this.pieData =  [
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

    this.multiData = [
      ['date', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
      ['2018', 1090, 740, 450],
      ['2019', 1050, 640, 350]
    ];

    this.doubleLineData = [[{ "datatype": "number", "label": "Day" }, { "datatype": "number", "label": "XYZ" }, { "datatype": "number", "label": "PQR" }], [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], [5, 9, 5], [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32], [10, 32, 24], [11, 35, 27], [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39]]

    this.stackData = [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
      ['2018', 1090, 740, 450],
      ['2019', 1050, 640, 350]
    ];
  }


}


