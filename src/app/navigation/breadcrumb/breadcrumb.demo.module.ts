import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {BreadcrumbDemo} from "./breadcrumb.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by kedarkokil on 26/09/18.
 */
@NgModule({
  declarations: [BreadcrumbDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: BreadcrumbDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class BreadcrumbDemoModule {

}
