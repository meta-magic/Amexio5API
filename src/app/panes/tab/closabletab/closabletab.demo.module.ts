import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ClosableTabDemo} from "./closabletab.demo";
import {SharedModule} from "../../../shared.module";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [ClosableTabDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ClosableTabDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class ClosableTabDemoModule {

}
