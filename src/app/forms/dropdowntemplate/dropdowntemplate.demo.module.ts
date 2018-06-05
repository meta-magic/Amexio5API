import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {DropDownTemplateDemo} from "./dropdowntemplate.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by rashmi on 5/6/18.
 */
@NgModule({
  declarations: [DropDownTemplateDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: DropDownTemplateDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class DropDownTemplateDemoModule {

}
