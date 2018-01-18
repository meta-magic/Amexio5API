/**
 * Created by pratik on 18/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {YoutubePlayerDemoComponent} from "./youtube.demo.component";

const routes: Routes = [
  { path: '', component: YoutubePlayerDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [YoutubePlayerDemoComponent]
})
export class YoutubePlayerModule { }

export const routedComponents = [YoutubePlayerDemoComponent];
