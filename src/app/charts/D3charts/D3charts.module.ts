import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../../shared.module";
import { D3CHART_ROUTE } from "./D3charts.routes";

import { AmexioChartD3Module } from "amexio-chart-d3";

import { RouterModule } from "@angular/router";

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

/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [AmexioD3BarChartDemoComponent, AmexioD3BarStackChartDemoComponent,
        AmexioD3BubbleChartDemoComponent, AmexioD3ComboChartDemoComponent, AmexioD3DonutChartDemoComponent,
        AmexioD3HistogramChartDemoComponent, AmexioD3HorizontalBarChartComponent, AmexioD3LineChartDemoComponent,
        AmexioD3MultiAreaChartDemoComponent, AmexioD3MultiSeriesChartDemoComponent, AmexioD3PieChartDemoComponent,
        AmexioD3ScatterChartDemoComponent, AmexioD3TimeLineChartDemoComponent, AmexioD3WaterfallChartDemoComponent,
    ],
    imports: [
        CommonModule,
        AmexioChartD3Module,
        FormsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(D3CHART_ROUTE),
    ],
    providers: []
})
export class D3ChartModule {

}
