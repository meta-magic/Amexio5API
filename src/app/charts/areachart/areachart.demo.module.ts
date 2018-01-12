import {AreaChartDemoComponent} from "./areachart.demo.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared.module";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
@NgModule({
  declarations: [AreaChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule,SharedModule,AmexioWidgetModule,AmexioChartsModule, RouterModule.forChild([{
    path: '', component: AreaChartDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class AreaChartDemoModule {
}
