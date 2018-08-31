/**
 * Created by kedar on 28/8/18.
 */

import { RouterModule } from "@angular/router";
import { AmexioChartsModule, AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared.module";

 import { AmexioChartD3Module } from 'amexio-chart-d3';
import { HttpClientModule } from "@angular/common/http";
import { AmexioD3DonutChartDemoComponent } from './d3donutchart.demo.component';
@NgModule({
    declarations: [AmexioD3DonutChartDemoComponent],
    imports: [CommonModule, FormsModule, HttpClientModule,
         SharedModule, AmexioWidgetModule, AmexioChartD3Module,
          AmexioChartsModule, RouterModule.forChild([{
        path: '', component: AmexioD3DonutChartDemoComponent, pathMatch: 'full'
    }])],
    providers: []
})
export class D3DonutChartDemoModule {
}
