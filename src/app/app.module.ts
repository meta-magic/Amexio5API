import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";
import {AmexioLayoutModule, AmexioNavModule, CommonDataService, DeviceQueryService} from "amexio-ng-extensions";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AmexioNavModule,
    AmexioLayoutModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true }),
  ],
  providers: [CommonDataService,DeviceQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
