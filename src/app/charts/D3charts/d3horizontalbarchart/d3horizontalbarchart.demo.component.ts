import { Component, OnInit } from '@angular/core';

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
  constructor() {
 
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
