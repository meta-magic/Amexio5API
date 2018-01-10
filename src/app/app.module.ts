import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";

import {
  AmexioDataModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, CommonDataService, DeviceQueryService
} from "amexio-ng-extensions";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AmexioNavModule,
    AmexioLayoutModule,
    AmexioDataModule,
    AmexioWidgetModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true }),
  ],
  providers: [CommonDataService,DeviceQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
