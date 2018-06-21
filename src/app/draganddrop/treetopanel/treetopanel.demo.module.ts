import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule, IconLoaderService} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {TreeToPanelDemo} from "./treetopanel.demo.component";
import {HttpClientModule} from "@angular/common/http";

/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [TreeToPanelDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: TreeToPanelDemo, pathMatch: 'full'
  }])],
  providers: [IconLoaderService]
})
export class TreeToPanelDemoModule {

}
