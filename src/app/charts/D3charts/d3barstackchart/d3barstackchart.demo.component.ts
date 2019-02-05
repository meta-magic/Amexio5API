import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'amexio-d3-chart-bar-stack-demo',
  templateUrl: './d3barstackchart.demo.component.html'
})
export class AmexioD3BarStackChartDemoComponent implements OnInit {  
  userDataSource: any;
  userDataSource1: any;
  userDefineColorData: any;
  colorArray = [ "blue",
  "yellow",
  "green"];
 constructor() {

  }

  ngOnInit() {

    this.userDefineColorData = [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 375],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
      ['2018', 900, 600, 275],
      ['2019', 600, 1000, 400]
    ];
  }

  onUserDefineLegendClick(event: any) {
    this.userDataSource = event;
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick1(event: any) {
    this.userDataSource1 = event;
  }

  onDefaultChartClick1(event: any) {
    this.userDataSource1 = event;
  }
}