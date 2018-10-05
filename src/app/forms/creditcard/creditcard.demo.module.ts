/**
 * Created by ankita on 3/10/18.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule, AmexioFormsModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {CreditCardDemo} from "./../creditcard/creditcard.demo";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [CreditCardDemo],
  imports: [CommonModule, FormsModule,AmexioFormsModule,HttpClientModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: CreditCardDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class CreditCardDemoModule {

}
