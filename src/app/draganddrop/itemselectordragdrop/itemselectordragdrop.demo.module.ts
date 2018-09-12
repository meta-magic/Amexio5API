import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {ItemSelectorDragdropDemo} from "./itemselectordragdrop.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by kedar on 11/9/18.
 */
@NgModule({
  declarations: [ItemSelectorDragdropDemo],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ItemSelectorDragdropDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class ItemSelectorDragdropDemoModule {

}
