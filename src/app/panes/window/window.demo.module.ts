/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowDemoComponent } from './window.demo.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: WindowDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpClientModule,SharedModule,FormsModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
export const routedComponents = [WindowDemoComponent];
