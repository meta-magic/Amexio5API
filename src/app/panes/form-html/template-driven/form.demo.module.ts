/**
 * Created by anaghak07 on 16/4/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from '../../../shared.module';
import { HtmlFormDemoComponent } from './form.demo';

const routes: Routes = [
  { path: '', component: HtmlFormDemoComponent},
];

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule,AmexioWidgetModule,SharedModule ,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [HtmlFormDemoComponent]
})
export class HtmlFormDemoModule { }

export const routedComponents = [HtmlFormDemoComponent];
