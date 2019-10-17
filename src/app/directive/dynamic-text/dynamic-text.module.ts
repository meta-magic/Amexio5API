import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared.module";

/**
 * Created by Rashmi on 17/10/19.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, SharedModule, AmexioWidgetModule,
    RouterModule.forChild([{
      path: ''
    }])],
  providers: []
})
export class DynamicTextDemoModule {

}
