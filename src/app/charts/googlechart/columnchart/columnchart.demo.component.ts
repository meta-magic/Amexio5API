/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'column-chart-demo',
  templateUrl: './columnchart.demo.component.html',
})
export class ColumnChartDemoComponent implements OnInit {
  columnStackChartData:any;
  columnChartData:any;
  constructor() {
    this.columnStackChartData=[
      [{"datatype":'timeofday',"label":'Time of Day'},
        {"datatype":"number", "label":'Motivation Level'},
        {"datatype":"number","label":"Energy Level"}
      ],
      [{v: [8, 0, 0], f: '8 am'}, 1, .25],
      [{v: [9, 0, 0], f: '9 am'}, 2, .5],
      [{v: [10, 0, 0], f:'10 am'}, 3, 1],
      [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
      [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
      [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
      [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
      [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
      [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
      [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
    ];
    this.columnChartData = [
      [{"datatype":'timeofday',"label":'Time of Day'},
        {"datatype":"number", "label":'Motivation Level'}
      ],
      [{v: [8, 0, 0], f: '8 am'}, 1],
      [{v: [9, 0, 0], f: '9 am'}, 2],
      [{v: [10, 0, 0], f:'10 am'}, 3],
      [{v: [11, 0, 0], f: '11 am'}, 4],
      [{v: [12, 0, 0], f: '12 pm'}, 5],
      [{v: [13, 0, 0], f: '1 pm'}, 6],
      [{v: [14, 0, 0], f: '2 pm'}, 7],
      [{v: [15, 0, 0], f: '3 pm'}, 8],
      [{v: [16, 0, 0], f: '4 pm'}, 9],
      [{v: [17, 0, 0], f: '5 pm'}, 10],
    ];
  }
  ngOnInit() {
  }

}


