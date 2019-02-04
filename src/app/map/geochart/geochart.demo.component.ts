/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'geo-chart-demo',
  templateUrl : './geochart.demo.component.html',
})
export class GeoChartDemoComponent implements OnInit {
  geoChartData:any;
  constructor() {
    this.geoChartData=[
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 550],
      ['RU', 350],
      ['India',700]
    ];
  }
  ngOnInit() {
  }

}


