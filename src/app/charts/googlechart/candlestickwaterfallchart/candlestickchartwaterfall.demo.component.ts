/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'candlestickwaterfall-chart-demo',
 templateUrl :'./candlestickchartwaterfall.demo.component.html',
})
export class CandlestickWaterfallChartDemoComponent implements OnInit {
  candlestickWaterfallChart:any;
  constructor() {
    this.candlestickWaterfallChart=[
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
    ];
  }
  ngOnInit() {
  }

}


