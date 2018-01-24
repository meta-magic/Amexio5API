/**
 * Created by pratik on 18/1/18.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EEContentDemoComponent} from './content.compnent';
import {SharedModule} from "../../shared.module";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {AmexioEnterpriseModule, AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  {path: '', component: EEContentDemoComponent},
];

@NgModule({
  imports: [SharedModule,CommonModule,HttpModule,AmexioWidgetModule,AmexioEnterpriseModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [EEContentDemoComponent]
})
export class ContentRoutingModule {
}

export const routedComponents = [EEContentDemoComponent];
