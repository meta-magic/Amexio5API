import {RouterModule} from "@angular/router";
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CandlestickWaterfallChartDemoComponent} from "./candlestickchartwaterfall.demo.component";
import {SharedModule} from "../../shared.module";
@NgModule({
  declarations: [CandlestickWaterfallChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule, AmexioWidgetModule, SharedModule,AmexioChartsModule,RouterModule.forChild([{
    path: '', component: CandlestickWaterfallChartDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class CandlestickWaterfallChartDemoModule {
}
