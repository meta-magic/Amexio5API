import { Component } from "@angular/core";
import { Router, Event } from "@angular/router";

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

    navigate(path: string) {
        debugger
        this._router.navigate([path]);
    }
}

