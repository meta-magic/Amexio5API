import { NgModule } from "@angular/core";
import { AmexioWidgetModule, AmexioChartsModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../../shared.module";
import { GOOGLECHART_ROUTE } from "./googlechart.routes";


import { RouterModule } from "@angular/router";

import { AreaChartDemoComponent } from "./areachart/areachart.demo.component";
import { BarChartDemoComponent } from "./barchart/barchart.demo.component";
import { BubbleChartDemoComponent } from "./bubblechart/bubblechart.demo.component";
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
import { PieChartDemoComponent } from "./piechart/piechart.demo.component";

/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [ AreaChartDemoComponent, BarChartDemoComponent, BubbleChartDemoComponent,
        CandlestickChart,CandlestickWaterfallChartDemoComponent,ColumnChartDemoComponent,ComboChartDemoComponent,
        DonutChartDemoComponent,GanttChartDemoComponent, HistogramChartDemoComponent,LineChartDemoComponent,
        ScatterChartDemoComponent,TimelineChartDemoComponent, PieChartDemoComponent
        


    ],
    imports: [
        CommonModule, 
        AmexioChartsModule,
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(GOOGLECHART_ROUTE),
    ],
    providers: []
})
export class GoogleChartModule {

}
