import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from 'amexio-ng-extensions'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'router-animation-demo',
  templateUrl: './router-animation.html',
})
export class RouterAnimationDemo {
  title = 'routinglink';
  alterflag: boolean = false;
  radioGroupData: any;
  styleType: string = 'slide-right';

  constructor(public router: Router,
    public acR: ActivatedRoute,
     private rs: RouterService) {
    rs.initializeRouter(router);
    this.radioGroupData = {
      data: [{
        "routertype": "slide-left",
        "route":"child-route-left"
      },
      {
        "routertype": "slide-right",
        "route":"child-route-right"
      },
      {
        "routertype": "slide-top",
        "route":"child-route-top"
      },
      {
        "routertype": "slide-bottom",
        "route":"child-route-bottom"
      }]
    }
  }
  setSelectedType(event: any) {

   this.styleType = event.routertype;
    this.router.navigate([event.route],{relativeTo: this.acR});
  }
  alter() {
    // this.router.navigate(['router-animation/input-mask']);
   // this.router.navigate(['/child-route']);
    this.alterflag = !this.alterflag;
  }
}
