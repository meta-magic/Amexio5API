import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule, AmexioPaneModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {EnhancedTabDemo} from "./enhancedtab.demo";
import {SharedModule} from "../../../shared.module";
import { DyanmicTabComponent } from './dynamictabdemo.component';

/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [EnhancedTabDemo,DyanmicTabComponent],
  imports: [CommonModule, FormsModule, AmexioPaneModule, HttpModule,SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: EnhancedTabDemo, pathMatch: 'full'
  }])],
  providers: [],
  entryComponents:[DyanmicTabComponent]
})
export class EnhancedTabDemoModule {

}
