/**
 * Created by sagar on 11/1/18.
 */
import {Component} from '@angular/core';
@Component({
  selector: 'gauge-dashboard-demo',

  templateUrl :'./gauge.demo.component.html',
})
export class GaugeDemoComponent {
  gaugeChartData:any;
  constructor() {
    this.gaugeChartData=[
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ];
  }

}


