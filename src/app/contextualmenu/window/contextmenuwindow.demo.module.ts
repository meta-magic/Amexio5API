/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContextMenuWindowDemoComponent } from './contextmenuwindow.demo.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: ContextMenuWindowDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpClientModule,SharedModule,FormsModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [ContextMenuWindowDemoComponent]
})
export class ContextMenuWindowDemoModule { }

export const routedComponents = [ContextMenuWindowDemoComponent];
