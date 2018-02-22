/**
 * Created by pratik on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {DialogueDemoComponent} from "./dialogue.demo.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: DialogueDemoComponent},
];

@NgModule({
  imports: [CommonModule,HttpClientModule,SharedModule,FormsModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [DialogueDemoComponent]
})
export class DialogueDemoModule { }

export const routedComponents = [DialogueDemoComponent];
