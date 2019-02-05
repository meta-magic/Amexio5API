/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'scatter-chart-demo',
 templateUrl: './scatterchart.demo.component.html',
})
export class ScatterChartDemoComponent implements OnInit {
  scatterChartData:any;
  constructor() {
    this.scatterChartData=[
      ['Age', 'Weight'],
      [ 8,      12],
      [ 4,      5.5],
      [ 11,     14],
      [ 4,      5],
      [ 3,      3.5],
      [ 6.5,    7]
    ];
    
  }
  ngOnInit() {
  }

}


