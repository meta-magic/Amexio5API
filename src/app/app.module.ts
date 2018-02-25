import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";
import {
  AmexioWidgetModule, DeviceQueryService, CommonDataService, AmexioMapModule, AmexioChartsModule, ChartLoaderService,
  MapLoaderService, AmexioDashBoardModule, DashboardLoaderService, AmexioPaneModule, IconLoaderService
} from "amexio-ng-extensions";
import { AmexioTestNavBarComponent } from './component/navbar/navbar.component';
import { AmexioTestNavItemComponent } from './component/navbar/navitem.component';
import { AmexioTestNavActionComponent } from './component/navbar/navaction.component';
import { AmexioTestNavMenuComponent } from './component/navbar/navmenu.component';
import { AmexioTestNavTextFieldComponent } from './component/navbar/navtextfield.component.';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AmexioTestNavBarComponent,
    AmexioTestNavItemComponent,
    AmexioTestNavActionComponent,
    AmexioTestNavMenuComponent,
    AmexioTestNavTextFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,AmexioChartsModule,AmexioMapModule,AmexioDashBoardModule,AmexioPaneModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
