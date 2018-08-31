import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";
import {
  AmexioWidgetModule, DeviceQueryService, CommonDataService, AmexioMapModule,  AmexioChartsModule, ChartLoaderService,
  MapLoaderService, AmexioDashBoardModule, DashboardLoaderService, AmexioPaneModule, IconLoaderService
} from "amexio-ng-extensions";


import { FormsModule } from '@angular/forms';
import { AmexioChartD3Module } from 'amexio-chart-d3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioChartD3Module,AmexioChartD3Module,
    AmexioWidgetModule,AmexioChartsModule,AmexioMapModule,AmexioDashBoardModule,AmexioPaneModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true }),
  ],
  providers: [CommonDataService,DeviceQueryService,IconLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
