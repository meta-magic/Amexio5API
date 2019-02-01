import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ColumnDemo} from "./coulmn.demo";
import {SharedModule} from "../../shared.module";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [ColumnDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ColumnDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class ColumnDemoModule {

}
