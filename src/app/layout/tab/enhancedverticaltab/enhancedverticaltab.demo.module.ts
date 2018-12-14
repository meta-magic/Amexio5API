import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule,AmexioPaneModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {EnhancedVerticalTabDemo} from "./enhancedverticaltab.demo";
import {DyanmicVerticalTabComponent} from './dynamicverticaltabdemo.component';
/**
 * Created by sagar on 11/1/18.
 */
@NgModule({
  declarations: [EnhancedVerticalTabDemo,DyanmicVerticalTabComponent],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule,AmexioPaneModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: EnhancedVerticalTabDemo, pathMatch: 'full'
  }])],
  providers: [],
  entryComponents:[DyanmicVerticalTabComponent]
})
export class EnhancedVerticalTabDemoModule {

}
