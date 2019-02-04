import { Routes } from '@angular/router';

import { AreaChartDemoComponent } from './areachart/areachart.demo.component';
import { BarChartDemoComponent } from './barchart/barchart.demo.component';
import { BubbleChartDemoComponent } from './bubblechart/bubblechart.demo.component';
import { CandlestickChart } from "./candlestickchart/candlestickchart.demo.component";
import { CandlestickWaterfallChartDemoComponent } from "./candlestickwaterfallchart/candlestickchartwaterfall.demo.component";
import { ColumnChartDemoComponent } from "./columnchart/columnchart.demo.component";
import { ComboChartDemoComponent } from "./combochart/combochart.demo.component";
import { DonutChartDemoComponent } from "./donutchart/donutchart.demo.component";
import { GanttChartDemoComponent } from "./ganttchart/ganttchart.demo.component";
import { HistogramChartDemoComponent } from "./histogramchart/histogramchart.demo.component";
import { LineChartDemoComponent } from "./linechart/linechart.demo.component";
import { ScatterChartDemoComponent } from "./scatterchart/scatterchart.demo.component";
import { TimelineChartDemoComponent } from "./timelinechart/timelinechart.demo.component";
import { PieChartDemoComponent } from './piechart/piechart.demo.component';


export const GOOGLECHART_ROUTE: Routes = [

    {
        path: 'area-chart-demo', component: AreaChartDemoComponent,
    },
    {
        path: 'bar-chart-demo', component: BarChartDemoComponent,
    },
    {
        path: 'bubble-chart-demo', component: BubbleChartDemoComponent,
    },
    {
        path: 'candlestick-chart-demo', component: CandlestickChart,
    },

    {
        path: 'candlestickwaterfall-chart-demo', component: CandlestickWaterfallChartDemoComponent,
    },
    {
        path: 'column-chart-demo', component: ColumnChartDemoComponent,
    },
    {
        path: 'combo-chart-demo', component: ComboChartDemoComponent,
    },
    {
        path: 'donut-chart-demo', component: DonutChartDemoComponent,
    },
    {
        path: 'gantt-chart-demo', component: GanttChartDemoComponent,
    },

    {
        path: 'histogram-chart-demo', component: HistogramChartDemoComponent,
    },
    {
        path: 'line-chart-demo', component: LineChartDemoComponent,
    },
    {
        path: 'scatter-chart-demo', component: ScatterChartDemoComponent,
    },
    {
        path: 'timeline-chart-demo', component: TimelineChartDemoComponent,
    },
    {
        path: 'pie-chart-demo', component: PieChartDemoComponent,
    },
    
   
]