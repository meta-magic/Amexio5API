import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {RatingDemo} from "./rating.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [RatingDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: RatingDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class RatingDemoModule {

}
