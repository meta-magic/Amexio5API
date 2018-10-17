import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {GridWithToolBarDemo} from "./gridwithtoolbar.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by kedar on 17/10/18.
 */
@NgModule({
  declarations: [GridWithToolBarDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: GridWithToolBarDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class GridWithToolBarDemoModule {

}
