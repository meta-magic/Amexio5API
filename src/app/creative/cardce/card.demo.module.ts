import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";
import { CreativeCardDemo } from './card.demo';
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [CreativeCardDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: CreativeCardDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class CreativeCardDemoModule {

}
