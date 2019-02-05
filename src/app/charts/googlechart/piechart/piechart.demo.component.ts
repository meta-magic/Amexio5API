/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pie-chart-demo',
  templateUrl: './piechart.demo.component.html',
})
export class PieChartDemoComponent implements OnInit {
  pieChartData:any;

  constructor() {
    this.pieChartData=[
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


