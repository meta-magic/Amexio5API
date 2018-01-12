/**
 * Created by pratik on 11/12/17.
 */
import {Routes} from '@angular/router';

export const APP_ROUTE: Routes = [

  {
    path: '', redirectTo: 'getting-started', pathMatch: 'full'
  }, {
    path: 'getting-started', loadChildren: './forminput/text/text.module#TextDemoModule'
  }, {
    path: 'textinput', loadChildren: './forminput/text/text.module#TextDemoModule'
  }
  /**Chart Routes*/, {
    path: 'area-chart-demo', loadChildren: './charts/areachart/areachart.demo.module#AreaChartDemoModule'
  }, {
    path: 'bar-chart-demo', loadChildren: './charts/barchart/barchart.demo.module#BarChartDemoModule'
  }, {
    path: 'bubble-chart-demo', loadChildren: './charts/bubblechart/bubblechart.demo.module#BubbleChartDemoModule'
  }, {
    path: 'candlestick-chart-demo',
    loadChildren: './charts/candlestickchart/candlestickchart.demo.module#CandlestickChartDemoModule'
  }, {
    path: 'candlestickwaterfall-chart-demo',
    loadChildren: './charts/candlestickwaterfallchart/candlestickchartwaterfall.demo.module#CandlestickWaterfallChartDemoModule'
  }, {
    path: 'column-chart-demo', loadChildren: './charts/columnchart/columnchart.demo.module#ColumnChartDemoModule'
  }, {
    path: 'combo-chart-demo', loadChildren: './charts/combochart/combochart.demo.module#ComboChartDemoModule'
  }, {
    path: 'donut-chart-demo', loadChildren: './charts/donutchart/donutchart.demo.module#DonutChartDemoModule'
  }, {
    path: 'gauge-dashboard-demo', loadChildren: './dashboard/gauge/gauge.demo.module#GaugeDemoModule'
  }, {
    path: 'histogram-chart-demo',
    loadChildren: './charts/histogramchart/histogramchart.demo.module#HistogramChartDemoModule'
  }, {
    path: 'line-chart-demo', loadChildren: './charts/linechart/linechart.demo.module#LineChartDemoModule'
  }, {
    path: 'pie-chart-demo', loadChildren: './charts/piechart/piechart.demo.module#PieChartDemoModule'
  }, {
    path: 'scatter-chart-demo', loadChildren: './charts/scatterchart/scatterchart.demo.module#ScatterChartDemoModule'
  }, {
    path: 'timeline-chart-demo',
    loadChildren: './charts/timelinechart/timelinechart.demo.module#TimelineChartDemoModule'
  }, {
    path: 'geo-chart-demo', loadChildren: './map/geochart/geochart.demo.module#GeoChartDemoModule'
  }, {
    path: 'tree-map-demo', loadChildren: './map/treemap/treemap.demo.module#TreeMapDemoModule'
  }, {
    path: 'datapoint', loadChildren: './dashboard/datapoints/datapoint.demo.module#DatapointsModule'
  }];
