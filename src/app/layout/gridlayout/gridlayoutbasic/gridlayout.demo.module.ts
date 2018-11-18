import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule,AmexioChartsModule, AmexioDashBoardModule, AmexioGridLayoutService} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {GridLayoutDemo} from "./gridlayout.demo";
import {HttpClientModule} from "@angular/common/http";

/**
 * Created by ankita on 1/11/18.
 */
@NgModule({
  declarations: [GridLayoutDemo],
  imports: [CommonModule, FormsModule,AmexioChartsModule, AmexioDashBoardModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component:  GridLayoutDemo, pathMatch: 'full'
  }])],
  providers: [AmexioGridLayoutService]
})
export class GridLayoutDemoModule {

}
