import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";
import { GoogleMapDemo } from "./googlemap.demo";
/**
 * Created by ketan on 11/1/18.
 */
@NgModule({
  declarations: [GoogleMapDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: GoogleMapDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class GoogleMapModule {

}
