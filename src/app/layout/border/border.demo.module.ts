/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorderDemoComponent } from './border.demo.component';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {SharedModule} from "../../shared.module";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: BorderDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpModule,SharedModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [BorderDemoComponent]
})
export class BorderDemoRoutingModule { }

export const routedComponents = [BorderDemoComponent];
