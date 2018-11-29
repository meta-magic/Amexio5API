/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TimelineDemoComponent} from './../timeline/timeline.demo';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: TimelineDemoComponent},
];

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule,AmexioWidgetModule,SharedModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [TimelineDemoComponent]
})
export class TimelineDemoModule { }

export const routedComponents = [TimelineDemoComponent];
