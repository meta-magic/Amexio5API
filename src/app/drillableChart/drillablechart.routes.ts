import { Routes } from '@angular/router';

import { AmexioD3DrillableMultipleTargetDemoComponent } from './d3drillablemultipletarget/d3drillablemultipletarget.demo.component';
import { AmexioD3DrillableSingleTargetDemoComponent } from './d3drillablesingletarget/d3drillablesinglecharts.demo.component';

export const DRILLABLECHART_ROUTE: Routes = [

    {
        path: 'drillable-with-single-target-demo', component: AmexioD3DrillableSingleTargetDemoComponent,
    },
    {
        path: 'drillable-with-multiple-target-demo', component: AmexioD3DrillableMultipleTargetDemoComponent,
    }
   
]