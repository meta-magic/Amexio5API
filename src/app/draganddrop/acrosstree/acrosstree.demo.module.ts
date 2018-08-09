import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule, IconLoaderService} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {AcrossTreeDemo} from "./acrosstree.demo.component";
import {HttpClientModule} from "@angular/common/http";

/**
 * Created by rashmi on 20/6/18.
 */
@NgModule({
  declarations: [AcrossTreeDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: AcrossTreeDemo, pathMatch: 'full'
  }])],
  providers: [IconLoaderService]
})
export class AcrossTreeDemoModule {

}
