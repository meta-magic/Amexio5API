import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule, IconLoaderService} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {SimpleTreeDemo} from "./simpletree.demo";
import {HttpClientModule} from "@angular/common/http";

/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [SimpleTreeDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: SimpleTreeDemo, pathMatch: 'full'
  }])],
  providers: [IconLoaderService]
})
export class SimpleTreeDemoModule {

}
