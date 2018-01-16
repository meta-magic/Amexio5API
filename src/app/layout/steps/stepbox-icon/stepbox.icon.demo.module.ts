import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioLayoutModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {StepBoxIconComponent} from "./stepbox.icon.demo";

/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [StepBoxIconComponent],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule,AmexioWidgetModule,AmexioLayoutModule, RouterModule.forChild([{
    path: '', component: StepBoxIconComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class StepBoxIconDemoModule {

}
