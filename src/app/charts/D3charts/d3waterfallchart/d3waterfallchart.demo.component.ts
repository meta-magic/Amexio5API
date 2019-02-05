import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'amexio-d3-chart-waterfall-demo',
  templateUrl: './d3waterfallchart.demo.component.html'
})
export class AmexioD3WaterfallChartDemoComponent implements OnInit {
  waterfallChartData: any;
  sourceData: any;
  constructor() {
  }
  
  ngOnInit() {

    this.waterfallChartData = [
      ["Product", "Yield"],
      ["Product Revenue", 420000],
      ["Services Revenue", 210000],
      ["Fixed Costs", -170000],
      ["letiable Costs", -140000]
    ];

  }

  onLegendClick(event: any) {
    this.sourceData = event;
  }

  onChartClick(event: any) {
    this.sourceData = event;
  }
}
