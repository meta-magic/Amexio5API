/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PanelDemoComponent} from './panel.demo';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {SharedModule} from "../../shared.module";

const routes: Routes = [
  { path: '', component: PanelDemoComponent},
];

@NgModule({
  imports: [CommonModule,HttpModule,FormsModule,AmexioWidgetModule,SharedModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [PanelDemoComponent]
})
export class PanelDemoModule { }

export const routedComponents = [PanelDemoComponent];
