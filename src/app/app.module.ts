import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTE } from "./app.routes";
import {
  AmexioWidgetModule, DeviceQueryService, CommonDataService, AmexioMapModule, AmexioChartsModule, ChartLoaderService,
  MapLoaderService, AmexioDashBoardModule, DashboardLoaderService, AmexioPaneModule, IconLoaderService, AmexioEnterpriseModule
} from "amexio-ng-extensions";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './theme/theme.module'
import { FormsModule } from '@angular/forms';
import { AmexioChartD3Module } from 'amexio-chart-d3';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

import { HTTPService } from './service/http.service';
import { AppPreloadingStrategy } from './preloading.service';
import { ThemeServiceService } from './theme-service.service';
import { CopyRightComponent } from './copyright/copyright.component';
import { ConceptPage } from './concept/concept.component';
import { KeyFeaturesComponent } from './concept/keyfeatures.component';
import { EventsPanelComponent } from '../app/enterprise/floating-panel-calendar/events-panel/events-panel.component';
import { RouterService } from 'amexio-ng-extensions';

import { ApiWindowContainerComponent } from './apiWindowContainer/apiWindowContainer.component';
import { windowContainerService } from './service/windowContainerService.service';

import { CreativeApiWindowContainerComponent } from './ceapiWindowContainer/ceapiWindowContainer.component';
import { ApiTaskbarContainerComponent } from './apiTaskbarContainer/apiTaskbarContainer.component';
@NgModule({
  declarations: [
    AppComponent,
    CopyRightComponent,
    ConceptPage,
    EventsPanelComponent,
    KeyFeaturesComponent,
    ApiWindowContainerComponent,
    CreativeApiWindowContainerComponent,
    ApiTaskbarContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, HttpClientModule,
    AmexioChartD3Module, AmexioChartD3Module,
    AmexioWidgetModule, AmexioChartsModule, AmexioMapModule, AmexioDashBoardModule, AmexioPaneModule,
    AmexioEnterpriseModule,
    RouterModule.forRoot(APP_ROUTE, {
      useHash: true, preloadingStrategy: AppPreloadingStrategy
    }),
  ],
  entryComponents: [EventsPanelComponent],

  providers: [CommonDataService, AppPreloadingStrategy, windowContainerService,
    ThemeServiceService, HTTPService, RouterService, DeviceQueryService, IconLoaderService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
