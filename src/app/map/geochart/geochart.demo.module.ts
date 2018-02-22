import { GeoChartDemoComponent} from "./geochart.demo.component";
import {RouterModule} from "@angular/router";
import {AmexioMapModule, AmexioWidgetModule, MapLoaderService} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [GeoChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, AmexioMapModule,AmexioWidgetModule,SharedModule, RouterModule.forChild([{
    path: '', component: GeoChartDemoComponent, pathMatch: 'full'
  }])]
})
export class GeoChartDemoModule {
}
