import {RouterModule} from "@angular/router";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PieChartDemoComponent} from "./piechart.demo.component";
import {SharedModule} from "../../shared.module";
@NgModule({
  declarations: [PieChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule, AmexioWidgetModule,SharedModule,AmexioChartsModule, RouterModule.forChild([{
    path: '', component: PieChartDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class PieChartDemoModule {
}
