/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionDemoComponent } from './accordion.demo';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: AccordionDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule,AmexioWidgetModule,SharedModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [AccordionDemoComponent]
})
export class AccordionDemoModule { }

export const routedComponents = [AccordionDemoComponent];
