import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {SimpleGridDemo} from "./simplegrid.demo";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [SimpleGridDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule.forRoot(), AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: SimpleGridDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class SimpleGridDemoModule {

}
