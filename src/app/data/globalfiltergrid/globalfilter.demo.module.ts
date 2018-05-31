import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {GlobalFilterDemo} from "./globalfilter.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by rashmi on 30/5/18.
 */
@NgModule({
  declarations: [GlobalFilterDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: GlobalFilterDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class GlobalFilterDemoModule {

}
