
/**
 * Created by kedar on 24/5/18.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";
import {DropDownMenuDemo} from "./dropdownmenu.demo";

@NgModule({
  declarations: [DropDownMenuDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: DropDownMenuDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class DropDownMenuDemoModule {

}
