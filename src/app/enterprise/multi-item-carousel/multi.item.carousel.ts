/**
 * Created by pratik on 18/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EECarouselDemoComponent } from './multi.item.carousel.demo';

const routes: Routes = [
  { path: '', component: EECarouselDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [EECarouselDemoComponent]
})
export class EECarouselDemoRoutingModule { }

export const routedComponents = [EECarouselDemoComponent];
