/**
 * Created by pratik on 18/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EECarouselDemoComponent } from './multi.item.carousel.demo';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AmexioEnterpriseModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {SharedModule} from "../../shared.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: EECarouselDemoComponent },
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes),FormsModule,HttpClientModule,AmexioWidgetModule,AmexioEnterpriseModule,SharedModule],
  exports: [RouterModule],
  declarations : [EECarouselDemoComponent]
})
export class EECarouselDemoRoutingModule { }

export const routedComponents = [EECarouselDemoComponent];
