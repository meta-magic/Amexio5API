
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContextMenuPanelDemoComponent} from './contextmenupanel.demo';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: ContextMenuPanelDemoComponent},
];

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule,AmexioWidgetModule,SharedModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [ContextMenuPanelDemoComponent]
})
export class ContextMenuPanelDemoModule { }

export const routedComponents = [ContextMenuPanelDemoComponent];
