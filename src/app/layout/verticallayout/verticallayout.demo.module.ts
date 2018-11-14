import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {verticalLayoutDemo} from "./verticallayout.demo";
/**
 * Created by kedar on 14/11/18.
 */
@NgModule({
  declarations: [verticalLayoutDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: verticalLayoutDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class VerticalLayoutDemoModule {

}

