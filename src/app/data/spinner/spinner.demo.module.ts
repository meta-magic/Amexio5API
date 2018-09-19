import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {AmexioSpinnerDemo} from "./spinner.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by kedar on 19/9/18.
 */
@NgModule({
  declarations: [AmexioSpinnerDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: AmexioSpinnerDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class AmexioSpinnerDemoModule {

}



