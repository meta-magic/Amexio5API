import { Component, OnInit } from '@angular/core';
@Component({
    selector : 'amexio-d3-chart-pie-demo',
    templateUrl:'./d3piechart.demo.component.html'
})
export class AmexioD3PieChartDemoComponent implements OnInit
{
  sourceData: any;
  userDataSourceCode: string;
  userDataSource: any;
  userDefineColors: any;
  defultColorData: any;
  userDefineColorData: any;
  constructor() { 
      
  }

 
  ngOnInit() {
    this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00","#b9936c"];


    this.defultColorData = 
    [
      ['browser', 'activity'],
      ['IE', 39.3],
      ['Chrome', 32.52],
      ['Safari', 13.68],
      ['Firefox', 8.71],
      ['Others', 6.01]
    ];

    this.userDefineColorData =  [
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

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick(event: any) {

    this.userDataSource = event;
  }
}