/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarouselDemoComponent } from './carousel.demo';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";
import {AmexioWidgetModule, IconLoaderService} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: CarouselDemoComponent },
];

@NgModule({
  imports: [CommonModule,HttpModule,FormsModule,SharedModule,RouterModule.forChild(routes),AmexioWidgetModule],
  exports: [RouterModule],
  declarations : [CarouselDemoComponent],
  providers : [IconLoaderService]
})
export class CarouselDemoModule { }

export const routedComponents = [CarouselDemoComponent];
