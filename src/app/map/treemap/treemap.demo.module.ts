import {RouterModule} from "@angular/router";
import {AmexioMapModule, AmexioWidgetModule, MapLoaderService} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TreeMapDemoComponent} from "./treemap.demo.component";
import {SharedModule} from "../../shared.module";
@NgModule({
  declarations: [TreeMapDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule, AmexioWidgetModule, SharedModule,AmexioMapModule,RouterModule.forChild([{
    path: '', component: TreeMapDemoComponent, pathMatch: 'full'
  }])],
  providers: [MapLoaderService]
})
export class TreeMapDemoModule {
}
