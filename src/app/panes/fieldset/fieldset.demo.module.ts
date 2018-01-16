/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldSetDemoComponent } from './fieldset.demo.component';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: FieldSetDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpModule,FormsModule,SharedModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [FieldSetDemoComponent]
})
export class FieldSetDemoModule { }

export const routedComponents = [FieldSetDemoComponent];
