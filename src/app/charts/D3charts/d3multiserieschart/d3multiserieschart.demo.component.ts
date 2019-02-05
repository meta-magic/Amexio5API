import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'amexio-d3-chart-multiseries-demo',
  templateUrl: './d3multiserieschart.demo.component.html'
})
export class AmexioD3MultiSeriesChartDemoComponent implements OnInit {
  userDefineColorData: any;
  userDataSource: any;
  constructor() {
  }

  ngOnInit() {
    this.userDefineColorData = [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
      ['2018', 1090, 740, 450],
      ['2019', 1050, 640, 350]
    ];
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick(event: any) {
    this.userDataSource = event;
  }

}
