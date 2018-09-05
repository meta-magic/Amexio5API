import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule, IconLoaderService } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../../shared.module";
import { CollapseTreeDemo } from "./collapsetree.demo";
import { HttpClientModule } from "@angular/common/http";

/**
 * Created by  kedar  on 05/9/18.
 */
@NgModule({
  declarations: [CollapseTreeDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: CollapseTreeDemo, pathMatch: 'full'
  }])],
  providers: [IconLoaderService]
})
export class CollapseTreeDemoModule {

}
