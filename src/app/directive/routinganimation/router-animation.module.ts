import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared.module";
import { HttpClientModule } from "@angular/common/http";
import { AmexioChartD3Module } from "amexio-chart-d3";

import * as d3 from 'd3';

/**
 * Created by Manisha on 21/09/18.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule,
     RouterModule.forChild([{
    path: ''
  }]), AmexioChartD3Module],
  providers: []
})
export class RoutingAnimationDemoModule {

}
