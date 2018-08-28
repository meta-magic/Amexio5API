import {RouterModule} from "@angular/router";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared.module";
import {HttpClientModule} from "@angular/common/http";
import { GanttChartDemoComponent } from "./ganttchart.demo.component";
@NgModule({
  declarations: [GanttChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, AmexioWidgetModule, SharedModule,AmexioChartsModule,RouterModule.forChild([{
    path: '', component: GanttChartDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class GanttChartDemoModule {
}
