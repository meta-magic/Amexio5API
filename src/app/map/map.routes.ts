import { Routes } from '@angular/router';



import { GeoChartDemoComponent } from "./geochart/geochart.demo.component";
import { TreeMapDemoComponent } from "./treemap/treemap.demo.component";
import { GoogleMapDemo } from './googlemap/googlemap.demo';
export const MAP_ROUTE: Routes = [

    {
        path: 'geo-chart-demo', component: GeoChartDemoComponent,
    },
    {
        path: 'tree-map-demo', component: TreeMapDemoComponent,
    },
    {
        path: 'googlemap-demo', component: GoogleMapDemo,
    },
]