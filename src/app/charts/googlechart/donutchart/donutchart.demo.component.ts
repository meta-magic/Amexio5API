/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'donut-chart-demo',
  templateUrl: './donutchart.demo.component.html',
})
export class DonutChartDemoComponent implements OnInit {
  donutChartData:any;
  constructor() {
    this.donutChartData=[
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ];
  }
  ngOnInit() {
  }

}


