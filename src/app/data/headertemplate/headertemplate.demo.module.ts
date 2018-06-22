import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {HeaderTemplateDemo} from "./headertemplate.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by manisha on 22/6/18.
 */
@NgModule({
  declarations: [HeaderTemplateDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: HeaderTemplateDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class HeaderTemplateDemoModule {

}
