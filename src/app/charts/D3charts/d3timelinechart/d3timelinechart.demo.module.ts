
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared.module";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";
import { AmexioD3TimeLineChartDemoComponent } from "./d3timelinechart.demo.component";
import { AmexioChartD3Module } from "amexio-chart-d3";
import * as d3 from 'd3';
@NgModule({
  declarations: [AmexioD3TimeLineChartDemoComponent],
  imports: [CommonModule, FormsModule,
     HttpClientModule,SharedModule,AmexioWidgetModule,
      RouterModule.forChild([{
    path: '', component: AmexioD3TimeLineChartDemoComponent, pathMatch: 'full'
  }]), AmexioChartD3Module],
  providers: []
})
export class D3TimelineChartDemoModule {
  
}
