/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'bar-chart-demo',
  templateUrl: './barchart.demo.component.html',
})
export class BarChartDemoComponent implements OnInit {
  barStackChartData:any;
  barChartData:any;
  constructor() {
    this.barStackChartData=[
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ];
    this.barChartData = [
      ['City', '2010 Population',],
      ['New York City, NY', 8175000],
      ['Los Angeles, CA', 3792000],
      ['Chicago, IL', 2695000],
      ['Houston, TX', 2099000],
      ['Philadelphia, PA', 1526000]
    ];
  }
  ngOnInit() {
  }

}


