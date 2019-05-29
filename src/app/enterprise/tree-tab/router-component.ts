import { Component } from "@angular/core";
import { Router, Routes } from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
@Component({
    selector: 'route-component',
    template: `

    <div>
    <router-outlet></router-outlet>
    </div>
    `
})
export class RouteComponent {

    constructor(public _router: Router) {

    }

    navigate(data: any) { 
        if (data) {
        this._router.navigate(['enterprise/tree-tab-demo/home'], { queryParams: { page: data.text } });
    }
}
}

// export const APP_ROUTE: Routes = [/**Forms Routes*/
//     {
//         path: 'home1', component: HomePageComponent
//     },
//     {
//         path: 'home2', component: HomePage2Component
//     }]