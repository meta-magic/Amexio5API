/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'datapoint',
  templateUrl: './datapoint.demo.component.html',
})
export class DataPointComponent implements OnInit {
  gaugeChartData: any;

  constructor() {
    this.gaugeChartData = [['Label', 'Value'], ['Memory', 80], ['CPU', 55], ['Network', 68]];
  }
  ngOnInit() {
  }

}


