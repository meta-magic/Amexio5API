import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {GridWithContextMenuDemo} from "./gridwithcontextmenu.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by rashmi on 29/6/18.
 */
@NgModule({
  declarations: [GridWithContextMenuDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: GridWithContextMenuDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class GridWithScrollDemoModule {

}
