/**
 * Created by Ketan on 16/1/18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";
import { ThemeComponent } from './theme.component';

const routes: Routes = [
  { path: '', component: ThemeComponent },
];

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule,AmexioWidgetModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [ThemeComponent],
  providers : [CookieService]
})
export class ThemeModule { }

export const routedComponents = [ThemeComponent];
