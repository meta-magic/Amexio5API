/**
 * Created by sagar on 11/1/18.
 */ 
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'candlestick-chart-demo',
  templateUrl :'./candlestickchart.demo.component.html',
})
export class CandlestickChart implements OnInit {
  candlestickChartData:any;
  constructor() {
    this.candlestickChartData=[
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
    ];
  }
  ngOnInit() {
  }

}


