import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {SliderDemo} from "./slider.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [SliderDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: SliderDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class SliderDemoModule {

}
