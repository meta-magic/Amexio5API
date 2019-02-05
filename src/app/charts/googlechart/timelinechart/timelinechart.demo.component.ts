/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'scatter-chart-demo',
 templateUrl: './timelinechart.demo.component.html',
})
export class TimelineChartDemoComponent implements OnInit {
  timelineChartData:any;
  constructor() {
    this.timelineChartData = [
      [{ "datatype": 'string', "label": 'Prime Minister' },
      { "datatype": "date", "label": 'Start' },
      { "datatype": "date", "label": "End" }
      ],
      ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
      ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
      ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
    ];
  }

  ngOnInit() {
  }

}


