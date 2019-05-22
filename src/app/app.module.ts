import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTE } from "./app.routes";
import {
  AmexioWidgetModule, DeviceQueryService, CommonDataService, AmexioMapModule, AmexioChartsModule, ChartLoaderService,
  MapLoaderService, AmexioDashBoardModule, DashboardLoaderService, AmexioPaneModule, IconLoaderService
} from "amexio-ng-extensions";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ThemeModule} from './theme/theme.module'
import { FormsModule } from '@angular/forms';
import { AmexioChartD3Module } from 'amexio-chart-d3';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

import { HTTPService } from './service/http.service';
import {AppPreloadingStrategy} from './preloading.service';
import {ThemeServiceService} from './theme-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThemeModule,
    FormsModule, HttpClientModule,
    AmexioChartD3Module, AmexioChartD3Module,
    AmexioWidgetModule, AmexioChartsModule, AmexioMapModule, AmexioDashBoardModule, AmexioPaneModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true, preloadingStrategy: AppPreloadingStrategy
    } ),
  ],
  providers: [CommonDataService, AppPreloadingStrategy, ThemeServiceService, HTTPService, DeviceQueryService, IconLoaderService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
