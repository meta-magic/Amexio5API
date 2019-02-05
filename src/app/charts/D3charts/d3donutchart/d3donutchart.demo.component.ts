
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'amexio-d3-chart-donut-demo',
  templateUrl: './d3donutchart.demo.component.html',
})
export class AmexioD3DonutChartDemoComponent implements OnInit {
  donutChartColor: any;
  donutData: any;
  sourceData: any;
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
      ['IE', 11.43],
      ['Chrome', 63.14],
      ['Safari', 3.83],
      ['Firefox', 10.23],
      ['Others', 10.01]
    ];

    this.userDefineColorData = 
    [
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
  onUserDefineLegendClick(event: any) {

    this.userDataSource = event;
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }
}

