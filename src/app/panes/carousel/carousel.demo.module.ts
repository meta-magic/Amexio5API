/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarouselDemoComponent } from './carousel.demo';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";
import {AmexioWidgetModule, IconLoaderService} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: CarouselDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule,SharedModule,RouterModule.forChild(routes),AmexioWidgetModule],
  exports: [RouterModule],
  declarations : [CarouselDemoComponent]
})
export class CarouselDemoModule { }

export const routedComponents = [CarouselDemoComponent];
