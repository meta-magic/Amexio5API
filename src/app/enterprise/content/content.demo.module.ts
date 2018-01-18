/**
 * Created by pratik on 18/1/18.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EEContentDemoComponent} from './content.compnent';

const routes: Routes = [
  {path: '', component: EEContentDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [EEContentDemoComponent]
})
export class ContentRoutingModule {
}

export const routedComponents = [EEContentDemoComponent];
