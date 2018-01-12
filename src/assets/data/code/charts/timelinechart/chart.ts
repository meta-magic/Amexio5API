import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'timelinechart-demo',
  templateUrl: 'timelinechart.demo.html'
})
export class TimelineChartDemoComponent implements OnInit {
  timelineChartData:any;
  constructor() {
    this.timelineChartData=[
      [{"dataType":'string',"label":'Prime Minister'},
        {"dataType":"date", "label":'Start'},
        {"dataType":"date","label":"End"}
      ],
      [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ];
  }

  ngOnInit() {
  }

}
