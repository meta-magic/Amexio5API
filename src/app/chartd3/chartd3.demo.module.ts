import { ChartD3Demo } from "./chard3.demo";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../shared.module";
import { HttpClientModule } from "@angular/common/http";
import { AmexioChartD3Module } from "amexio-chart-d3";

import * as d3 from 'd3';

/**
 * Created by kedar on 21/09/18.
 */
@NgModule({
  declarations: [ChartD3Demo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ChartD3Demo, pathMatch: 'full'
  }]), AmexioChartD3Module],
  providers: []
})
export class ChartD3DemoModule {

}
