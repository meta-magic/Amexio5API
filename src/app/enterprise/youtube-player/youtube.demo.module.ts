/**
 * Created by pratik on 18/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {YoutubePlayerDemoComponent} from "./youtube.demo.component";
import {SharedModule} from "../../shared.module";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {AmexioEnterpriseEEModule, AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: YoutubePlayerDemoComponent },
];

@NgModule({
  imports: [SharedModule,CommonModule,HttpModule,AmexioWidgetModule,AmexioEnterpriseEEModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [YoutubePlayerDemoComponent]
})
export class YoutubePlayerModule { }

export const routedComponents = [YoutubePlayerDemoComponent];
