import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {SimpleGridDemo} from "./simplegrid.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [SimpleGridDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: SimpleGridDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class SimpleGridDemoModule {

}
