import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'amexio-d3-chart-timeline-demo',
  templateUrl: './d3timelinechart.demo.component.html'
})
export class AmexioD3TimeLineChartDemoComponent implements OnInit {
  userDataSource: any;
  timelinedata: any;
  constructor() {
  }

  ngOnInit() {

    this.timelinedata = [
        [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
        [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
        [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
      ];
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }

  onUserDefineLegendClick(event: any) {
     this.userDataSource = event;
  }
}