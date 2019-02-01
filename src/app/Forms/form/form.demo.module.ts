/**
 * Created by anaghak07 on 16/4/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormDemoComponent} from './form.demo';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: FormDemoComponent},
];

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule,AmexioWidgetModule,SharedModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [FormDemoComponent]
})
export class FormDemoModule { }

export const routedComponents = [FormDemoComponent];
