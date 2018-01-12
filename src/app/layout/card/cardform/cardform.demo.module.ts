import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {CardFormDemo} from "./cardform.demo";
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [CardFormDemo],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule, AmexioFormsModule,AmexioLayoutModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: CardFormDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class CardFormDemoModule {

}
