import { NgModule } from "@angular/core";
import { AmexioWidgetModule, AmexioMapModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { MAP_ROUTE } from "./map.routes";


import { RouterModule } from "@angular/router";
import { GeoChartDemoComponent } from "./geochart/geochart.demo.component";
import { TreeMapDemoComponent } from "./treemap/treemap.demo.component";
import { GoogleMapDemo } from "./googlemap/googlemap.demo";

/**
 * Created by kedar on 4/2/19.
 */
@NgModule({
    declarations: [GeoChartDemoComponent, TreeMapDemoComponent, GoogleMapDemo],
    imports: [
        CommonModule, 
        FormsModule, AmexioMapModule, 
        HttpClientModule, 
        SharedModule.forRoot(), 
        AmexioWidgetModule,
        RouterModule.forChild(MAP_ROUTE),
    ],
    providers: []
})
export class MapModule {

}
