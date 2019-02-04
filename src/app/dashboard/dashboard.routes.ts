import { Routes } from '@angular/router';

import { GaugeDemoComponent } from './gauge/gauge.demo.component';
import { DataPointComponent } from './datapoints/datapoint.demo.component';


export const DASHBOARD_ROUTE: Routes = [

    {
        path: 'gauge-dashboard-demo', component: GaugeDemoComponent,
    },
    {
        path: 'datapoint-demo', component: DataPointComponent,
    }
]