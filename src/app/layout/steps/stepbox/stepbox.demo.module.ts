import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {StepBoxDemoComponent} from "./stepbox.demo";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [StepBoxDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioFormsModule,AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: StepBoxDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class StepBoxDemoModule {

}
