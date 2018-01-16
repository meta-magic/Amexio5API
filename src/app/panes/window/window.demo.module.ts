/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowDemoComponent } from './window.demo.component';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {SharedModule} from "../../shared.module";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: WindowDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpModule,SharedModule,FormsModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [WindowDemoComponent]
})
export class WindowDemoModule { }

export const routedComponents = [WindowDemoComponent];
