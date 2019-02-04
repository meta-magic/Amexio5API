import { NgModule } from "@angular/core";
import { AmexioWidgetModule, AmexioDashBoardModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { DASHBOARD_ROUTE } from "./dashboard.routes";


import { RouterModule } from "@angular/router";
import { GaugeDemoComponent } from "./gauge/gauge.demo.component";
import { DataPointComponent } from "./datapoints/datapoint.demo.component";

/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [DataPointComponent, GaugeDemoComponent],
    imports: [
        CommonModule, 
        AmexioDashBoardModule,
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(DASHBOARD_ROUTE),
    ],
    providers: []
})
export class DashboardModule {

}
