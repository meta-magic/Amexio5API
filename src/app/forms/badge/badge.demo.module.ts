import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";
import { BadgeDemo } from "src/app/forms/badge/badge.demo";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [BadgeDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: BadgeDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class BadgeDemoModule {

}
