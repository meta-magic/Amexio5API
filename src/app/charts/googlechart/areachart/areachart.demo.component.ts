/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'area-chart-demo',
  templateUrl: './areachart.demo.component.html',
})
export class AreaChartDemoComponent implements OnInit {
  areaChartData:any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode:string;
  constructor() {
    this.areaChartData=[
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ];    
  }
  ngOnInit() {
  }

}


