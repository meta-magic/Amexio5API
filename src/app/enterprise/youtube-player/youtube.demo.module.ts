/**
 * Created by pratik on 18/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {YoutubePlayerDemoComponent} from "./youtube.demo.component";
import {SharedModule} from "../../shared.module";
import {CommonModule} from "@angular/common";
import {AmexioEnterpriseModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: YoutubePlayerDemoComponent },
];

@NgModule({
  imports: [SharedModule,CommonModule,HttpClientModule,AmexioWidgetModule,AmexioEnterpriseModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [YoutubePlayerDemoComponent]
})
export class YoutubePlayerModule { }

export const routedComponents = [YoutubePlayerDemoComponent];
