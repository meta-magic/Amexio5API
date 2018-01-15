import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";
import {
  AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, DeviceQueryService, CommonDataService,
  AmexioMapModule, AmexioChartsModule, ChartLoaderService, MapLoaderService, AmexioDashBoardModule,DashboardLoaderService
} from "amexio-ng-extensions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,AmexioChartsModule,AmexioMapModule,AmexioDashBoardModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true }),
  ],
  providers: [CommonDataService,DeviceQueryService,ChartLoaderService,MapLoaderService,DashboardLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
