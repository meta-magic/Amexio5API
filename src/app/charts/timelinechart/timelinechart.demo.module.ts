import {RouterModule} from "@angular/router";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TimelineChartDemoComponent} from "./timelinechart.demo.component";
import {SharedModule} from "../../shared.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [TimelineChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, AmexioWidgetModule, SharedModule,AmexioChartsModule,RouterModule.forChild([{
    path: '', component: TimelineChartDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class TimelineChartDemoModule {
}
