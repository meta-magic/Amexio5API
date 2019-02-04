import { Routes } from '@angular/router';


import { AmexioD3BarChartDemoComponent } from "./d3barchart/d3barchart.demo.component";
import { AmexioD3BarStackChartDemoComponent } from "./d3barstackchart/d3barstackchart.demo.component";
import { AmexioD3BubbleChartDemoComponent } from "./d3bubblechart/d3bubblechart.demo.component";
import { AmexioD3ComboChartDemoComponent } from "./d3combochart/d3combochart.demo.component";
import { AmexioD3DonutChartDemoComponent } from "./d3donutchart/d3donutchart.demo.component";
import { AmexioD3HistogramChartDemoComponent } from "./d3histogramchart/d3histogramchart.demo.component";
import { AmexioD3HorizontalBarChartComponent } from "./d3horizontalbarchart/d3horizontalbarchart.demo.component";
import { AmexioD3LineChartDemoComponent } from "./d3linechart/d3linechart.demo.component";
import { AmexioD3MultiAreaChartDemoComponent } from "./d3multiareachart/d3multiareachart.demo.component";
import { AmexioD3MultiSeriesChartDemoComponent } from "./d3multiserieschart/d3multiserieschart.demo.component";
import { AmexioD3PieChartDemoComponent } from "./d3piechart/d3piechart.demo.component";
import { AmexioD3ScatterChartDemoComponent } from "./d3scatterchart/d3scatterchart.demo.component";
import { AmexioD3TimeLineChartDemoComponent } from "./d3timelinechart/d3timelinechart.demo.component";
import { AmexioD3WaterfallChartDemoComponent } from "./d3waterfallchart/d3waterfallchart.demo.component";



export const D3CHART_ROUTE: Routes = [

    {
        path: 'amexio-d3-chart-bar', component:AmexioD3BarChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-bar-stack', component:AmexioD3BarStackChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-bubble', component:AmexioD3BubbleChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-combo', component:AmexioD3ComboChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-donut', component:AmexioD3DonutChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-histogram', component:AmexioD3HistogramChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-horizontal', component:AmexioD3HorizontalBarChartComponent ,
    },
    {
        path: 'amexio-d3-chart-line', component:AmexioD3LineChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-multiarea', component:AmexioD3MultiAreaChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-multiseries', component:AmexioD3MultiSeriesChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-pie', component:AmexioD3PieChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-scatter', component:AmexioD3ScatterChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-timeline', component:AmexioD3TimeLineChartDemoComponent ,
    },
    {
        path: 'amexio-d3-chart-waterfall', component:AmexioD3WaterfallChartDemoComponent ,
    }

    
]