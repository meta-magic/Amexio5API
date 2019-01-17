/**
 * Created by rashmi on 16/1/19.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EEAppointmentDemoComponent} from './appointment.component';
import {SharedModule} from "../../shared.module";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {AmexioEnterpriseModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', component: EEAppointmentDemoComponent},
];

@NgModule({
  imports: [SharedModule,CommonModule,HttpClientModule,AmexioWidgetModule,AmexioEnterpriseModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [EEAppointmentDemoComponent]
})
export class EEAppointmentRoutingModule {
}

export const routedComponents = [EEAppointmentDemoComponent];
