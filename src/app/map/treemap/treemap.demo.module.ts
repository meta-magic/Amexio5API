import {RouterModule} from "@angular/router";
import {AmexioMapModule, AmexioWidgetModule, MapLoaderService} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TreeMapDemoComponent} from "./treemap.demo.component";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [TreeMapDemoComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, AmexioWidgetModule, SharedModule,AmexioMapModule,RouterModule.forChild([{
    path: '', component: TreeMapDemoComponent, pathMatch: 'full'
  }])]
})
export class TreeMapDemoModule {
}
