import {RouterModule} from "@angular/router";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ColumnChartDemoComponent} from "./columnchart.demo.component";
import {SharedModule} from "../../shared.module";
@NgModule({
  declarations: [ColumnChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule, AmexioWidgetModule, SharedModule,AmexioChartsModule,RouterModule.forChild([{
    path: '', component: ColumnChartDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class ColumnChartDemoModule {
}
