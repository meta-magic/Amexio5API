import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ContextMenuTabDemo} from "./contextmenutab.demo";
import {SharedModule} from "../../shared.module";
/**
 * Created by Rashmi on 09/7/18.
 */
@NgModule({
  declarations: [ContextMenuTabDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ContextMenuTabDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class ContextMenuTabDemoModule {

}
