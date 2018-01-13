import {NumberDemo} from "./number.demo";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [NumberDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: NumberDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class NumberDemoModule {

}
