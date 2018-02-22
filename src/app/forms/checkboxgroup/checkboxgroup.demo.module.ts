import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {CheckBoxGroupDemo} from "./checkboxgroup.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [CheckBoxGroupDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: CheckBoxGroupDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class CheckBoxGroupDemoModule {

}
