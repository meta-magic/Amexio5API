import { NgModule } from "@angular/core";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { DRILLABLECHART_ROUTE } from "./drillablechart.routes";


import { RouterModule } from "@angular/router";
import { AmexioD3DrillableSingleTargetDemoComponent } from "./d3drillablesingletarget/d3drillablesinglecharts.demo.component";
import { AmexioD3DrillableMultipleTargetDemoComponent } from "./d3drillablemultipletarget/d3drillablemultipletarget.demo.component";
import { AmexioChartD3Module } from "amexio-chart-d3";
import * as d3 from 'd3';
/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [
        AmexioD3DrillableSingleTargetDemoComponent,
        AmexioD3DrillableMultipleTargetDemoComponent
     ],
    imports: [
        CommonModule, 
        FormsModule, AmexioChartD3Module,
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(DRILLABLECHART_ROUTE),
    ],
    providers: []
})
export class DrillableD3ChartModule {

}
