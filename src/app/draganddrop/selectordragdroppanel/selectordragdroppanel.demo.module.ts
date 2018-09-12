import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {ItemSelectorDragdropPanel} from "./selectordragdroppanel.demo";
import {HttpClientModule} from "@angular/common/http";
/**
 * Created by kedar on 11/9/18.
 */
@NgModule({
  declarations: [ItemSelectorDragdropPanel],
  imports: [CommonModule, FormsModule, HttpClientModule,SharedModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ItemSelectorDragdropPanel, pathMatch: 'full'
  }])],
  providers: []
})
export class ItemSelectorDragdropPanelModule {

}
