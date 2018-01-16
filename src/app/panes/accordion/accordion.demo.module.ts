/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionDemoComponent } from './accordion.demo';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: AccordionDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpModule,FormsModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [AccordionDemoComponent]
})
export class AccordionDemoModule { }

export const routedComponents = [AccordionDemoComponent];
