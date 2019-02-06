import { Component, OnInit} from '@angular/core';

import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'amexio-d3-chart-bar-demo',
  templateUrl: './d3barchart.demo.component.html'
})
export class AmexioD3BarChartDemoComponent implements OnInit {
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;
  sourceData: any;
  userDataSource: any;
  barChartWithColorData: any;
  barData: any;
  sourceData1: any;

  customSourceData: ComponentDataStructure;
  constructor() {
    this.customSourceData = new ComponentDataStructure();
  
  }
  ngOnInit() {
    this.createCustomSourceData();
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

  createCustomSourceData() {
    this.customSourceData.title = 'D3 Bar Chart';
    this.customSourceData.description = 'An D3 bar chart that is rendered within the browser using SVG .Displays tips when hovering over points.';
    this.customSourceData.sourceMetadata.htmlUrl = 'charts/D3Charts/d3barchart/d3chart.html';
    this.customSourceData.sourceMetadata.tsUrl = 'charts/D3Charts/d3barchart/d3chart.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/code/charts/D3Charts/d3barchart/datasource.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-d3-chart-bar?embed=1&file=src/app/d3chart/d3barchart/d3barchart.demo.component.html&view=editor';
  }
  onDefaultLegendClick(event: any) {
    this.sourceData = event;
  }

  onDefaultLegendClick1(event: any) {
    this.sourceData1 = event;
  }

  onDefaultChartClick1(event: any) {
    this.sourceData = event;
  }

  onDefaultChartClick2(event: any) {
    this.sourceData1 = event;
   }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick(event: any) {
    this.userDataSource = event;
  }
}
