import { Component, OnInit } from '@angular/core';
import {ComponentDataStructure} from "../../../apimetadata/models/component.structure";


@Component({
  selector: 'amexio-d3-chart-bar-demo',
  templateUrl: './d3horizontalbarchart.demo.component.html'
})
export class AmexioD3HorizontalBarChartComponent implements OnInit {
  userDefineColors: any;
  sourceData: any;
  userDataSource: any;
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
    this.customSourceData.title = 'D3 Horizontal  Bar Chart';
    this.customSourceData.description = 'An D3 Horizontal bar chart that is rendered within the browser using SVG .Displays tips when hovering over points.';
    this.customSourceData.sourceMetadata.htmlUrl = 'charts/D3Charts/d3horizontalbarchart/d3chart.html';
    this.customSourceData.sourceMetadata.tsUrl = 'charts/D3Charts/d3horizontalbarchart/d3chart.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/code/charts/D3Charts/d3horizontalbarchart/datasource.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-d3-chart-horizontal-bar?embed=1&file=src/app/d3chart/d3barchart/d3barchart.demo.component.html&view=editor';
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
