import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {RowDemo} from "./row.demo";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [RowDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioFormsModule,AmexioLayoutModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: RowDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class RowDemoModule {

}
