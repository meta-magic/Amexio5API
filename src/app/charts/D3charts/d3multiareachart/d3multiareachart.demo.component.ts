import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amexio-d3-chart-bar-stack-demo',
  templateUrl: './d3multiareachart.demo.component.html'
})
export class AmexioD3MultiAreaChartDemoComponent implements OnInit {
  userDataSource: any;
  multiAreaData:any=[];
  constructor() {
  }

  ngOnInit() {

    this.multiAreaData = [
      ["date", "index", "open", "close", "high"],
      ["2014", 58.13, 610, 234, 100],
      ["2015", 53.98, 626, 356, 150],
      ["2016", 99.00, 543, 456, 200],
      ["2017", 130.28, 443, 556, 250],
      ["2018", 58.13, 610, 245, 300],
      ["2019", 53.98, 626, 345, 350],
      ["2020", 99.00, 543, 556, 400],
      ["2021", 130.28, 443, 443, 500]
    ];  
                        
  }

  onMultiAreaLegendClick(event: any) {
    this.userDataSource = event;
  }

   onMultiAreaChartClick(event: any) {
    this.userDataSource = event;
  }
}