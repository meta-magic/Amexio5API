import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {BoxDemo} from "./box.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by anagha on 13/3/18.
 */
@NgModule({
  declarations: [BoxDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: BoxDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class BoxDemoModule {

}
